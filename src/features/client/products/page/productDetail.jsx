import React, { PropTypes } from 'react';
import ProductItem from '../component/productMore';
import ProductDetail from '../component/productInfo';
const productDetail = (props) => {
    return (
         <div className="container boody margins">
        	<div className="TieuDe bg-white mt-3 d-flex">
          		<img className="hm" src="img/Home.png" alt="" />
          		<p className="text-uppercase font-weight-light Name"> Sản phẩm</p>
          		<img className="hms" src="img/arrowLeft.png" alt="" />
          		<p className="text-uppercase font-weight-bold Name">Chi tiết sản phẩm</p>
        	</div>
        	<div className="row mt-3">
          		<div className="col-sm-12 mt-3">
            		<div className="row" id="sp-1">
            			<ProductDetail/>
              			<div className="splienquan mt-3" style={{marginLeft: '65px'}}>
                		<h4 className="text-center font-weight-bold mb-3">SẢN PHẨM LIÊN QUAN</h4>
                		<div className="row ml-3">
                			<ProductItem/>
                			<ProductItem/>
                			<ProductItem/>
                			<ProductItem/>
                		</div>
              		</div>
            	</div>
          	</div>
        </div>
      </div>
    );
};

productDetail.displayName = 'productDetail';

productDetail.propTypes = {
};

export default productDetail;
