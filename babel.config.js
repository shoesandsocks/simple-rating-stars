const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: 'current',
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
      corejs: "3.0.0"
    },
  ],
];

const plugins = ['@babel/plugin-transform-react-jsx', '@babel/plugin-proposal-object-rest-spread']

module.exports = { presets, plugins };
