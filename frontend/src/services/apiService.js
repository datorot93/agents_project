const apiService = {
    get: async function (url) {
        console.log('get', url);

        //const token = await getAccessToken();

        return new Promise((resolve, reject) => {
            //fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`
            fetch(`http://localhost:8000/${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    //'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then((json) => {
                    console.log('Response:', json);

                    resolve(json);
                })
                .catch((error => {
                    reject(error);
                }))
        })
    },

    postWithoutToken: async function(url, data) {
        console.log('post', url, data);

        return new Promise((resolve, reject) => {
            //`${process.env.NEXT_PUBLIC_API_HOST}${url}`
            fetch(`http://localhost:8000/${url}`, {
                method: 'POST',
                body: JSON.stringify(data),//data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then((json) => {
                    console.log('Response:', json);

                    resolve(json);
                })
                .catch((error => {
                    reject(error);
                }))
        })
    }
}

export default apiService;