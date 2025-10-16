import React, { useEffect, useState } from 'react';
import Charts from '../../components/Charts/Charts';

const WishList = () => {
    const [getItem, setGetItem] = useState([]);
    const [sort, setSort] = useState('none');

    const sortedItem = (
        () => {
            if (sort === 'asc') {
                return [...getItem].sort((a, b) => a.price - b.price);
            }
            else if (sort === 'dsc') {
                return [...getItem].sort((a, b) => b.price - a.price);
            }
            else {
                return getItem;
            }
        }
    )();
    const handleRemoveBtn = (id) => {
        const getSavedData = JSON.parse(localStorage.getItem('wishList'));
        const updatedData = getSavedData.filter(data => data.id !== id);
        localStorage.setItem('wishList', JSON.stringify(updatedData))
        setGetItem(updatedData);
    }

    useEffect(() => {
        const getStorageItem = JSON.parse(localStorage.getItem('wishList'));
        if (getStorageItem) setGetItem(getStorageItem);
    }, [])
    return (
        <div>
            <div className='flex justify-between items-center mb-10'>
                <h2 className='text-3xl font-bold'>
                    Your Wish List
                    <span className='ml-2 text-xs text-gray-500'>({getItem.length}) products added</span></h2>
                <div>
                    <label className='form-control max-w-xs'>
                        <select
                            className='select' value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value="none">Sort by Price</option>
                            <option value="asc">Low to High</option>
                            <option value="dsc">High to Low</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className='mt-10 flex flex-col gap-4'>
                {
                    sortedItem.map(wish =>
                        <div key={wish.id} className='flex justify-between items-center p-4 shadow-2xs border-2 border-gray-100 rounded-2xl'>
                            <div className='flex gap-4'>
                                <img className='w-fit h-35 rounded-2xl' src={wish.image} alt="" />
                                <div>
                                    <h3 className='font-bold text-2xl'>{wish.name}</h3>
                                    <h3 className='mt-2 text-gray-500'>{wish.description}</h3>
                                    <h3 className='mt-2 text-gray-500'>{wish.category}</h3>
                                    <p className='mt-2 text-gray-800 font-medium'>Price: ${wish.price}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveBtn(wish.id)}
                                className='btn btn-outline'>Remove</button>
                        </div>
                    )}
            </div>
            <Charts  getItem={getItem}></Charts>
        </div >
    );
};

export default WishList;