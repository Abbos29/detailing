import React, { useState, useEffect } from 'react';
import s from './CatalogWrap.module.scss';
import Container from '@/components/ui/Container/Container';
import { BsGrid, BsListUl } from 'react-icons/bs';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';

const FilterAccordion = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className={`${s.accordionItem} ${isOpen ? s.active : ''}`}>
            <div className={s.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
                <h4>{title}</h4>
                <span className={s.icon}>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className={s.accordionContent}>{children}</div>}
        </div>
    );
};

const FilterOption = ({ label, checked = false, onChange }) => (
    <label className={s.filterOption}>
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(label, e.target.checked)}
        />
        <span>{label}</span>
    </label>
);

const ViewToggle = ({ view, setView }) => (
    <div className={s.viewToggle}>
        <button
            className={`${s.viewButton} ${view === 'grid' ? s.active : ''}`}
            onClick={() => setView('grid')}
        >
            <BsGrid />
        </button>
        <button
            className={`${s.viewButton} ${view === 'list' ? s.active : ''}`}
            onClick={() => setView('list')}
        >
            <BsListUl />
        </button>
    </div>
);

const CatalogWrap = ({ data, categories, brands, filters, onFilterChange, onPageChange }) => {
    const { brand, category, ordering, page } = filters || {};
    const totalPages = Math.ceil(data.count / 5); // Umumiy sahifalar soni, data.count ni backenddan olishingiz kerak
    const [view, setView] = useState('grid');
    const [products, setProducts] = useState(data);

    const sortOptions = ['Price: Low to High', 'Price: High to Low'];

    useEffect(() => {
        setProducts(data);
    }, [data]);

    const handleCheckbox = (label, checked, type) => {
        const newFilters = { ...filters, [type]: checked ? label : '' };
        onFilterChange(newFilters);
    };

    return (
        <section className={s.catalogWrap}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.filter}>
                        <h3>Filters</h3>
                        <div className={s.filterMenu}>
                            <FilterAccordion title="Product Type" defaultOpen>
                                {categories.map((cat) => (
                                    <FilterOption
                                        key={cat.name}
                                        label={cat.name}
                                        checked={cat.name === category}
                                        onChange={(lbl, chk) => handleCheckbox(lbl, chk, 'category')}
                                    />
                                ))}
                            </FilterAccordion>
                            <FilterAccordion title="Brand">
                                {brands.map((b) => (
                                    <FilterOption
                                        key={b.name}
                                        label={b.name}
                                        checked={b.name === brand}
                                        onChange={(lbl, chk) => handleCheckbox(lbl, chk, 'brand')}
                                    />
                                ))}
                            </FilterAccordion>
                        </div>
                    </div>

                    <div className={s.products}>
                        <div className={s.products__top}>
                            <Dropdown
                                options={sortOptions}
                                defaultValue={
                                    ordering === 'price'
                                        ? 'Price: Low to High'
                                        : ordering === '-price'
                                            ? 'Price: High to Low'
                                            : 'Choose'
                                }
                                label="Sort by"
                                onChange={(selected) => {
                                    const newOrdering = selected === 'Price: Low to High' ? 'price' : '-price';
                                    onFilterChange({ ...filters, ordering: newOrdering });
                                }}
                            />
                            <ViewToggle view={view} setView={setView} />
                        </div>
                        {products?.results?.length ? (
                            <div className={`${s.products__list} ${view === 'list' ? s.list : ''}`}>
                                {products.results?.map((product) => (
                                    <ProductCard key={product.id} {...product} view={view} />
                                ))}
                            </div>
                        ) : (
                            <div className={s.empty}>
                                <img src='/img/empty-favourites.webp' alt="" />
                                <h2>Not found...</h2>
                            </div>
                        )}
                    </div>
                </div>
                <div className={s.pagintaion_wrap}>
                    <ResponsivePagination
                        className={s.page_filter}
                        current={page}
                        total={totalPages}
                        onPageChange={onPageChange} // sahifa o‘zgarishi
                    />
                </div>
            </Container>
        </section>
    );
};

export default CatalogWrap;

