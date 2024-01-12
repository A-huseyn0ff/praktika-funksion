import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

const Detailpage = () => {
    const {id}=useParams()
    const [detail, setDetail] = useState(null)
    function fetchdata() { fetch(`http://localhost:3000/pro/${id}`).then(res => res.json()).then(datas => setDetail(datas))}

    useEffect(()=>{
        fetchdata()
    })
  return (
    <>
   
{detail && 
<>
<Helmet>
 <title>{detail.name}</title>
</Helmet>
<div className='cards' key={detail._id}>

              <i class={`fa-regular fa-solid ${detail.icon}`}></i>
              <h2>{detail.name}</h2>
              <p>{detail.title}</p>
             
            </div>
</>
}
    </>
  )
}

export default Detailpage
