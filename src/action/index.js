

import fetch from 'isomorphic-fetch'

const LOGIN_RECEIVE = 'LOGIN_RECEIVE'

export function fetchData(user) {
    
    return dispatch => {

        return fetch(`http://localhost:3003/GetProjectBListThree`)

        .then(response => response.json())

        .then( json => dispatch( login_receive( user, json )))
    
    }    
}


function login_receive ( user, json ) {

    console.log(json)

    return {
        type: LOGIN_RECEIVE,
        user,
        isLogin: json.status
    }
}