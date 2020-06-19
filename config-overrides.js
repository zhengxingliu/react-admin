/**
 * configueration of customize-cra and react-app-rewired
 */

const { override, addLessLoader, fixBabelImports, addDecoratorsLegacy } = require("customize-cra")
const theme = require('./lessVars')

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),

  addDecoratorsLegacy(),

  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: theme
    }
  }),
  
)
