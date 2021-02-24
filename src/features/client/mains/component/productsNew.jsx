import React, { PropTypes } from 'react';
import ProducttItem from '../../../../component/item/productItem';
import run  from '../../../../img/run.png';
import git from '../../../../img/git.png'; 
function productRender() {
	for (var i = 0; i <= 7; i++) {
		return (<ProducttItem/>)
	}
}
const productNew = (props) => {
    return (
		<div className="Body1 Body3">
		  <div className="container ">
		    <h4 className="text-center pt-3 mb-3">SẢN PHẨM MỚI</h4>
		    <div className="row ">
		      <div className="col-sm-1 mt-2"></div>
		      <div className="col-sm-10 Chinh">
		        <div className="row">
        			<ProducttItem/>
        			<ProducttItem/>
        			<ProducttItem/>
        			<ProducttItem/>
        			<ProducttItem/>
        			<ProducttItem/>
        			<ProducttItem/>
        			<ProducttItem/>
		        </div>
		      </div>
		      <div className="col-sm-1 " />
		    </div>
		    <div className="SHIP">
		      <div className="media phanphoi">
		        <a className="d-flex anh" href="#">
		          <img src={run} alt />
		        </a>
		        <div className="media-body">
		          <h5 className="title tieude">Tùy chọn Phân phối </h5>
		          <p className="thongtin">
		            Bất kỳ thông báo hoặc hướng dẫn nào mà khách hàng của bạn cần biết
		            trước. Tuyệt vời không phải là không đáng tin cậy trong nền kinh tế
		            thị trường tự do. Danh từ bố trí trong danh mục đầu tư, đường kính
		            không phải là không có trong euismod tincidunt.
		          </p>
		        </div>
		      </div>
		      <div className="media phanphoi">
		        <a className="d-flex anh" href="#">
		          <img src={git} alt />
		        </a>
		        <div className="media-body">
		          <h5 className="title tieude">Quà tặng &amp; Bao bì</h5>
		          <p className="thongtin">
		            Chúng tôi có mức giá áp dụng cho gói quà đặc biệt với giá trị tuyệt
		            vời! Tuyệt vời không phải là không đáng tin cậy trong nền kinh tế
		            thị trường tự do. Danh từ bố trí trong danh mục đầu tư, đường kính
		            không phải là không có trong euismod tincidunt..
		          </p>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
    );
};

productNew.displayName = 'productNew';

productNew.propTypes = {
};

export default productNew;
