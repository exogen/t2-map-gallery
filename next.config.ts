module.exports = {
  output: "export",
  distDir: process.env.NODE_ENV === "production" ? "./docs" : undefined,
  basePath: "/t2-maps",
  assetPrefix: "/t2-maps/",
  trailingSlash: true,
};
