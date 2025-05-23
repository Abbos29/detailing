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
    const totalPages = Math.ceil(data.count / 5); // Totalt antall sider, data.count må hentes fra backend
    const [view, setView] = useState('grid');
    const [products, setProducts] = useState(data);

    const sortOptions = ['Pris: Lav til Høy', 'Pris: Høy til Lav'];

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
                        <h3>Filtre</h3>
                        <div className={s.filterMenu}>
                            <FilterAccordion title="Produkttype" defaultOpen>
                                {categories.map((cat) => (
                                    <FilterOption
                                        key={cat.name}
                                        label={cat.name}
                                        checked={cat.id === +category}
                                        onChange={(lbl, chk) => handleCheckbox(cat.id, chk, 'category')}
                                    />
                                ))}
                            </FilterAccordion>
                            <FilterAccordion title="Merke">
                                {brands.map((b) => (
                                    <FilterOption
                                        key={b.name}
                                        label={b.name}
                                        checked={b.id === +brand}
                                        onChange={(lbl, chk) => handleCheckbox(b.id, chk, 'brand')}
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
                                        ? 'Pris: Lav til Høy'
                                        : ordering === '-price'
                                            ? 'Pris: Høy til Lav'
                                            : 'Velg'
                                }
                                label="Sorter etter"
                                onChange={(selected) => {
                                    const newOrdering = selected === 'Pris: Lav til Høy' ? 'price' : '-price';
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
                                <h2>Ikke funnet...</h2>
                            </div>
                        )}
                    </div>
                </div>
                <div className={s.pagintaion_wrap}>
                    <ResponsivePagination
                        className={s.page_filter}
                        current={page}
                        total={totalPages}
                        onPageChange={onPageChange} // sideendring
                    />
                </div>
            </Container>
        </section>
    );
};

export default CatalogWrap;
