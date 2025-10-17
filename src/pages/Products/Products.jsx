import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../../components/Product/Product';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';

const Products = () => {

    const [products, loading] = useProducts();
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();
    const searchedProducts = term ? products.filter(product => product.name.toLowerCase().includes(term)) : products;

    return (
        <div>
            <div className='flex justify-between items-center mb-10'>
                <h2 className='text-3xl font-bold'>
                    See All Products
                    <span className='ml-2 text-xs text-gray-500'>({searchedProducts.length}) products found</span></h2>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input
                        value={search}
                        onChange={e => { setSearch(e.target.value) }}
                        type="search"
                        placeholder="Search" />
                </label>
            </div>
            {
                loading ? <SkeletonLoader count='16' /> :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            searchedProducts.map(product =>
                                <Product
                                    key={product.id}
                                    product={product}></Product>)
                        }
                    </div>
            }
        </div>
    );
};

export default Products;