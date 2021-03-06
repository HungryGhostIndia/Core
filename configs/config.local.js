module.exports = {
  'secret': 'ilovescotchyscotch',
  'website': 'http://localhost:4200',
  'allowedOrigins': ['http://localhost:4200', 'http://localhost:4201', 'http://192.168.1.60:4200'],
  "server": {
    "cert": "./cer.pem",
    "key": "./key.pem",
    "ciphers": "DASDJHASJHSGASAKSAJSKAJSAKSJ",
    "honorCipherOrder": true,
    "secureProtocol": "TLSv1_2_method"
  },
  jwt: {
    secret: 'SHDJHDSDSD&(**DSUDSY^D&^USDHSODISOIY&D*SYDDH',
    expireTime: 60 * 60 * 24, // for admin we will use 24hr
    audience: 'CycledUsers', 
    issuer: 'https://hrSystemApi.com'
  },
  database: {
    mySqlConnection: 'mysql://root:root@localhost/hr_system',
    defaultRole: 'user',
  }
};
