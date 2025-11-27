module.exports = {
  output: "export",
  distDir: process.env.NODE_ENV === "production" ? "./docs" : undefined,
  basePath: "/t2-map-gallery",
  assetPrefix: "/t2-map-gallery/",
  trailingSlash: true,
};
