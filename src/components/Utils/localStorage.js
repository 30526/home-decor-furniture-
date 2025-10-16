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