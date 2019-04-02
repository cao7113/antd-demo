module.exports = {
  presets: [
    '@vue/app'
  ],
    plugins: [
       [
          "import",
          { libraryName: "ant-design-vue", style: 'css' }
        ]
      ]
}
// report less loader error
//{ libraryName: "ant-design-vue", libraryDirectory: "es", style: true }