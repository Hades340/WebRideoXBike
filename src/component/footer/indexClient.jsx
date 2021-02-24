import React, { PropTypes, useState, useEffect  } from 'react';
import Back from '../../img/back.png';
const footer = (props) => {
    return (
        <div>
	  {/* start footter */}
	  <div className="footer">
	    {/* bắt đầu footer */}
	    <div className="container Ft">
	      <div className="row">
	        <div className="col-sm-3">
	          <div className="diachi">
	            <h5>Thời gian làm việc</h5>
	            <p className="Thongbao">
	              Thời gian làm việc của chúng tôi là: Thứ 2 - thứ 6: 8 giờ sáng - 8
	              giờ tối Thứ 7: 9 giờ sáng - 4 giờ chiều Chủ nhật: đóng cửa
	            </p>
	          </div>
	        </div>
	        <div className="col-sm-3">
	          <div className="diachi">
	            <h5>Thông tin</h5>
	            <p className="Thongbao">
	              Địa chỉ: 14 Phạm Quý Thích, P.Tân Quý, Q.Tân Phú, TPHCM <br />
	              Hotline: 0945.518.538 <br /> Hotline: 0906.308.380 <br />
	              Email: info@123corp.vn
	            </p>
	          </div>
	        </div>
	        <div className="col-sm-3">
	          <div className="diachi">
	            <h5>Danh mục sản phẩm</h5>
	            <nav className="nav ">
	              <a className="nav-link them" href="#">
	                Bánh kẹo
	              </a>
	              <a className="nav-link them" href="#">
	                Trái cây
	              </a>
	              <a className="nav-link them" href="#">
	                ít CupCakes
	              </a>
	            </nav>
	          </div>
	        </div>
	        <div className="col-sm-3">
	          <div className="diachi">
	            <h5>Nhận báo giá</h5>
	            <p className="Thongbao">
	              Email
	              <input
	                className="mt-1"
	                type="text"
	                style={{
	                  width: 216,
	                  height: 37,
	                  borderRadius: 5,
	                  border: "none"
	                }}
	              />
	              <input
	                type="button"
	                className="btn btn-primary mt-2"
	                defaultValue="Đăng ký"
	              />
	            </p>
	          </div>
	        </div>
	      </div>
	    </div>
	    <div className="backTop">
	      <img src={Back} alt />
	    </div>
	  </div>
	  <div className="backTop">
	    <img src={Back} alt />
	  </div>
	  {/* end footter */}
	</div>
    );
};

footer.propTypes = {
};

export default footer;
