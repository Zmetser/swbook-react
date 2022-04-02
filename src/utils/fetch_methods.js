const getAPI = (database, endpoint, cb) => {
  console.log('FECCCCS');
  fetch(`${database}/${endpoint}`)
    .then((value) => value.json())
    .then((json) => cb(json));
};

export { getAPI };
