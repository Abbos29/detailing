import React, { useState, useEffect } from 'react'
import s from './CatalogWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import { BsGrid, BsListUl } from 'react-icons/bs'
import Dropdown from '@/components/ui/Dropdown/Dropdown'
import ProductCard from '@/components/ui/ProductCard/ProductCard'

// Filter Accordion Component
const FilterAccordion = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div className={`${s.accordionItem} ${isOpen ? s.active : ''}`}>
            <div
                className={s.accordionHeader}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4>{title}</h4>
                <span className={s.icon}>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className={s.accordionContent}>
                    {children}
                </div>
            )}
        </div>
    )
}

// Filter Option Component
const FilterOption = ({ label, checked = false }) => {
    return (
        <label className={s.filterOption}>
            <input type="checkbox" defaultChecked={checked} />
            <span>{label}</span>
        </label>
    )
}

// View Toggle Component
const ViewToggle = ({ view, setView }) => {
    return (
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
    )
}

const CatalogWrap = () => {
    const [products, setProducts] = useState([])
    const [filterCategories, setFilterCategories] = useState([])
    const [loading, setLoading] = useState(true)

    const [view, setView] = useState('grid') //

    const sortOptions = ['Best Selling', 'Price: Low to High', 'Price: High to Low', 'Newest', 'Oldest']

    const handleSortChange = (option) => {
        if (option === 'Price: Low to High') {
            setProducts([...products].sort((a, b) => a.price - b.price))
        } else if (option === 'Price: High to Low') {
            setProducts([...products].sort((a, b) => b.price - a.price))
        }
    }

    useEffect(() => {
        const fetchProducts = () => {
            setTimeout(() => {
                const productData = [
                    { id: 1, image: '/img/product1.png', name: 'MTM Hydro PF22.2 Foam Cannon', price: 25.23 },
                    { id: 2, image: '/img/product1.png', name: 'MTM Hydro PF22.2 Foam Cannon', price: 25.23 },
                    { id: 3, image: '/img/product1.png', name: 'MTM Hydro PF22.2 Foam Cannon', price: 25.23 },
                ]
                setProducts(productData)
                setLoading(false)
            }, 500)
        }

        const fetchFilterCategories = () => {
            setTimeout(() => {
                const filterData = [
                    { title: "Product Type", options: ["All Purpose Cleaners", "Carpet & Upholstery"] },
                    { title: "Brand", options: ["MTM Hydro", "Chemical Guys"] },
                ]
                setFilterCategories(filterData)
            }, 500)
        }

        fetchProducts()
        fetchFilterCategories()
    }, [])

    return (
        <section className={s.catalogWrap}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.filter}>
                        <h3>Filters</h3>
                        <div className={s.filterMenu}>
                            {filterCategories.map((category, index) => (
                                <FilterAccordion key={category.title} title={category.title} defaultOpen={index === 0}>
                                    {category.options.map(option => (
                                        <FilterOption key={option} label={option} />
                                    ))}
                                </FilterAccordion>
                            ))}
                        </div>
                    </div>

                    <div className={s.products}>
                        <div className={s.products__top}>
                            <Dropdown
                                options={sortOptions}
                                defaultValue="Best Selling"
                                label="Sort by"
                                onChange={handleSortChange}
                            />
                            <ViewToggle view={view} setView={setView} />
                        </div>

                        <div className={`${s.products__list} ${view === 'list' ? s.list : ''}`}>
                            {loading ? (
                                <div className={s.loading}>Loading products...</div>
                            ) : (
                                products.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        image={product.image}
                                        name={product.name}
                                        price={product.price}
                                        view={view} // можно передать в карточку если нужно отображение менять внутри
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}


export default CatalogWrap