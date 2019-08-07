module.exports = api => {
  api.cache(false)
  return {
    ignore: [
      'node_modules'
    ],
    "presets": [
      "@babel/preset-env", 
      "@babel/preset-react",
      "@emotion/babel-preset-css-prop"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties"
    ]
  }
}