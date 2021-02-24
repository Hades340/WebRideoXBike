import React, {  PropTypes, useState, useEffect  } from 'react';
import logo from '../../img/logo.png'
import {
    Link,
    NavLink
  } from "react-router-dom";
const header = (props) => {
    return (
	<nav className="navbar navbar-expand-sm navbar-dark bg-white Menu ">
	  <Link className="navbar-brand Logo" to="/">
	    <img src={logo} alt />
	  </Link>
	  <button
	    className="navbar-toggler d-lg-none MenuBtn text-left"
	    type="button"
	    data-toggle="collapse"
	    data-target="#collapsibleNavId"
	    aria-controls="collapsibleNavId"
	    aria-expanded="false"
	    aria-label="Toggle navigation"
	  >
	    Menu
	  </button>
	  <div className="collapse navbar-collapse mb-2 Left" id="collapsibleNavId">
	    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
	      <li className="nav-item active">
	        <NavLink exact activeStyle={{
			      backgroundColor: '#3e3939',
				    color: '#d8c7c7!important',
				    borderRadius: '11px',
				}} className="nav-link Main" to="/"
			>
	          {" "}
	          Trang chủ <span className="sr-only">(current)</span>
	        </NavLink>
	      </li>
	      <li className="nav-item">
	        <NavLink 
	        	exact activeStyle={{
				     backgroundColor: '#3e3939',
				    color: '#d8c7c7!important',
				    borderRadius: '11px',
				}}
		        className="nav-link Main" 
		        to="/gioi-thieu"
	        >
	          {" "}
	          Giới thiệu
	        </NavLink>
	      </li>
	      <li className="nav-item dropdown">
	        <NavLink 
	        	exact activeStyle={{
				      backgroundColor: '#3e3939',
				    color: '#d8c7c7!important',
				    borderRadius: '11px',
				}}
	        	className="nav-link dropdown-toggle Main" 
	        	to="/san-pham"
	        >
	          Sản phẩm
	        </NavLink>
	        <ul className=" drop">
	          <li className="Main1">
	            {" "}
	            <NavLink 
	            	className="mauchu" 
	            	to="/san-pham"
	            >
	              Bánh kẹo{" "}
	            </NavLink>
	          </li>
	          <li className="Main1">
	            {" "}
	            <NavLink className="mauchu" to="/san-pham">
	              Trái cây
	            </NavLink>
	          </li>
	          <li className="Main1">
	            {" "}
	            <NavLink className="mauchu" to="/san-pham">
	              ít CupCakes
	            </NavLink>
	          </li>
	        </ul>
	      </li>
	      <li className="nav-item">
	        <NavLink 
        		exact activeStyle={{
				      backgroundColor: '#3e3939',
				    color: '#d8c7c7!important',
				    borderRadius: '11px',
				    
				}}
	        	className="nav-link Main" 
	        	to="/tin-tuc">
	          {" "}
	          Tin tức
	        </NavLink>
	      </li>
	      <li className="nav-item">
	        <NavLink 
		        exact activeStyle={{
				     backgroundColor: '#3e3939',
				    color: '#d8c7c7!important',
				    borderRadius: '11px',
				}}
		        className="nav-link Main" 
		        to="/gio-hang"
		    >
	          Giỏ hàng
	        </NavLink>
	      </li>
	      <li className="nav-item">
	        <NavLink 
	        	exact activeStyle={{
				    backgroundColor: '#3e3939',
				    color: '#d8c7c7!important',
				    borderRadius: '11px',
				}}
	        	className="nav-link Main" 
	        	to="/lien-he"
	        >
	          Liên hệ
	        </NavLink>
	      </li>
	    </ul>
	  </div>
	</nav>
    );
};

export default header;
