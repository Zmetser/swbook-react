

export default function getResults(url, cb){
    fetch(url)
        .then(data => data.json())
        .then(json => cb(json.results))
}