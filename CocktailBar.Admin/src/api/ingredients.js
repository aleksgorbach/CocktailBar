const request = require("superagent-promise")(require("superagent"), Promise);

export const getList = (page, pageSize) => {
    return request.get(`/api/ingredients?page=${page}&pageSize=${pageSize}`)
        .end()
        .then(result => {
                if (result.status !== 200) {
                    return Promise.reject(result.status);
                } else {
                    return Promise.resolve(result);
                }
            },
            err => Promise.reject(err)
        )
        .then(res => res.body);
};

export const save = item => {
    return request.post("/api/ingredients")
        .send(item)
        .end()
        .then(result => {
                if (result.status !== 200) {
                    return Promise.reject(result.status);
                } else {
                    return Promise.resolve(result);
                }
            },
            err => Promise.reject(err)
        )
        .then(res => res);
}

export const getListMock = (page, pageSize) => {
    return Promise.resolve(data);
};

const data = [
    {
        id: 1,
        title: "Blue Curacao",
        description: "Liquor"
    },
    {
        id: 2,
        title: "Lemoncello",
        description: "Liquor"
    },
    {
        id: 3,
        title: "Coca-Cola",
        description: "Drink"
    }
]