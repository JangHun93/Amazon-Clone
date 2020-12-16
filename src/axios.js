import axios from 'axios';

const instance = axios.create({
	// baseURL: 'https://us-central1-challenge-e9967.cloudfunctions.net/api'
	baseURL: 'http://localhost:5001/challenge-e9967/us-central1/api'
});

export default instance;
