import React, { PropTypes } from 'react';

const newsDetail = (props) => {
    return (
        <div className="cttins">
        <h4 className="font-weight-bold ttd">Dịch vụ bát tràng</h4>
        <p>Nằm bên bờ tả ngạn sông Hồng, làng gốm Bát Tràng thuộc huyện Gia Lâm, cách trung tâm thủ đô Hà Nội hơn 10km về phía đông – nam. Làng gốm Bát Tràng đã tồn tại ở ven đô Thăng Long với tư cách một làng nghề suốt nhiều thế kỷ. Tại đây
          có nhiều động vui chơi khám phá, đặc biệt là thăm quan cơ sở sản xuất, tự tay làm ra những sản phẩm gốm sứ,…. Ẩm thực với những hương vị của Bát Tràng cũng là điều khiến những du khách tới đây ấn tượng không bao giờ quên.</p>
      </div>
    );
};

newsDetail.displayName = 'Component';

newsDetail.propTypes = {
};

export default newsDetail;
