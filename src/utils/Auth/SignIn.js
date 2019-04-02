import AsyncStorage from '@react-native-community/async-storage';
import { API_ENDPOINT, USER_KEY } from "./commonVariables"

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
export const signInWithUserNameAndPassword = (username, password) => {
    return new Promise((resolve, reject) => {
        // Sends the Request to the API Server API_ENDPOINT
        fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password} )
        })
        // The 1st part of the response is header not body
        .then((response) => response.json())
        // The 2nd part of the response is body
        .then( responseJson=> {
            if(responseJson.result === true){
                onSignIn(); // onSignIn would be called when it is successful
                resolve(responseJson);
            }else{
                reject(responseJson);
            }
        }).catch(error => {
            reject(error);
        });
    });
};

/**
 * Handles the process for SignOut
 * @params
 * @ToDo
 *   Remove the value for USER_KEY
 * */
export const onSignOut = () => {
    AsyncStorage.removeItem(USER_KEY);
};

/**
 * Handles the process for SignIn
 * @params
 * @ToDo
 *   set the value for USER_KEY as "true"
 * */
export const onSignIn = () => {
    AsyncStorage.setItem(USER_KEY, "true");
}

/**
 * Checks if the user signed in or not
 * @params
 * @ToDo
 *   checks if the value is true or not.
 * */
export const isSignedIn = () => {
    // create and return the Promise
    return new Promise((resolve, reject) => {
        // check if USER_KEY is stored in AsyncStorage
        AsyncStorage.getItem(USER_KEY)
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};

