import '../common/templates/dependecies';
import React from "react";

import Header from '../common/templates/header';
import SideBar from '../common/templates/sidebar';
import Footer from '../common/templates/footer';
import Messages from '../common/msg/messages';

export default function App(props) {
  return(
    <div className="wrapper">
      <Header />
      <SideBar/>
      <div className="content-wrapper">
        {props.children}
      </div>
      <Footer />
      <Messages />
    </div>
  )
}