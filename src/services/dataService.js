import axios from 'axios';

const url = 'http://127.0.0.1:3004';

export async function getLinks() {
    let response = await axios.get(`${url}/links`);
    return await response.data;
}
export async function getSlides() {
    let response = await axios.get(`${url}/slides`);
    return await response.data;
}

export default {
    getLinks,
    getSlides
}