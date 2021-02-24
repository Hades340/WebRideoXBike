import React, { PropTypes } from 'react';
import about from '../../../../img/about.jpg';
const reviews = (props) => {
    return (
        <div className="Body2">
		  <div className="container ">
		    <div className="row ">
		      <div className="col-sm-1 "></div>
		      <div className="col-sm-10 top bg-white">
		        <div className=" FL mr-3">
		          <div className="media-body">
		            <h5 className="title tin">Giới thiệu sản phẩm</h5>
		            <p className="text font-weight-light">
		              Giới thiệu về một số thông tin về doanh nghiệp của bạn ở đây. Bạn
		              có thể chỉnh sửa nội dung này từ Theme -Options -&gt; Trang chủ
		              -&gt; Giới thiệu / Cài đặt lời chứng thực . Tuyệt vời không phải
		              là không đáng tin cậy trong nền kinh tế thị trường tự do. Lorem
		              ipsum dolor ngồi amet, consect etuer adipisc trong elit, tự làm
		              empsum dolor ngồi amet, con ở hendrerit vulputate velit tại
		              sectetuer adipisc trong elit.
		            </p>
		            <p className="text font-weight-light">
		              <b>Bạn cũng có thể đặt một nút ở đây </b>để thúc giục khách truy
		              cập biết thêm về bạn hoặc doanh nghiệp của bạn. Duis autem vel eum
		              iriure dolor trong hendrerit trong vulputate velit esse molestie
		              kết quả, vel illum dolore eu feugiat nulla facilisis tại vero eros
		              et accums and et al iusto z dignissim qui blandit praesent
		              luptatum zzril delenit augues duis dolore te feugait nulla
		              facilisi. Duis autem vel eum iriure dolor hendrerit trong
		              vulputate velit esse molestie consequat, vel illum dolore eu.
		            </p>
		          </div>
		          <a className=" ml-3" href="#">
		            <img
		              src={about}
		              alt
		              style={{ width: 342, height: 260, borderRadius: 5 }}
		            />
		          </a>
		        </div>
		      </div>
		      <div className="col-sm-1 " />
		    </div>
		  </div>
		</div>

    );
};

reviews.displayName = 'reviews';

reviews.propTypes = {
};

export default reviews;
