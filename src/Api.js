import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

const Api = () => {
  useEffect(() => {
    getPosts();
  }, []);

  const [category, setCategory] = useState([]);

  const getPosts = () => {
    return Axios.get("https://fakestoreapi.com/products").then(
      (res) => {
        setCategory(res.data);
      }
    );
  };
  getPosts();

  return <div>
    {
    category.map((val, ind)=>{
      return (
      <div key={ind}>
        <p>{val.title} </p>
        <img src={val.image} alt="name" height={300}  width={200}/>
        <p>{val.price}</p>
      </div>)
    })
    }</div>;
};

export default Api;
