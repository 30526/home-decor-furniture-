import React from 'react';
import { Link, useParams } from 'react-router';
import useProducts from '../../hooks/useProducts';


const ProductDetails = () => {
  
    const { id } = useParams()
    const [products, loading] = useProducts()
    const product = products.find(p => String(p.id) === id);
    if (loading) return <p>Loading.....</p>;
    const { name, image, description, price, category } = product;
  
    return (
        <div>

            <div className="card bg-base-100 text-left shadow-sm h-full gap-10">
                <div>
                    <figure className='object-cover h-fit w-full'>
                        <img
                        className='mr-auto'
                            src={image}
                            alt="Shoes" />
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <p> Category: {category}</p>
                    <div className="card-actions justify-end">
                        <Link

                            className="btn btn-outline">Add to WishList</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;