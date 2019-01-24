import { ApiHost } from '../config';

export const insert = item => {
    return fetch(ApiHost, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
};

export const update = item => {
    return fetch(ApiHost + `${item.id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
};

export const getAll = () => {
    return fetch(ApiHost)
        .then((result) => result.json());
}

export const remove = (itemId) => {
    return fetch(ApiHost + `${itemId}`, {method: 'DELETE'});
}


