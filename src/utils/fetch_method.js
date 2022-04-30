
const getAPI = (database, endpoint, cb) => {
    fetch(`${database}/${endpoint}`)
        .then(value => value.json())
        .then(json => cb(json));
};

export { getAPI };