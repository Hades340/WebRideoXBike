import React, { PropTypes } from 'react';
import sp10 from '../../../../img/sp10.jpg';
const productInfo = (props) => {
    return (
        <div>
	        <div className="col-sm-3" style={{marginLeft: '65px'}}>
	          <img src={sp10} alt="" />
	        </div>
        	<div className="col-sm-4 thangiua">
	          	<h3 className="tensp mb-3 tt"> Muffin</h3>
	          	<div className="d-flex  justify-content-between mb-2">
	            	<p className="font-weight-bold ">Giá khuyến mãi:</p>
	            	<p className="gia">30000</p>
	          	</div>
	          	<p className="font-weight-bold">Mô tả:</p>
	          	<p className="ndct">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore</p>
        	</div>
        	<div className="col-sm-4">
	          <input className="nhap" type="number" name id defaultValue={1} /><br />
	          <button className="btn btn-success mt-3 themsp font-weight-bold adds" maid={1}>Thêm vào giỏ</button><br />
	          <button className="btn btn-danger mt-3 muasp font-weight-bold">Mua ngay</button>
        	</div>
        	<div className="CTSP mt-3" style={{marginLeft: '65px'}}>
        	</div>
        </div>
    );
};

productInfo.displayName = 'productInfo';

productInfo.propTypes = {
};

export default productInfo;
