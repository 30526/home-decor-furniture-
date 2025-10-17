import React from 'react';
import { Link } from 'react-router';
import Product from '../../components/Product/Product';
import useProducts from '../../hooks/useProducts';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';


const Home = () => {
    const data = useProducts()
    const [products, loading] = data;
    const featuredProduct = products.slice(0, 8)
    return (
        <div>
            <div className='text-center text-4xl font-bold mb-10'>
                <h2>Featured Products</h2>
            </div>
            {
                loading ? <SkeletonLoader /> :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            featuredProduct.map(
                                product =>
                                    <Product
                                        key={product.id}
                                        product={product}></Product>)
                        }
                    </div>
            }
            <div className='text-center  mt-10'>
                <Link
                    className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] border-none
                             rounded-lg text-white font-semibold px-10"
                    to={"/products"}>
                    View All
                </Link>
            </div>
        </div>
    );
};

export default Home;