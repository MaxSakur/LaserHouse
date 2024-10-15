import axios from 'axios';
// import DeviceInfo from 'react-native-device-info';

// const createApiInstance = () => {
//   // const deviceId = await DeviceInfo.getUniqueId();
//   // console.log('Device ID:', deviceId);

//   const api = axios.create({
//     baseURL: 'https://api.lh.ua/apps',
//     headers: {
//       'Content-Type': 'application/json',

//     },
//   });

//   return api;
// };

// export default createApiInstance;

const api = axios.create({
  baseURL: 'https://api.lh.ua/apps/',
  headers: {
    'Content-Type': 'application/json',
    'X-App-Id': '5a84353031717a18160958b0818c7e46ff309ce5',
  },
});

export default api;
