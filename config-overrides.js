/**
 * configueration of customize-cra and react-app-rewired
 */

const { override, addLessLoader, fixBabelImports } = require("customize-cra")
const theme = require('./lessVars')

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),

  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: theme
    }
  })
)
