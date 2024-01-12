import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './Pro.scss'
import axios from 'axios';
import { useWishlist } from '../../Context/wishlist';

const Products = () => {
  const [data, setData] = useState([])
  const [sort, setSort] = useState('')
  const [sortValue, setSortValue] = useState(null)
  const { AddToWishlist } = useWishlist()

  function fetchdata() { fetch("http://localhost:3000/pro").then(res => res.json()).then(datas => setData(datas)) }
  async function handleDel(id) {

    await axios.delete(`http://localhost:3000/pro/${id}`)
    fetchdata()

  }

  useEffect(() => {

    fetchdata()
  }, [])


  return (
    <section className='products'>
      <div className='pro_container'>
        <div className='title'>
          <h2>Our Service</h2>

        </div>
        <div className='filtersort_container'>
          <input type="text" placeholder='search' onChange={(e) => setSort(e.target.value)} />
          <button onClick={() => setSortValue({ property: "name", asc: true })}>a-z</button>
          <button onClick={() => setSortValue({ property: "name", asc: false })}>z-a</button>
          <button onClick={() => setSortValue(null)}>default</button>
          <div className='filter'>

          </div>
          <div className='sort'></div>
        </div>
        <div className='product-row'>
          {data && data
            .filter((x) => x.name.toLowerCase().includes(sort.toLowerCase()))
            .sort((a, b) => {
              if (sortValue && sortValue.asc === true) {
                return (a[sortValue.property] > b[sortValue.property]) ? 1 : ((b[sortValue.property] > a[sortValue.property]) ? -1 : 0)
              }
              else if (sortValue && sortValue.asc === false) {
                return (a[sortValue.property] < b[sortValue.property]) ? 1 : ((b[sortValue.property] < a[sortValue.property]) ? -1 : 0)

              }
              else {
                return 0
              }
            })
            .map((item) => (
              <div className='cards' key={item._id}>
                <i class={`fa-regular fa-solid ${item.icon}`}></i>
                <h2>{item.name}</h2>
                <p>{item.title}</p>
                <Link to={`/${item._id}`}>See details</Link>
                <button onClick={() => handleDel(item._id)}>delete</button>
                <button onClick={() => AddToWishlist(item)}>Add to wishlist</button>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Products
