import React, { useState, useEffect } from "react";
import { FacebookShareCount, FacebookShareButton } from "react-share";
function FacebookConnect(props) {
  const giftShare = [{ id: 300001, name: "Ruby", number: 75 }];
  const shareUrl = "https://free.3qzombie.clappigames.com";
  return (
    <div className="fb_connect">
      <p>SHARE MẠNH NGAY QUÀ LIỀN TAY</p>
      <span
        onClick={() => props.showModal("QÙA ĐẠT", "", "KHI CHIA SẺ", giftShare)}
      >
        <img src="/static/img/box_detail.png" />
        Chi tiết
      </span>
      <FacebookShareButton url={shareUrl} className="share-button">
        <div>
          <span id="like_btn">1.4k</span>
          <span id="share_btn">
            <img src="/static/img/fb_icon.png" />
            Share
          </span>
        </div>
      </FacebookShareButton>
      <img src="/static/img/logoclappigames.png" style={{ width: "100%" }} />
    </div>
  );
}

export default FacebookConnect;
