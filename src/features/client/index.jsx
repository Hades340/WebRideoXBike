import React, { PropTypes } from 'react';
import Header from '../../component/header/indexClient';
import Mains from './mains/page/index';
import Reviews from './reviews/page';
import Product from './products/page/products';
import ProductDetails from './products/page/productDetail';
import ListNew from './news/page/listNews';
import NewDetails from './news/page/NewDetails';
import Contact from './contacts/page';
import NotFound from '../..//component/notFound/notFound';
import Footer from '../../component/footer/indexClient';
import { Route, Switch, useRouteMatch, BrowserRouter, Redirect } from 'react-router-dom';
const Client = (props) => {
	const match = useRouteMatch();
  console.log({ match });
    return (
    	<div>
	        <Header/>
	        <Switch>
	        	  <Route exact path={match.url} component={Mains} />

			      <Route path={"/gioi-thieu"} component={Reviews} />
			      <Route path={"/san-pham/:idSanPham"} component={ProductDetails} />
			      <Route path={"/san-pham"} component={Product} />
			      <Route path={"/tin-tuc/:idTinTuc"} component={NewDetails} />
			      <Route path={"/tin-tuc"} component={ListNew} />
			      
			      <Route path={"/lien-he"} component={Contact} />

			      <Route component={NotFound} />
	        </Switch>
	        <Footer/>
        </div>
    );
};

export default Client;
