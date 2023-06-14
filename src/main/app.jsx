import '../common/templates/dependecies';
import React from "react";

import Header from '../common/templates/header';
import SideBar from '../common/templates/sidebar';
import Footer from '../common/templates/footer';
import Routes from './routes';

export default function App(props) {
  return(
    <div className="wrapper">
      <Header />
      <SideBar/>
      <div className="content-wrapper">
        <Routes />
      </div>
      <Footer />
    </div>
  )
}