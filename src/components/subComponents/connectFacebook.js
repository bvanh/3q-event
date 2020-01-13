import React, { useState, useEffect } from "react";
import { FacebookShareCount, FacebookShareButton } from "react-share";
import { images } from "../../utils/exportImg";
const shareUrl = "https://free.3qzombie.clappigames.com";
function FacebookConnect(props) {
  const giftShare = [{ id: 300001, name: "Ruby", number: 75 }];
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
              notice:
                "*Đăng ký đạt các mốc sau vẫn nhận đầy đủ quà các mốc trước!"
            }
          ])
        }
      >
        <img src={images["box_detail.png"]} />
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
