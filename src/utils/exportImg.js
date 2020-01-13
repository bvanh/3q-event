function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const imgGift = importAll(
  require.context("../static/img/gift", false, /\.(png|jpe?g|svg)$/)
);
const images = importAll(
  require.context("../static/img", false, /\.(png|jpe?g|svg)$/)
);
const imgMobile = importAll(
  require.context("../static/img/frontend_mobile", false, /\.(png|jpe?g|svg)$/)
);
export { imgGift, images, imgMobile };
