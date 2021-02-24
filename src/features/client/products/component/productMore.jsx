import React, { PropTypes } from 'react';
import sp10 from '../../../../img/sp10.jpg';
const productMore = (props) => {
    return (
        <div class="card text-left item ml-3">;
        <img className="card-img-top picture" src={sp10} alt="" />
        <div className="card-body bd">
          <a href="CTSanPham.html">
            <h5 className="card-title title tt ">Bánh giáng sinh</h5>
          </a>
          <a href="CTSanPham.html">
            <p className="card-text price">70,000 Đ</p>
          </a>
          <a href="CTSanPham.html">
            <p className="card-text information">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum mollitia ratione labore? Repudiandae, magni aliquid? Adipisci ipsam deleniti in distinctio libero itaque officiis sapiente, quam possimus, quaerat
              veniam eveniet consequuntur?
            </p>
          </a>
        </div>
        <input className="add" type="button" defaultValue="Thêm vào giỏ" />
        </div>
    );
};

productMore.displayName = 'productMore';

productMore.propTypes = {
};

export default productMore;
