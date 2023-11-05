import uuid from './libs/uuid.js';
import http from 'k6/http';
import { sleep, check } from 'k6';


export const options = {
    stages: [
        { duration: '30s', target: 5 },
        { duration: '1m', target: 5 },
        { duration: '30s', target: 0 }
    ]
}

export default function () {
    const url = 'http://localhost:8002/user';

    const headers = {
        'headers' : {
            'Content-Type' : 'application/json'
        }
    }

    const payload = JSON.stringify({
        name: 'k6 test',
        email: `${uuid.v4().substring(24)}@k6test.com.br`,
        username: `${uuid.v4().substring(24)}`,
        password: 'pass123'
    })

    const response = http.post(url, payload, headers);

    check(response, {
        'status should be 201': (r) => r.status === 201
    })

    sleep(1);

}