import React, { PropTypes } from 'react';
import News from '../component/news';
import MenuLeft from '../../../../component/menuLeft/indexClient';
import Home from '../../../../img/Home.png';
import arrowLeft from '../../../../img/arrowLeft.png';
const listNews = (props) => {
    return (
        <div className="container TinTuc margins">
        <div className="TieuDe bg-white mt-3 d-flex">
          <img className="hm" src={Home} alt="" />
          <img className="hms" src={arrowLeft} alt="" />
          <p className="text-uppercase font-weight-bold Name">Tin tức</p>
        </div>
        <div className="row mt-3">
       	  <MenuLeft/>
          <div className="col-sm-7 bodyRight">
            <h4 className="text-uppercase font-weight-bold text-center mb-3"> Tin tức</h4>
	            <News/>
	            <News/>
	            <News/>
	            <News/>
	            <News/>
          </div>
        </div>
      </div>
    );
};

listNews.displayName = 'listNews';

listNews.propTypes = {

};

export default listNews;
