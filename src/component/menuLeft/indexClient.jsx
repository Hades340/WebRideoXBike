import React, { PropTypes } from 'react';

const menuLeft = (props) => {
    return (
        <div className="col-sm-3 bodyLeft">
		  <h4 className=" font-weight-bold "> Danh mục</h4>
		  <ul className="nav">
		    <li className="nav-item DMli">
		      <a className="nav-link ali" href="#">Bánh kẹo</a>
		    </li>
		    <li className="nav-item DMli">
		      <a className="nav-link ali" href="#">Trái cây</a>
		    </li>
		    <li className="nav-item DMli">
		      <a className="nav-link ali" href="#">ít CupCakes</a>
		    </li>
		  </ul>
		</div>
    );
};

menuLeft.displayName = 'menuLeft';

menuLeft.propTypes = {
};

export default menuLeft;
