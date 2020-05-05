import React from "react";
import { connect } from "react-redux";
import submitEmail from "../utils/submitEmail";
import { FacebookShareButton } from "react-share";
import { shareUrl } from "../components/subComponents/connectFacebook";
import { Input, Modal, Col } from "antd";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import { giftShare, giftAllServer } from "../utils/giftAll";
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
            giftAllServer: giftAllServer[index],
            notice:
              "*Đăng ký đạt các mốc sau vẫn nhận đầy đủ quà các mốc trước!",
            type: "Quà tặng đăng ký sớm"
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
  function printGiftAllServer() {
    if (props.giftAllServer.id !== undefined) {
      return (
        <>
          <p>*{props.giftAllServer.type}</p>
          <tr>
            <td>1</td>
            <td>
              <img src={imgGift[`${props.giftAllServer.id}.png`]} />
            </td>
            <td>{props.giftAllServer.name}</td>
            <td>{props.giftAllServer.number.toLocaleString()}</td>
          </tr>
        </>
      );
    } else {
      return null;
    }
  }
  const printGift = stepGift.gift.map((val, index) => (
    <tr key={index}>
      <td>{val.step || index + 1}</td>
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
            title: "ĐĂNG KÝ NHẬN QUÀ THÀNH CÔNG!",
            value: "Giftcode và link tải game sẽ gửi đến mail của bạn khi sự kiện kết thúc.",
            content: "",
            gift: [],
            giftAllServer: {},
            type: "",
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
                        notice: "",
                        giftAllServer: {},
                        type: ""
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
                  <span id="like_btn">24</span>
                  <span id="share_btn">
                    <img src={images["fb_icon.png"]} />
                    Share
                  </span>
                </div>
              </FacebookShareButton>
              {/* <iframe
          src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=box_count&size=large&appId=519235915412416&width=67&height=40"
          // width="67"
          // height="40"
          style={{ margin: ".7rem 0 0 1rem", height: "60px" }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
          className='share-button'
        ></iframe> */}
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
            {props.stepGift.title} {props.stepGift.value === "Giftcode và link tải game sẽ gửi đến mail của bạn khi sự kiện kết thúc." ? "" : props.stepGift.value + " "}
            {props.stepGift.content}
          </h3>
          <p style={{color:"#fede1d"}}>{props.stepGift.value === "Giftcode và link tải game sẽ gửi đến mail của bạn khi sự kiện kết thúc." ? props.stepGift.value : ""}</p>
          <div style={{ overflowY: "scroll" }}>
            <table>
              {printGiftAllServer()}
              <p>{props.stepGift.type}</p>
              {printGift}
            </table>
            <p>{props.stepGift.notice}</p>
          </div>
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
    isRunVideo: state.isRunVideo[0],
    giftAllServer: state.stepGift[0].giftAllServer
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
