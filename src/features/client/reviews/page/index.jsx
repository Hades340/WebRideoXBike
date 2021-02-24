import React, { PropTypes } from 'react';
import MenuLeft from '../../../../component/menuLeft/indexClient';
import Mains from '../component/review';
import Home from '../../../../img/Home.png';
import arrowLeft from '../../../../img/arrowLeft.png';
const reviews = (props) => {
    return (
		<div className="container boody margins">
		  <div className="TieuDe bg-white mt-3 d-flex">
		    <img className="hm" src={Home} alt />
		    <img className="hms" src={arrowLeft} alt />
		    <p className="text-uppercase font-weight-bold Name">Giới thiệu</p>
		  </div>
		  <div className="row mt-3">
		 	 <MenuLeft/>
		 	 <Mains/>
		  </div>
		</div>
    );
};

reviews.displayName = 'reviews';

reviews.propTypes = {
};

export default reviews;
