import React, { useState, useEffect } from "react";
import getDataEmail from "../src/utils/getCurrentEmail";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";
import { setDataEmail } from "./redux/actions/index";
import FrontendDesktop from "./components/frontend_desktop";
import FrontendMobile from './components/frontend_mobile';
import FrontendIpad from './components/frontend_ipad';

function App(props) {
  useEffect(() => {
    let newData = getDataEmail();
    newData.then(val => {
      props.getData(val.data.data);
    });
  }, []);
  return (
    <>
      <MediaQuery minDeviceWidth={1025}>
        <FrontendDesktop />;
      </MediaQuery>
      <MediaQuery maxDeviceWidth={811}>
        <FrontendMobile />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1024} minDeviceWidth={812}>
        <FrontendIpad />
      </MediaQuery>
    </>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    getData: data => dispatch(setDataEmail(data))
  };
}
export default connect(null, mapDispatchToProps)(App);
