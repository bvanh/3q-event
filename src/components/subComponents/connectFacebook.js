import React, { useState, useEffect } from "react";
import { FacebookShareCount, FacebookShareButton } from "react-share";
import { images } from "../../utils/exportImg";
const shareUrl = "https://pre.3qzombie.clappigames.com";
function FacebookConnect(props) {
  const giftShare = [
    { id: 300002, name: "Ruby", number: 25, step: "500 Lượt" },
    { id: 300002, name: "Ruby", number: 75, step: "1000 Lượt" }
  ];
  return (
    <div className="fb_connect">
      <p>SHARE MẠNH NGAY QUÀ LIỀN TAY</p>
      <span
        onClick={() =>
          props.showModal([
            {
              title: "QUÀ ĐẠT",
              value: "",
              content: "KHI CHIA SẺ",
              gift: giftShare,
              notice: "",
              giftAllServer:{},
              type:'',
            }
          ])
        }
      >
        <img src={images["box_detail.png"]} className='gift-detail'/>
        Chi tiết
      </span>
      <FacebookShareButton url={shareUrl} className="share-button">
        <div>
          <span id="like_btn">1.4k</span>
          <span id="share_btn">
            <img src={images["fb_icon.png"]} />
            Share
          </span>
        </div>
      </FacebookShareButton>
      <img src={images["logoclappigames.png"]} style={{ width: "100%" }} />
    </div>
  );
}

export { FacebookConnect, shareUrl };
