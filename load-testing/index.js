import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    stages: [
        { duration: '20s', target: 100 }, // Ramp-up to 100 users over 20 seconds
        { duration: '30s', target: 500 },  // Stay at 500 users for 30 seconds
        { duration: '10s', target: 0 },   // Ramp-down to 0 users over 10 seconds
    ]
};

export default function () {
    const response = http.get("http://localhost:8080/user");
    console.log('Response status: ' + response.body);
    sleep(1);
}