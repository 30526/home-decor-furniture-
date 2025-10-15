import React from 'react';
import { Link, useParams } from 'react-router';
import useProducts from '../../hooks/useProducts';


const ProductDetails = () => {

    const { id } = useParams()
    const [products, loading] = useProducts()
    const product = products.find(p => String(p.id) === id);
    if (loading) return <p>Loading.....</p>;
    const { name, image, description, price, category } = product;

    const handleAddToWishList = () => {

        const getItem = JSON.parse(localStorage.getItem('wishList'));
        let updatedList = [];

        if (getItem) {
            const isExist = getItem.some(p => p.id === product.id);
            if (isExist) return alert('Already added to the Wish List')
            updatedList = [...getItem, product]
        }
        else {
            updatedList.push(product)
        }

        const productSTR = JSON.stringify(updatedList)
        localStorage.setItem('wishList', productSTR)
    }

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
                            onClick={handleAddToWishList}
                            className="btn btn-outline">Add to WishList</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;