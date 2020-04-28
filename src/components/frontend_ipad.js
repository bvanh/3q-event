import React from "react";
import { connect } from "react-redux";
import submitEmail from "../utils/submitEmail";
import { FacebookConnect } from "../components/subComponents/connectFacebook";
import { Button, Input, Progress } from "antd";
import ShowModal from "../utils/modal";
import ReactPlayer from "react-player";
import {
  showModal,
  offModal,
  getInfo,
  setStatus,
  runVideo
} from "../redux/actions/index";
import { images,imgMobile } from "../utils/exportImg";
import "../static/css/style_ipad.css";

const FrontendIpad = props => {
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
    <div className="frontend_ipad_container">
      <div>
        <div id="Logo_ipad">
          <img src={images["Logo.png"]} />
          <div id="btn_center_ipad">
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
        </div>
        <div className="frame_video_ipad">
          <ReactPlayer
            url="https://www.youtube.com/embed/8Wo6IorDgKc?controls=1"
            width="100%"
            height="192px"
            playing={props.isRunVideo.run}
            style={{ visibility: `${props.isRunVideo.show}` }}
            className="video_ipad"
          />
          <img
            src={imgMobile["background_video.png"]}
            onClick={() =>
              props.runVideo([
                {
                  run: true,
                  show: "initial",
                  showThumbnail: "none"
                }
              ])
            }
            id="background_video"
            style={{ display: `${props.isRunVideo.showThumbnail}` }}
          />
        </div>
      </div>
      <div className="frame_form_ipad">
        <div className="form_ipad">
          <p className="form_dk_ipad">ĐĂNG KÝ SỚM NHẬN QUÀ</p>
          <div className="form_input_ipad">
            <Input
              placeholder="Nhập email nhận quà"
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
              onClick={() => submitEmailAndPhoneNumber(props.email,props.phoneNumber)}
            >
              GỬI{" "}
              <img
                src={images['icon_btn_send.png']}
                height="60%"
                style={{ paddingLeft: ".5rem" }}
              />
            </Button>
          </div>
          <p className="status_ipad">{props.statusSubmit}</p>
          <p className="form_footer">
            Hãy nhập email để nhận link download và giftcode sớm nhất nhé!
          </p>
        </div>
      </div>
      <div id="container_progress_ipad">
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
    statusSubmit: state.statusSubmit,
    isRunVideo: state.isRunVideo[0]
  };
}
function mapDispatchToProps(dispatch) {
  return {
    showModal: db => dispatch(showModal(db)),
    offModal: () => dispatch(offModal()),
    getInfo: db => dispatch(getInfo(db)),
    setStatus: val => dispatch(setStatus(val)),
    runVideo: val => dispatch(runVideo(val))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FrontendIpad);
