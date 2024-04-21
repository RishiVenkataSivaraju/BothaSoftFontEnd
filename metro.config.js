module.exports = {
  resolver: {
    sourceExts: ['jsx', 'js', 'tsx', 'ts'], // Add any other extensions your app uses
  },
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'], // For Expo projects
  },
  jsEngine: 'jsc', // Use the JSC JavaScript engine instead of Hermes
};
