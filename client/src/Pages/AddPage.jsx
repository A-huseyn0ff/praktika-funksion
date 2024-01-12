// import React, { useState } from 'react'
// import { Helmet } from 'react-helmet'
// import './add.scss'
// import axios from 'axios'
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// const AddPage = () => {
//     const [icon,setIcon]=useState('')
//     const [name,setName]=useState('')
//     const [title,setTitle]=useState('')

import { Helmet } from "react-helmet";

//     const handleSubmit=async()=>{
//        await axios.post("http://localhost:3000/pro",{
//         icon:icon,
//         name:name,
//         title:title
//        })
      
//     }
//   return (
//     <>
//     <Helmet>
// <title>Add</title>
//     </Helmet>
//     <div className='container'>
//     <Formik
//        initialValues={{ icon: '', name: '', title: '' }}
//        validationSchema={Yup.object({
//         icon: Yup.string()
//            .max(15, 'Must be 15 characters or less')
//            .required('ICON DAXIL ET'),
//            name: Yup.string()
//            .max(20, 'Must be 20 characters or less')
//            .required('AD DAXIL ET'),
//            title: Yup.string().required('title yaz'),
//        })}
//        onSubmit={(values, { setSubmitting }) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            setSubmitting(false);
//            setIcon(Icon)
//            setName(Name)
//            setTitle(Title)
//          }, 400);
//        }}
//      >
//     <Form onSubmit={(e)=>handleSubmit(e)}>
//       <Field type="text"  placeholder='enter icon' name='icon' value={Icon} />
      
//          <ErrorMessage name="icon" />
//       <Field type="text" placeholder='enter name' name='name' value={Name} />
//          <ErrorMessage name="name" />
//       <Field type="text" placeholder='enter title' name='title' value={Title} />
     
//          <ErrorMessage name="title" />
//       <button type='Submit'>Add</button>
//     </Form>
//     </Formik>
//     </div>
//     </>
//   )
// }

// export default AddPage
// ... (import statements)
import './add.scss'
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const AddPage = () => {
 
  
    const handleSubmit = async (values) => {
      
      await axios.post("http://localhost:3000/pro", {
        icon: values.icon,
        name: values.name,
        title: values.title,
      });
    }
  
    return (
      <>
        <Helmet>
          <title>Add</title>
        </Helmet>
        <div className='container'>
          <Formik
            initialValues={{ icon: '', name: '', title: '' }}
            validationSchema={Yup.object({
              icon: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('ICON DAXIL ET'),
              name: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('AD DAXIL ET'),
              title: Yup.string().required('title yaz'),
            })}
            onSubmit={(values, { setSubmitting }) => {
            
              handleSubmit(values);
              setSubmitting(false);
            }}
          >
            <Form>
              <Field type="text" placeholder='enter icon' name='icon' />
              <ErrorMessage name="icon" />
              <Field type="text" placeholder='enter name' name='name' />
              <ErrorMessage name="name" />
              <Field type="text" placeholder='enter title' name='title' />
              <ErrorMessage name="title" />
              <button type='Submit'>Add</button>
            </Form>
          </Formik>
        </div>
      </>
    )
  }
  
  export default AddPage;
  