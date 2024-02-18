import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Button1 from "../components/Buttons/button1";
import Footer from "../components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import Img from "../components/Img";
export default function Home() {



  // import React, { useState, useEffect } from 'react';

  
    // const [imageUrl, setImageUrl] = useState('');
    // const cloudName = 'djwul49pr';
    // const publicId = 'n7fluvteh4df1x0vfegq';
    // const imageFormat = 'file'; 
  
    // useEffect(() => {
    //   const fetchImage = async () => {
    //     try {
    //       const response = await fetch(
    //         `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}.${imageFormat}`
    //       );
  
    //       if (!response.ok) {
    //         throw new Error('Failed to fetch image');
    //       }
  
    //       const data = await response.blob();
    //       const objectURL = URL.createObjectURL(data);
  
    //       setImageUrl(objectURL);
    //     } catch (error) {
    //       console.error(error.message);
    //     }
    //   };
  
    //   fetchImage();
    // }, [cloudName, publicId, imageFormat]);
  
    // return (
    //   <div>
    //     <h2>Your Cloudinary Image</h2>
    //     {imageUrl && <img src={imageUrl} alt="Cloudinary Image" />}
    //   </div>
    // );
  
  // export default CloudinaryImage;
  





  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <>
     
      <div className="">
        <div className=" bg-green-600 p-5 md:flex ">
          <img src="tractor.webp" alt="" className="" />
          <div className=" text-center md:my-auto">
            <p className=" my-5 font-semibold md:p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              at nam error nesciunt sit, officia magni quam vero culpa. Porro
              repellendus aspernatur aut enim cumque magni excepturi iste beatae
              possimus?
            </p>

            <NavLink to="/get">
              <button className=" border-solid border-7 border-green-700 bg-white py-2 px-4 font-semibold rounded-md">
                book
              </button>
            </NavLink>
          </div>
        </div>
        <div className=" my-6 flex justify-center" >
          <img src="services.jpg" alt="" className="h-[200px] md:h-[500px]" />
        </div>
      </div>
      <div className="md:flex my-5" >
        <img src="app.png" alt="" className=" w-[300px] ml-auto mr-auto  md:w-2/5 ml-9"/>
        <p className="text-center w-[400px] md:my-auto w-[600px] mx-auto font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus modi, eligendi dolorum, maxime optio consequatur earum eveniet beatae facilis incidunt dignissimos. Aperiam aspernatur quam iusto. Minima pariatur repellendus fuga. Voluptas?</p>
      </div>


      <div className=" md:flex my-5" >
      <p className=" text-center w-[400px] md:my-auto w-[600px] mx-auto font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus modi, eligendi dolorum, maxime optio consequatur earum eveniet beatae facilis incidunt dignissimos. Aperiam aspernatur quam iusto. Minima pariatur repellendus fuga. Voluptas?</p>
        <img src="home1.png" alt="" className="w-[300px] ml-auto mr-auto   md:w-2/5 ml-9 " />
        
      </div>
    </>
  );
}
