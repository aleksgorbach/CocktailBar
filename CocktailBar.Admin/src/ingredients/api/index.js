const request = require("superagent-promise")(require("superagent"), Promise);

export const getList = (page, pageSize) => {
    return request.get(`/api/ingredients?page=${page}&pageSize=${pageSize}`)
           .end()
           .then(res => res);
};