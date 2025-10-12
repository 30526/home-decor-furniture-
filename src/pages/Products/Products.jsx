import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../../components/Product/Product';

const Products = () => {
    const { products } = useProducts()
    return (
        <div>
            <div className='text-center text-4xl font-bold mb-10'>
                <h2>See All Products</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;