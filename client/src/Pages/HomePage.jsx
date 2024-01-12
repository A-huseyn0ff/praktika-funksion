import React from 'react'
import Helmet from 'react-helmet'
import Products from '../Components/Products/Products'
const HomePage = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Products></Products>
    </>
  )
}

export default HomePage
