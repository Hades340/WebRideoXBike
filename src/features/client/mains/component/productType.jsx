import React, { PropTypes } from 'react';
import hinh1 from '../../../../img/Hinh1.png';
import hinh2 from '../../../../img/hinh2.png';
import sp1 from '../../../../img/sp1.jpg';
import sp2 from '../../../../img/sp2.jpg';
import sp3 from '../../../../img/sp3.jpg';
const typeProduct = (props) => {
    return (
        <div className="Body1 mt-1">
          <div className="container">
            <div className="row ">
              {/* bắt đầu phần 1 */}
              <div className="col-sm-3 right">
                <div className="big">
                  <img className="l1" src={hinh1} alt />
                  <div className="new mt-3 mb-3">
                    <h4 className="text-center title">Bánh Kẹo </h4>
                    <div className="info">
                      <img src={sp1} alt style={{ width: 271, height: 176 }} />
                      <div className="txt mt-3">
                        Các bánh mì kẹp thịt ngon nhất, ngon nhất cho nướng. Nhận lời
                        khuyên nấu nướng của burger và tìm công thức nấu ăn cho những
                        người yêu thích thịt bò, những...{" "}
                      </div>
                      <button className="more text-center ">
                        {" "}
                        <i> Xem thêm</i>
                      </button>
                    </div>
                  </div>
                  <img className="l2" src={hinh2} alt />
                </div>
              </div>
              {/* bắt đầu phần 2 */}
              <div className="col-sm-3 right ">
                <div className="big">
                  <img className="l1" src={hinh1} alt />
                  <div className="new mt-3 mb-3">
                    <h4 className="text-center title">Trái cây </h4>
                    <div className="info">
                      <img src={sp2} alt style={{ width: 271, height: 176 }} />
                      <div className="txt mt-3">
                        CTất cả các món salad của chúng tôi đều được làm tươi trong bếp
                        của mỗi cửa hàng suốt cả ngày. Tất cả bạn cần làm là ...{" "}
                      </div>
                      <button className="more text-center ">
                        {" "}
                        <i> Xem thêm</i>
                      </button>
                    </div>
                  </div>
                  <img className="l2" src={hinh2} alt />
                </div>
              </div>
              {/* bắt đầu phần 3 */}
              <div className="col-sm-3 right">
                <div className="big">
                  <img className="l1" src={hinh1} alt />
                  <div className="new mt-3 mb-3">
                    <h4 className="text-center title">Its CupCakes </h4>
                    <div className="info">
                      <img src={sp3} alt style={{ width: 271, height: 176 }} />
                      <div className="txt mt-3">
                        Ít cupcakes cho một số dịp đặc biệt. Euismod tincidunt ut liber.
                        Sed diam không ummy nibh trong euismod tincidunt ut liber ...
                      </div>
                      <button className="more text-center ">
                        {" "}
                        <i> Xem thêm</i>
                      </button>
                    </div>
                  </div>
                  <img className="l2" src={hinh2} alt />
                </div>
              </div>
              <div className="col-sm-1" />
            </div>
          </div>
        </div>
      );
    };
typeProduct.propTypes = {
};

export default typeProduct;

