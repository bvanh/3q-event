import React from "react";
import { Modal } from "antd";
import { connect } from "react-redux";
import { offModal } from "../redux/actions/index";
import { imgGift, images } from "./exportImg";
const ShowModal = props => {
  const { stepGift, giftAllServer } = props;
  const printGift = props.stepGift.gift.map((val, index) => (
    <tr key={index}>
      <td>{val.step || index + 1}</td>
      <td>
        <img src={imgGift[`${val.id}.png`]} />
      </td>
      <td>{val.name}</td>
      <td>{val.number.toLocaleString()}</td>
    </tr>
  ));
  function printGiftAllServer() {
    if (giftAllServer.id !== undefined) {
      return (
        <>
          <p>*{giftAllServer.type}</p>
          <tr>
            <td>1</td>
            <td>
              <img src={imgGift[`${giftAllServer.id}.png`]} />
            </td>
            <td>{giftAllServer.name}</td>
            <td>{giftAllServer.number.toLocaleString()}</td>
          </tr>
        </>
      );
    } else {
      return null;
    }
  }
  return (
    <Modal visible={props.visible} onCancel={props.offModal} footer={null} mask={false} wrapClassName={props.stepGift.title === "ĐĂNG KÝ NHẬN QUÀ THÀNH CÔNG!" ? "alertEmailSuccess" : "wrapModal"}>
      <img src={images["detail_background.png"]} width="100%" />
      <div id="modal">
        <img src={images["giftbox_running.png"]} />
        <h3 className={props.stepGift.title === "ĐĂNG KÝ NHẬN QUÀ THÀNH CÔNG!" ? "alertEmail" : ""}>
          {stepGift.title} {stepGift.value + " "}
          {stepGift.content}
        </h3>
        <div style={{overflowY:'scroll'}}>
          <table>
            {printGiftAllServer()}
            <p>{stepGift.type}</p>
            {printGift}
          </table>
          <p>{props.stepGift.notice}</p>
        </div>
      </div>
      {/* <div>fsf</div> */}
    </Modal>
  );
};
function mapStateToProps(state) {
  return {
    visible: state.visible,
    stepGift: state.stepGift[0],
    giftAllServer: state.stepGift[0].giftAllServer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    offModal: () => dispatch(offModal())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowModal);
