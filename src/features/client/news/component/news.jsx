import React, { PropTypes } from 'react';
import newPtr from '../../../../img/new.jpg';
import Lich from '../../../../img/Lich.png'
const news = (props) => {
    return (
        <div className="nd ">
        	<div className=" text-left tt1">
          		<a href><img className="card-img-top" src={newPtr} alt="" style={{border: '7px solid white', width: '100%', height: '190px'}} /></a>
          		<div className="mt-2" style={{backgroundColor: 'transparent'}}>
            	<a className="ND" href>
              		<h5 className=" font-weight-bold mb-2">Những trường này là hoàn toàn đơn giản và dễ dàng phân biệt</h5>
            	</a>
            	<div className="lich d-flex mb-1"><img src={Lich} alt="" />
              		<p className="Info">25-1-2018</p>
            	</div>
            	<a className="ND1" href>
              		<p className=" font-weight-light">Không ai từ chối, không thích, hoặc tránh được khoái cảm, bởi vì nó là niềm vui </p>
            	</a>
          	</div>
        </div>
      </div>
    );
};

news.displayName = 'Component';

news.propTypes = {
};

export default news;
