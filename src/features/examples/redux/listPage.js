import axios from "axios";

// Action creator
export function fetchList(page = 1, keyword = "", pageSize = 3) {
    // action
    return dispatch => {
        // optionally you can have getState as the second argument
        dispatch({
            type: "FETCH_LIST_BEGIN",
        });

        const promise = new Promise((resolve, reject) => {
            const doRequest = axios.get(
                `https://reqres.in/api/users?page=${page}&per_page=${pageSize}&q=${keyword}`,
            );

            doRequest.then(
                res => {
                    dispatch({
                        type: "FETCH_LIST_SUCCESS",
                        data: {
                            items: res.data.data,
                            page,
                            pageSize,
                            total: res.data.total,
                        },
                    });
                    resolve(res);
                },
                err => {
                    dispatch({
                        type: "FETCH_LIST_ERROR",
                        data: {
                            error: err
                        },
                    });
                    reject(err);
                },
            );
        });

        return promise;
    };
}

export function fetchUser(id) {
    // action
    return dispatch => {
        // optionally you can have getState as the second argument
        dispatch({
            type: "FETCH_USER_BEGIN",
        });

        const promise = new Promise((resolve, reject) => {
            const doRequest = axios.get(`https://reqres.in/api/users/${id}`);

            doRequest.then(
                res => {
                    dispatch({
                        type: "FETCH_USER_SUCCESS",
                        data: res.data,
                    });
                    resolve(res);
                },
                err => {
                    dispatch({
                        type: "FETCH_USER_ERROR",
                        data: {
                            error: err
                        },
                    });
                    reject(err);
                },
            );
        });

        return promise;
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case "FETCH_LIST_BEGIN":
            return {
                ...state,
                fetchListPending: true,
                    fetchListError: null,
            };
        case "FETCH_LIST_SUCCESS": {
            const byId = {};
            const items = [];
            action.data.items.forEach(item => {
                items.push(item.id);
                byId[item.id] = item;
            });
            return {
                ...state,
                byId,
                items,
                page: action.data.page,
                pageSize: action.data.pageSize,
                total: action.data.total,
                fetchListPending: false,
                fetchListError: null,
            };
        }
        case "FETCH_LIST_ERROR":
            return {
                ...state,
                fetchListPending: false,
                    fetchListError: action.data,
            };
            break;
        default:
            break;
    }
}