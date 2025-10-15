import React, { useEffect, useState } from 'react';

const WishList = () => {
    const [getItem, setGetItem] = useState([]);
    const getStorageItem = JSON.parse(localStorage.getItem('wishList'));
    useEffect(() => {
        setGetItem(getStorageItem)
    }, [])
    return (
        <div>
            <div className='flex justify-between items-center mb-10'>
                <h2 className='text-3xl font-bold'>
                    Your Wish List
                    <span className='ml-2 text-xs text-gray-500'>({getItem.length}) products added</span></h2>
                <div>
                    <details className="dropdown">
                        <summary className="btn m-1">Sort</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 p-2 shadow-sm">
                            <li><a>Price</a></li>
                            <li><a>Item</a></li>
                        </ul>
                    </details>
                </div>
            </div>
            <div className='mt-10 p-4 flex flex-col gap-4'>
                {
                    getItem.map(wish =>
                        <div key={wish.id} className='flex justify-between items-center p-4 shadow-2xs border-2 border-gray-100 rounded-2xl'>
                            <div className='flex gap-4'>
                                <img className='w-fit h-35 rounded-2xl' src={wish.image} alt="" />
                                <div>
                                    <h3 className='font-bold text-2xl'>{wish.name}</h3>
                                    <h3 className='mt-2 text-gray-500'>{wish.description}</h3>
                                    <h3 className='mt-2 text-gray-500'>{wish.category}</h3>
                                    <p className='mt-2 text-gray-700 font-medium'>Price: ${wish.price}</p>
                                </div>
                            </div>
                            <button className='btn btn-outline'>Remove</button>
                        </div>)

                }
            </div>
        </div>
    );
};

export default WishList;