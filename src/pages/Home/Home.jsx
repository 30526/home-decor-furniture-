import React from 'react';
import { useLoaderData } from 'react-router';
import Product from '../../components/Product/Product';

const Home = () => {
    const products = useLoaderData();
    const featuredProduct = products.slice(0, 8)
    return (
        <div>
            <div className='text-center text-4xl font-bold mb-10'>
                <h2>Featured Products</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    featuredProduct.map(
                        product =>
                            <Product
                                key={product.id}
                                product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;