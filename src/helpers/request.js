import axios from 'axios'

const makeRequest = async (url) => {
    return await axios.get(url);
};

export default makeRequest;