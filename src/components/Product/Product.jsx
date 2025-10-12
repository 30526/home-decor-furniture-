import React from 'react';

const Product = ({ product }) => {
    const { id, name, category, price, material, dimensions, stock, image, description } = product;
    return (
        <div className="card bg-base-100 shadow-sm h-full">
            <figure className='object-cover h-fit w-full max-h-75'>
                <img 
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;