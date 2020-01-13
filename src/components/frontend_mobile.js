import React from "react";
import { connect } from "react-redux";
import submitEmail from "../utils/submitEmail";
import { FacebookShareButton } from "react-share";
import { shareUrl } from "../components/subComponents/connectFacebook";
import { Input, Modal, Col } from "antd";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import {
  showModal,
  offModal,
  getInfo,
  setStatus,
  runVideo
} from "../redux/actions/index";
import { imgGift, images, imgMobile } from "../utils/exportImg";
import "../static/css/style_mobile.css";
import "../static/css/style_media.css";

const FrontendMobile = props => {
  const {
    dataEmail,
    visible,
    stepGift,
    email,
    phoneNumber,
    statusSubmit,
    isRunVideo
  } = props;
  const giftShare = [{ id: 300001, name: "Ruby", number: 75 }];
  const printStepGift = dataEmail.map((data, index) => (
    <div
      key={index}
      className="step_gift_mobile"
      onClick={() =>
        props.showModal([
          {
            title: "QUÀ ĐẠT",
            value: data.max,
            content: "LƯỢT ĐĂNG KÝ",
            gift: data.gifts,
            notice:
              "*Đăng ký đạt các mốc sau vẫn nhận đầy đủ quà các mốc trước!"
          }
        ])
      }
    >
      <div>
        <img
          src={imgMobile["giftbox.png"]}
          width="53%"
          style={{ margin: "0 auto" }}
        />
        <b>{data.max}</b>
        <p>LƯỢT ĐĂNG KÝ</p>
        <p>
          <img src={imgMobile["detail_icon.png"]} style={{ width: ".5rem" }} />
          Chi tiết
          <img
            src={imgMobile["detail_icon_right.png"]}
            style={{ width: ".5rem" }}
          />
        </p>
      </div>
    </div>
  ));
  const printGift = stepGift.gift.map((val, index) => (
    <tr key={index}>
      <td>
        <img src={imgGift[`${val.id}.png`]} />
      </td>
      <td>{val.name}</td>
      <td>{val.number.toLocaleString()}</td>
    </tr>
  ));
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: false,
    prevArrow: false
  };
  const submitEmailAndPhoneNumber = (email, phoneNumber) => {
    const result = submitEmail(email, phoneNumber);
    result.then(mes => {
      if (mes === 201) {
        props.showModal([
          {
            title: "GỬI EMAIL NHẬN QUÀ THÀNH CÔNG!",
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
    <div className="frontend_mobile_container">
      <div className="frontend_mobile_content">
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
        <img src={imgMobile["background_mobile.png"]} id="background_mobile" />
        <img src={images["Logo.png"]} className="logo_mobile" />
        <Col>
          <div style={{ position: "relative" }}>
            <ReactPlayer
              url="https://www.youtube.com/embed/8Wo6IorDgKc?controls=1"
              width="100%"
              height="192px"
              playing={isRunVideo.run}
              style={{ visibility: `${isRunVideo.show}` }}
              className="video"
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
              style={{ display: `${isRunVideo.showThumbnail}` }}
            />
          </div>
          <div className="form_mobile">
            <h3>Đăng ký sớm nhận quà</h3>
            <Input
              placeholder="Nhập email nhận quà"
              name='email'
              onChange={e => props.getInfo(e)}
              onFocus={() => props.setStatus("")}
            />
            <Input
              placeholder="Nhập SĐT (không bắt buộc)"
              name='phoneNumber'
              onChange={e => props.getInfo(e)}
              onFocus={() => props.setStatus("")}
            />
            <p className="status_mobile">{statusSubmit}</p>
            <button
              onClick={() => submitEmailAndPhoneNumber(email, phoneNumber)}
            >
              <span>Gửi</span>
              <img
                src={images["icon_btn_send.png"]}
                height="60%"
                style={{ paddingLeft: ".5rem" }}
              />
            </button>
            <p>
              Hãy nhập email để nhận link download và giftcode sớm nhất nhé!
            </p>
          </div>
          <Slider {...settings} style={{ margin: "1.5rem 0" }}>
            {printStepGift}
          </Slider>
          <div className="mobile_fb_connect">
            <div id="detail">
              <span> SHARE MẠNH NGAY QUÀ LIỀN TAY</span>
              <div>
                <img src={images["box_detail.png"]} />
                <span
                  onClick={() =>
                    props.showModal([
                      {
                        title: "QUÀ ĐẠT",
                        value: "",
                        content: "KHI CHIA SẺ",
                        gift: giftShare,
                        notice: ""
                      }
                    ])
                  }
                >
                  CHI TIẾT
                </span>
              </div>
            </div>
            <div id="fb_share">
              <FacebookShareButton url={shareUrl} className="share-button">
                <div>
                  <span id="like_btn">1.4k</span>
                  <span id="share_btn">
                    <img src={images["fb_icon.png"]} />
                    Share
                  </span>
                </div>
              </FacebookShareButton>
            </div>
          </div>
        </Col>
      </div>
      <Modal visible={visible} onCancel={props.offModal} footer={null}>
        <img
          src={imgMobile["background_detail_mobile2.png"]}
          id="bg_detail_mobile"
        />
        <div id="modal">
          <img src={images["giftbox_running.png"]} />
          <h3>
            {props.stepGift.title} {props.stepGift.value + " "}
            {props.stepGift.content}
          </h3>
          <table>{printGift}</table>
          <p>{props.stepGift.notice}</p>
        </div>
      </Modal>
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
export default connect(mapStateToProps, mapDispatchToProps)(FrontendMobile);
