import React, { PropTypes } from 'react';
import ProductItem from '../../../../component/item/productItem';
import Home from '../../../../img/Home.png';
import arrowLeft from '../../../../img/arrowLeft.png';
import MenuLeft from '../../../../component/menuLeft/indexClient';
const products = (props) => {
    return (
        <div className="container boody margins">
          <div className="TieuDe bg-white mt-3 d-flex">
            <img className="hm" src={Home} alt />
            <img className="hms" src={arrowLeft} alt />
            <p className="text-uppercase font-weight-bold Name">Giới thiệu</p>
          </div>
          <div className="row mt-3">
             <MenuLeft/>
            <div class="col-sm-8 bodyRight">
            <h4 class="text-uppercase font-weight-bold text-center "> SẢN PHẨM</h4>
            <div class="row cactren">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
          </div>
        </div>
       
    );
};

products.displayName = 'products';

products.propTypes = {
};

export default products;
