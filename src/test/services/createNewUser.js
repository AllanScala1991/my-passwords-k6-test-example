import uuid from '../libs/uuid.js';
import http from 'k6/http';

export function createNewUser() {
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

    const response = JSON.parse(http.post(url, payload, headers).body);

    return response.data.username
}