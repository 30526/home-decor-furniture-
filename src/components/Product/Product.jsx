import React from 'react';
import { Link } from 'react-router';

const Product = ({ product }) => {
    const { id, name, image, description } = product;
    return (
        <div className="card bg-base-100 shadow-sm h-full hover:scale-101 cursor-pointer transition-transform ease-in duration-100">
            <figure className='object-cover h-fit w-full max-h-75'>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link
                        to={`/product/${id}`}
                        className="btn btn-outline">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;