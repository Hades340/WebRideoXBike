import logo from './logo.svg';
import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import Client from './features/client';
import Admin from  './features/admin';
import NotFound from './component/notFound/notFound';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
const Photo = React.lazy(() => import('./features/client'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
      	 <Switch>
      	   	<Route path="/" component={Client} />
            <Route path="/admin" component={Admin} />
            <Route component={NotFound} />
      	 </Switch>
        
       </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
