module.exports = {
  // presets: [['@vue/cli-plugin-babel/preset', {useBuiltIns: 'entry'}]],
  presets: [['@vue/cli-plugin-babel/preset', {useBuiltIns: 'usage'}]],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
}
