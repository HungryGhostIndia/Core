module.exports = {
  'secret': 'ilovescotchyscotch',
  'website': ['https://cycled.akeodev.com/cycled-ico/#/'],
  'websiteApi': ['https://cycled.akeodev.com/wp-content/themes/getcycled/'],
  'allowedOrigins': ['https://cycled-admin.akeodev.com', 'http://cycled-admin.akeodev.com'],
  "server": {
    "cert": "./cer.pem",
    "key": "./key.pem",
    "ciphers": "DASDJHASJHSGASAKSAJSKAJSAKSJ",
    "honorCipherOrder": true,
    "secureProtocol": "TLSv1_2_method"
  },
  jwt: {
    secret: 'SHDJHDSDSD&(**DSUDSY^D&^USDHSODISOIY&D*SYDDH',
    expireTime: 60 * 60 * 0.5, // set time
    audience: 'CycledUsers', 
    issuer: 'https://CycledApi.com'
  },
  emailConfig: {
    smtp: 'smtp.it-h.no',
    port: 587,
    service: 'gmail',
    user: 'cycledtoken@gmail.com',
    pass: 'Password@999',
    test: true,
    testRecepient: 'cycledtestuser@gmail.com',
    fromDisplayname: 'Cycled<cycledtoken@gmail.com>',
    adminEmail:'cycledtoken@gmail.com',
  },
  database: {
    mySqlConnection: 'mysql://devcycled:a6k7noiWUE9NW709@aa17sntjtvqksjr.cpiqfl4rqitm.ap-south-1.rds.amazonaws.com/cycled',
    defaultRole: 'user',
  },
  googleAuth: {
    'clientID': '195098776497-10soq2m3v31nbaeg06oc0iv8hd7q9nfc.apps.googleusercontent.com',
    'clientSecret': 'ao2lQC9nSwGGwmyYx5EB6rHZ',
    'callbackURL': 'dist/assets/auth-callback.php'
  },
  linkedinAuth: {
    'clientID': '81jjgjvvosk4ff',
    'clientSecret': 'D21SN7FQgj2SVz9w',
    'callbackURL': 'dist/assets/auth-callback.php'
  },
  facebookAuth: {
    'clientID': '392471997876350',
    'clientSecret': '1b71e8f19ed955318282b3f66ff03e7b',
    'callbackURL': 'dist/assets/auth-callback.php'
  },
  socialPlatforms: {
    Google: 'google',
    Facebook: 'facebook',
    Linkedin: 'linkedin'
  },
  // intercom:{
  //   token: 'dG9rOjIyOWNkOWUxXzZhNWVfNGViNV9iZTg2XzE5NzY0YTg5NmM3ZToxOjA=',
  //   preOnboardingTag: 'PreOnboarding',
  //   onboardingRegistered: 'OnboardingRegistered',
  //   onboardingVerified: 'OnboardingVerified',
  //   InvestmentInitiated: 'InvestmentInitiated',
  //   InvestmentConfirmed: 'InvestmentConfirmed',
  //   InvestmentCompleted: 'InvestmentCompleted'
  // },
  mongodb:{
    connection: 'mongodb://devcycled:asdf278TGyasdfasf23r@ip-172-31-20-116.ap-south-1.compute.internal/cycled'
  },

  blockChain:{
    etherNetwork: 'http://ip-172-31-25-61.ap-south-1.compute.internal:8545',
    bitcoinNetwork: 'testnet', // or mainnet  
    litecoinNetwork: 'testnet', // or mainnet  
    tokenAddress: '0xeb31aac12fc8cea12c156a006d402359b837db26',
    passphrase: '93419d48f5448f43712045d3032a0034:4648c17dc31b490efe96b514466fe50d404db5bc4e83f9e963c13854e97168403f52be9f292955f81f1275f79dadb966'
  },
  metabase:{
    METABASE_SITE_URL : "http://localhost:3000",
    METABASE_SECRET_KEY : "bfdb733819bbb191a21b6fc3f2f5e7ae78315aa4bdc370ffbd7b4e9d345ec8c9"
  },
  allowedIps: ['::1']
};
