import { toast } from "react-toastify";

export const loadWishList = () => {
    try {
        const data = localStorage.getItem('wishList');
        return data ? JSON.parse(data) : [];
    }
    catch (err) {
        console.log(err)
        return [];
    }
}

export const updateList = (product) => {
    const wishList = loadWishList();
    try {
        const isDuplicate = wishList.some(p => p.id === product.id);
        if (isDuplicate) return toast.error("Already added to the wish list")
        const updatedWishList = [...wishList, product];
        localStorage.setItem('wishList', JSON.stringify(updatedWishList));
        toast.success('Added to the Wish List')
    }
    catch (err) {
        console.log(err)
    }
}

export const removeListItem = (id) => {
    toast.success('Removed from the list')
    const wishList = loadWishList();
    const updatedList = wishList.filter(p => p.id !== id);
    localStorage.setItem('wishList', JSON.stringify(updatedList));
}