/**
 * This is a common Utility for Authentication over whole system.
 * @WhatToDo
 *  - Sign in with User name and Password
 *  - Sign out
 *  - Check if the user was signed in or not.
 *  - All methods will have promise on itself.
 *  - private methods
 *    _onSignIn
 *    _onSignOut
 * */

import {
    signInWithUserNameAndPassword,
    onSignIn,
    onSignOut,
    isSignedIn
} from "./SignIn";

export default {
    signInWithUserNameAndPassword: signInWithUserNameAndPassword,
    onSignIn: onSignIn,
    onSignOut: onSignOut,
    isSignedIn: isSignedIn
}

