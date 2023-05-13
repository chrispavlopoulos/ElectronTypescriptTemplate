module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.target = 'electron-renderer';

      const fallback = webpackConfig.resolve.fallback || {};
      Object.assign(fallback, {
          "path": require.resolve("path-browserify"),
      });
      //  https://github.com/react-dnd/react-dnd/issues/3433#issuecomment-1102144912
      const alias = webpackConfig.resolve.alias || {};
      Object.assign(alias, {
        "react/jsx-runtime": "react/jsx-runtime.js",
        "react/jsx-dev-runtime": "react/jsx-dev-runtime.js"
      });
  
      return webpackConfig;
    },
  },
};
