// pages/catalog.js
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import CatalogBanner from '@/components/layout/CatalogWrap/CatalogBanner'
import CatalogWrap from '@/components/layout/CatalogWrap/CatalogWrap'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import Container from '@/components/ui/Container/Container'
import Seo from '@/components/ui/Seo/Seo'
import { axiosInstanceProducts } from '@/utils/axios_products'

export async function getServerSideProps({ query }) {
  const {
    brand = '',
    category = '',
    ordering = '',
    search = '',
    page = 1,
  } = query

  const params = {
    page,
    page_size: 6,
  }
  if (brand) params.brand = brand
  if (category) params.category = category
  if (ordering) params.ordering = ordering
  if (search) params.search = search

  let data = { results: [], count: 0 }
  let categories = []
  let brands = []

  try {
    const res = await axiosInstanceProducts.get('/products', { params })
    data = res.data
  } catch (err) {
    console.error('Products fetch failed:', err)
  }

  try {
    const res = await axiosInstanceProducts.get('/categories')
    categories = res.data
  } catch (err) {
    console.error('Categories fetch failed:', err)
  }

  try {
    const res = await axiosInstanceProducts.get('/brands')
    brands = res.data
  } catch (err) {
    console.error('Brands fetch failed:', err)
  }

  return {
    props: {
      data,
      categories,
      brands,
      filters: {
        brand,
        category,
        ordering,
        search,
        page: Number(page),
      },
    },
  }
}

export default function CatalogPage({ data, categories, brands, filters }) {
  const router = useRouter()

  // remove empty search=
  useEffect(() => {
    if (!filters.search && router.query.search === '') {
      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, search: undefined },
        },
        undefined,
        { shallow: true }
      )
    }
  }, [filters.search, router.query.search])

  const handleFilterChange = newFilters => {
    router.replace(
      {
        pathname: '/catalog',
        query: { ...newFilters, page: 1 },
      },
      undefined,
      { shallow: false, scroll: false }
    )
  }

  const handlePageChange = newPage => {
    router.replace(
      {
        pathname: '/catalog',
        query: { ...router.query, page: newPage },
      },
      undefined,
      { shallow: false, scroll: false }
    )
  }

  return (
    <>
      <Seo />
      <Container>
        <Breadcrumbs />
        <CatalogBanner />

        <CatalogWrap
          data={data}
          categories={categories}
          brands={brands}
          filters={filters}
          onFilterChange={handleFilterChange}
          onPageChange={handlePageChange}
        />
      </Container>
    </>
  )
}