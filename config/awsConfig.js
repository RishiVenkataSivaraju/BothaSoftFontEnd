import AWS from 'aws-sdk';

// const awsConfig = {
//   accessKeyId: 'YOUR_ACCESS_KEY_ID',
//   secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
//   region: 'YOUR_AWS_REGION',
// };

AWS.config.update(awsConfig);

export default AWS;
