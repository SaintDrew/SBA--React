import React from 'react';
import LoaderImg from "../../images/loading.png";
import "./Loader.css";

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src = {LoaderImg} alt = "loader" />
    </div>
  )
}

export default Loader