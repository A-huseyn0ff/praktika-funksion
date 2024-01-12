import { createContext, useContext, useState } from "react";



const wishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([])

    function AddToWishlist(item) {
        let WishlistCopy = [...wishlist]
        const itemIndex = WishlistCopy.findIndex(x => x._id === item._id)
        if (itemIndex === -1) {
            WishlistCopy.push(item)
            setWishlist(WishlistCopy)
            console.log(wishlist);
            return
        }
        WishlistCopy = WishlistCopy.filter(x=> x._id !== item._id)
        setWishlist(WishlistCopy)
        console.log(wishlist);


    }
    function RemoveToWishlist(item) {
        let WishlistCopy = [...wishlist]
        WishlistCopy = WishlistCopy.filter(x=> x._id !== item._id)
        setWishlist(WishlistCopy)
    }
    const data = {
        wishlist,
        setWishlist,
        AddToWishlist,
        RemoveToWishlist,
    }
    return (
        <wishlistContext.Provider value={data}>
            {children}
        </wishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(wishlistContext)


