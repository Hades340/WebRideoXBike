import React, { PropTypes } from 'react';
import sp10 from '../../img/sp10.jpg';
const productItem = (props) => {
    return (
	    
            <div className="card text-left item" id="sp-1">
              <img className="card-img-top picture" src={sp10} alt />
              <div className="card-body bd">
                <a href="CTSanPham.html">
                  <h5 className="card-title title tt ">Bánh giáng sinh</h5>
                </a>
                <a href="CTSanPham.html">
                  <p className="card-text price">
                    <span className="gia">70000</span> Đ
                  </p>
                </a>
                <a href="CTSanPham.html">
                  <p className="card-text information">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rerum mollitia ratione labore? Repudiandae, magni aliquid?
                    Adipisci ipsam deleniti in distinctio libero itaque officiis
                    sapiente, quam possimus, quaerat veniam eveniet
                    consequuntur?
                  </p>
                </a>
              </div>
              <input
                className="add adds"
                maid={1}
                type="button"
                defaultValue="Thêm vào giỏ"
              />
            </div>
          
    );
};

productItem.displayName = 'productItem';

productItem.propTypes = {
};

export default productItem;
