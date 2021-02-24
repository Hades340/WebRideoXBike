import React, { PropTypes } from 'react';
import Slider from '../component/slide';
import Review from '../component/reviews';
import ProductType from '../component/productType';
import Product from '../component/productsNew';
const index = (props) => {
    return (
        <div className="than">
        	<Slider/>
        	<ProductType/>
        	<Review/>
        	<Product/>
        </div>
    );
};

index.displayName = 'index';

index.propTypes = {

};

export default index;
