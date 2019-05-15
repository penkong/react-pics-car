import React from 'react'

const ImageList = (props) => {
  const images = props.images.map(({description,urls,id}) =>{
    return <img src={urls.regular} key={id} alt={description}/>    
  })
  return (
    <div>
      {images}
    </div>
  );
};

export default ImageList
