import AsyncStorage from '@react-native-community/async-storage';
import { API_ENDPOINT } from "./commonVariables"

/**
 * signInWithUserNameAndPassword
 * @params
 *  username: @String
 *  password: @String
 * @features
 *  - Sends the POST request to the API server with username and password
 *  - Parse the response from the server
 * @return
 *  - promise after sent the request
 * */
export const All = () => {
    return new Promise((resolve, reject) => {
        // Sends the Request to the API Server API_ENDPOINT
        fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({} )
        })
        // The 1st part of the response is header not body
        .then((response) => response.json())
        // The 2nd part of the response is body
        .then( responseJson=> {
            if(responseJson.result === true){
                resolve(responseJson);
            }else{
                reject(responseJson);
            }
        }).catch(error => {
            reject(error);
        });
    });
};
