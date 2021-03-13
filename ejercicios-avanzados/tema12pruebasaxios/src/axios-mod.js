import axios from 'axios';

const axiosExperience = axios.create();
axiosExperience.defaults.headers.common['valormod'] = 'puede';
axiosExperience.defaults.baseURL = 'https://bdvue-5d091-default-rtdb.firebaseio.com';

export default axiosExperience;