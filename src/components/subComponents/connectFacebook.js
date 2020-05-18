import React, { useState, useEffect } from "react";
import { FacebookShareCount, FacebookShareButton } from "react-share";
import { FacebookButton, FacebookCount } from "react-social";
import { images } from "../../utils/exportImg";
const shareUrl =
  "https://www.facebook.com/watch/?v=1571197656379891";
function FacebookConnect(props) {
  const giftShare = [
    { id: 300002, name: "Ruby", number: 25, step: "500 Lượt" },
    { id: 300002, name: "Ruby", number: 75, step: "1000 Lượt" },
  ];
  const [demo, setE] = useState(0);
  const getCountF = (e) => {
    console.log(e);
  };
  return (
    <>
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
                giftAllServer: {},
                type: "",
              },
            ])
          }
        >
          <img src={images["box_detail.png"]} className="gift-detail" />
          Chi tiết
        </span>
        <FacebookShareButton url={shareUrl} className="share-button">
          <div>
            <span id="like_btn">267</span>
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
        <img src={images["logoclappigames.png"]} style={{ width: "100%" }} />
      </div>
    </>
  );
}

export { FacebookConnect, shareUrl };
