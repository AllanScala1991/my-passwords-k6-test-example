import http from 'k6/http';
import { sleep, check } from 'k6';
import { createNewUser } from './services/createNewUser.js';

export const options = {
    stages: [
        { duration: '30s', target: 5 },
        { duration: '1m', target: 5 },
        { duration: '30s', target: 20 },
        { duration: '1m', target: 20 },
        { duration: '30s', target: 50 },
        { duration: '1m', target: 50 },
        { duration: '30s', target: 100 },
        { duration: '1m', target: 100 },
        { duration: '1m', target: 0 }
    ]
}

export function setup() {
    return createNewUser();
}

export default function (username) {
    const url = 'http://localhost:8002/login';

    const headers = {
        'headers' : {
            'Content-Type' : 'application/json'
        }
    }
    
    const payload = JSON.stringify({
        username: username,
        password: 'pass123'
    })

    const response = http.post(url, payload, headers);
    check(response, {
        'status should be 200': (r) => r.status === 200
    })

    sleep(1);

}