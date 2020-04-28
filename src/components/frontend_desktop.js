import React from "react";
import { connect } from "react-redux";
import submitEmail from "../utils/submitEmail";
import { FacebookConnect } from "../components/subComponents/connectFacebook";
import { Button, Input, Progress } from "antd";
import ShowModal from "../utils/modal";
import {
  showModal,
  offModal,
  getInfo,
  setStatus
} from "../redux/actions/index";
import { images } from "../utils/exportImg";
import "../static/css/style.css";
import "../static/css/style_media.css";
import "../static/css/style_fb_connect.css";

const FrontendDesktop = props => {
  const printProgress = props.dataEmail.map((val, index) => (
    <Progress
      strokeWidth={13}
      key={index}
      type="line"
      percent={(val.current / val.max) * 100}
      strokeColor="#ffde1d"
      format={() => (
        <div className="step_gift">
          <p className="val_max">{val.max}</p>
          {(val.current / val.max) * 100 === 100 ? (
            <img src={images["step_finished.png"]} className="step_dot" />
          ) : (
            <img src={images["step_running.png"]} className="step_dot" />
          )}
          <img src={images["button_down.png"]} id="btn_down" />
          {(val.current / val.max) * 100 === 100 ? (
            <img
              src={images["giftbox.png"]}
              id="giftbox"
              onMouseOver={() =>
                props.showModal([
                  {
                    title: "QUÀ ĐẠT",
                    value: val.max,
                    content: "LƯỢT ĐĂNG KÝ",
                    gift: val.gifts,
                    notice:
                      "*Đăng ký đạt các mốc sau vẫn nhận đầy đủ quà các mốc trước!"
                  }
                ])
              } 
              // onClick={() =>
              //   props.showModal([
              //     {
              //       title: "QUÀ ĐẠT",
              //       value: val.max,
              //       content: "LƯỢT ĐĂNG KÝ",
              //       gift: val.gifts,
              //       notice:
              //         "*Đăng ký đạt các mốc sau vẫn nhận đầy đủ quà các mốc trước!"
              //     }
              //   ])
              // }
            />
          ) : (
            <img
              src={images["giftbox_running.png"]}
              id="giftbox"
              onClick={() =>
                props.showModal([
                  {
                    title: "QUÀ ĐẠT",
                    value: val.max,
                    content: "LƯỢT ĐĂNG KÝ",
                    gift: val.gifts,
                    notice:
                      "*Đăng ký đạt các mốc sau vẫn nhận đầy đủ quà các mốc trước!"
                  }
                ])
              }
            />
          )}
        </div>
      )}
    />
  ));
  const submitEmailAndPhoneNumber = (email, phoneNumber) => {
    const result = submitEmail(email, phoneNumber);
    result.then(mes => {
      if (mes === 201) {
        props.showModal([
          {
            title: "ĐĂNG KÝ NHẬN QUÀ THÀNH CÔNG!",
            value: "",
            content: "",
            gift: [],
            notice: ""
          }
        ]);
      } else {
        props.setStatus(mes);
      }
    });
  };
  return (
    <div id="container_body">
      <div className="container">
        <img src={images["background_header.png"]} id="background_header" />
        <img
          src={images["background_body.png"]}
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
          <img src={images["Logo.png"]} width="25%" />
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
      <div id="container_form">
        <div className="form">
          <p className="form_dk">ĐĂNG KÝ SỚM NHẬN QUÀ</p>
          <div className="form_input">
            <Input
              placeholder="Nhập email để nhận quà"
              name="email"
              onChange={e => props.getInfo(e)}
              onFocus={() => props.setStatus("")}
            />
            <Input
              placeholder="Nhập SĐT (không bắt buộc)"
              name="phoneNumber"
              onChange={e => props.getInfo(e)}
              onFocus={() => props.setStatus("")}
            />
            <Button
              type="primary"
              onClick={() =>
                submitEmailAndPhoneNumber(props.email, props.phoneNumber)
              }
            >
              GỬI{" "}
              <img
                src={images["icon_btn_send.png"]}
                height="60%"
                style={{ paddingLeft: ".5rem" }}
              />
            </Button>
          </div>
          <p className="status">{props.statusSubmit}</p>
          <p className="form_footer">
            Hãy nhập email để nhận link download và giftcode sớm nhất nhé!
          </p>
        </div>
      </div>
      <div id="container_progress">
        <div className="progress">{printProgress}</div>
      </div>
      <FacebookConnect showModal={props.showModal} />
      <ShowModal />
    </div>
  );
};
function mapStateToProps(state) {
  return {
    dataEmail: state.dataEmail,
    visible: state.visible,
    stepGift: state.stepGift[0],
    email: state.email,
    phoneNumber: state.phoneNumber,
    statusSubmit: state.statusSubmit
  };
}
function mapDispatchToProps(dispatch) {
  return {
    showModal: db => dispatch(showModal(db)),
    offModal: () => dispatch(offModal()),
    getInfo: db => dispatch(getInfo(db)),
    setStatus: val => dispatch(setStatus(val))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FrontendDesktop);
