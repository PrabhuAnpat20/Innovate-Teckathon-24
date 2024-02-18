import React from 'react';
import { CloudinaryContext, Image ,Transformation} from 'cloudinary-react';

export default function Img(props) {
  const cloudName = 'djwul49pr'; // Replace with your actual cloud name
console.log(props)
  return (
    <CloudinaryContext cloudName={cloudName}>
      <Image publicId={props.publicId} >

        <Transformation crop="fill"  />
      </Image>
    </CloudinaryContext>
  );
}