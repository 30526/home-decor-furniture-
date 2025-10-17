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
        if (isDuplicate) return alert("Already added to the wish list")
        const updatedWishList = [...wishList, product];
        localStorage.setItem('wishList', JSON.stringify(updatedWishList));
    }
    catch (err) {
        console.log(err)
    }
}

export const removeListItem = (id) => {
    const wishList = loadWishList();
    const updatedList = wishList.filter(p => p.id !== id);
    localStorage.setItem('wishList', JSON.stringify(updatedList));
}