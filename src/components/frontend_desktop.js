import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setProduct } from "../redux/actions/index";
import submitEmail from "../utils/submitEmail";
import getDataEmail from "../utils/getCurrentEmail";
import FacebookConnect from "../components/subComponents/connectFacebook";
import "../static/css/style.css";
import "../static/css/style_media.css";
import "../static/css/style_fb_connect.css";
function mapStateToProps(state) {
  return {
    products: state.data
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setProduct: product => dispatch(setProduct(product))
  };
}

const FrontendDesktop = props => {
  const addProduct = e => {
    if (e.keyCode === 13) {
      const product = e.target.value;
      props.setProduct({
        id: 4,
        name: product,
        price: 40000
      });
    }
  };

  // const products = props.products.map(product => {
  //   return <li key={product.id}>{product.name}</li>;
  // });

  return (
    <div id="container_body">
      <div className="container">
        <img src={"/static/img/background_header.png"} id="background_header" />
        <img
          src="/static/img/background_body.png"
          width="100%"
          id="img_background"
          height="100%"
        />
        <div id="btn_center">
          <a
            href="http://3qzombie.clappigames.com"
            id="home_btn"
            target="_blank"
          ></a>
          <span className="btn_center" />
          <a
            href="https://clappigames.com"
            id="register_btn"
            target="_blank"
          ></a>
        </div>
        <div id="logo">
          <img src="/static/img/Logo.png" width="25%" />
        </div>
        <div id="video_frame">
          <iframe
            src="https://www.youtube.com/embed/8Wo6IorDgKc?autoplay=1&playlist=8Wo6IorDgKc&loop=1&mute=1&modestbranding=0&autohide=0&controls=0"
            frameBorder="0"
            allow="autoplay; encrypted-media;"
            allowFullScreen
            height="100%"
            width="29%"
          />
        </div>
      </div>
      {/* <div id="container_form">
          <div className="form">
            <p className="form_dk">ĐĂNG KÝ SỚM NHẬN QUÀ</p>
            <div className="form_input">
              <Input
                placeholder="Nhập email để nhận quà"
                onChange={getEmail}
                onFocus={removeStatus}
              />
              <Input
                placeholder="Nhập SĐT (không bắt buộc)"
                onChange={getPhoneNumber}
                onFocus={removeStatus}
              />
              <Button
                type="primary"
                onClick={() => submitEmailAndPhoneNumber(email, phoneNumber)}
              >
                GỬI{" "}
                <img
                  src="/static/img/icon_btn_send.png"
                  height="60%"
                  style={{ paddingLeft: ".5rem" }}
                />
              </Button>
            </div>
            <p className="status">{statusSubmit}</p>
            <p className="form_footer">
              Hãy nhập email để nhận link download và giftcode sớm nhất nhé!
            </p>
          </div>
        </div>
        <div id="container_progress">
          <div className="progress">{printProgress}</div>
        </div>
        <FacebookConnect showModal={showModal} />
      </div>
      <Modal visible={visible} onCancel={handleCancel} footer={null}>
        <img src="static/img/detail_background.png" width="100%" />
        <div id="modal">
          <img src="/static/img/giftbox_running.png" />
          <h3>
            {stepValue.title} {stepValue.value} {stepValue.content}
          </h3>
          <table>{printGift}</table>
          <p>{statusSuccess}</p>
        </div>
      </Modal> */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FrontendDesktop);
