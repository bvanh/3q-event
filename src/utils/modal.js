import React from "react";
import { Modal } from "antd";
import { connect } from "react-redux";
import { offModal } from "../redux/actions/index";
import { imgGift,images } from "./exportImg";
const ShowModal = props => {
  const printGift = props.stepGift.gift.map((val, index) => (
    <tr key={index}>
      <td>
        <img src={imgGift[`${val.id}.png`]} />
      </td>
      <td>{val.name}</td>
      <td>{val.number}</td>
    </tr>
  ));
  return (
    <Modal visible={props.visible} onCancel={props.offModal} footer={null}>
      <img src={images['detail_background.png']} width="100%" />
      <div id="modal">
        <img src={images['giftbox_running.png']} />
        <h3>
          {props.stepGift.title} {props.stepGift.value + " "}
          {props.stepGift.content}
        </h3>
        <table>{printGift}</table>
        <p>{props.stepGift.notice}</p>
      </div>
    </Modal>
  );
};
function mapStateToProps(state) {
  return {
    visible: state.visible,
    stepGift: state.stepGift[0]
  };
}
function mapDispatchToProps(dispatch) {
  return {
    offModal: () => dispatch(offModal())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowModal);
