import React from 'react'
import { useWishlist } from '../Context/wishlist.jsx'
import { Helmet } from 'react-helmet'

const WishlistPage = () => {
    const {wishlist,RemoveToWishlist}=useWishlist()
  return (
    <>
      <Helmet>
 <title>my wishlist</title>
</Helmet>
    {wishlist.map((item)=>(
        <>
      
 <i class={`fa-regular fa-solid ${item.icon}`}></i>
 <h2>{item.name}</h2>
 <p>{item.title}</p>
 <button onClick={() => RemoveToWishlist(item)}>delete</button>
 </>
    ))}
    </>
  )
}

export default WishlistPage
