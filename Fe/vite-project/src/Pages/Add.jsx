import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
function Add() {
  return (
   <>
   <Formik
       initialValues={{ title: '', des: '', icon: '',price:"" }}
       validationSchema={Yup.object({
         title: Yup.string(),
           
         des: Yup.string(),
           
         icon: Yup.string(),
         price: Yup.number()
       })}
       onSubmit={(values ) => {
        fetch("http://localhost:3000/mongoose/",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(values)
        })
       }}
     >
       <Form>
         <label htmlFor="title">First Name</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
  <br></br>
         <label htmlFor="des">Last Name</label>
         <Field name="des" type="text" />
         <ErrorMessage name="des" />
 <br></br>
         <label htmlFor="icon">icon Address</label>
         <Field name="icon" type="icon" />
         <ErrorMessage name="icon" />
 <br></br>
 <label htmlFor="price">First Name</label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
         <button type="submit">Submit</button>
       </Form>
     </Formik>
   </>
  )
}

export default Add