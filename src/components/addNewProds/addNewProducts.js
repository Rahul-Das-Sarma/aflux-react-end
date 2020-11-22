import React, { useEffect, useState } from 'react';
import './addNewProducts.css';
import axios from 'axios';
import baseaxios from '../../axios';

const AddNewProduct = () => {
 const [pic , setPic] = useState("https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png");
 const [image, setImage] = useState("");
 const [url, setUrl] = useState("");
const [title, setTitle] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("")
const [category, setCategory] = useState("");
  
useEffect(() => {
    if(url){
        baseaxios.post("/addnewproducts",{
         title,
         pic:url,
         price,
         category,
         description
        }).then(data => console.log(data))
        .catch(err => console.log(err))
      setPic("https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png")
      setDescription("")
      setTitle("")
      setCategory("")
      setPrice("")
             
    }
}, [url])

 const HandleClick = () => {
    const data = new FormData()
    data.append("file", image, image.name );
    data.append("upload_preset", "e-comm");
    data.append("cloud_name", "dz8srutis");
    axios.post("https://api.cloudinary.com/v1_1/dz8srutis/image/upload",data).then(res=> {
      console.log(res.data);
     setUrl(res.data.url)
    })   
    .catch(err => console.log(err))

 }
 
 const handleChange = (event) => {
setImage(event.target.files[0])

const reader = new FileReader();

reader.onload = () => {
    if(reader.readyState === 2) {
        setPic(reader.result);
    }
}
reader.readAsDataURL(event.target.files[0]);
  
 }


    return(
        <div className = "container" >
           <div className="NewProduct-card">
            <div style={{textAlign:"center"}}>
            <h1 className="heading-1">Add A New Product </h1>
            </div>
            
            <div className="form">
                <div className="image-preview">
                <img className="image-upload-style" src={pic} alt="" />
                            <input type="file" className="upload-pic" onChange={handleChange} accept="image/*" />
                </div>

                <div className="category-image">
                    <input type="text" onChange={e => setCategory(e.target.value)} value={category} className= "category" required />
                   <label htmlFor="category" className="category-name" ><span className="category-title">Category</span> </label>
             
                </div>
            
               <div className="form-name">
           <input className="Input-Styles" value={title} onChange={e => setTitle(e.target.value)} autoComplete="off" type="text" required ></input>
          <label htmlFor="title" className="label-title"><span className="content-title">Title</span></label>
           </div>

           <div className="form-price">
           <input className="Input-Styles" value={price} autoComplete="off" onChange={e => setPrice(e.target.value)} type="text" required ></input>
          <label htmlFor="price" className="label-price"><span className="content-price">Price ₹</span></label>
           </div>  
           
             <div className="form-description">
           <input className="Input-Styles" value={description} onChange={e => setDescription(e.target.value)} autoComplete="off" type="text" required ></input>
          <label htmlFor="description" className="label-description"><span className="content-description">Description</span></label>
           </div>

          <div className="upload-Button">
              <button className="btn-upload" onClick={()=>HandleClick()}>Upload  Product</button>
          </div>
          
           </div>

            </div>
            
        </div>
    )
}

export default AddNewProduct;