/**
 * The first Component View for Safety Notice App
 * https://github.com/railsjack/sn_mobile2/src/StartApp.js
 *
 * @WhatToDo
 * We start AppContainer here.
 *  Here, we need to do the followings.
 *  - Shows up Loading View
 *  - In Loading View, we check if the user is authenticated or not.
 *  - If yes, then show Main view
 *  - Or show Login View
 *  - In Login View, there is an option to Sign up
 *
 * @flow
 *  - import React from "react"
 *  - import Root from "native-base"
 *  - import createAppContainer and createSwitchNavigator from "react-navigation"
 *  - import Loading, Main, Login, SignUp views
 *  - create a navigator using SwitchNavigator, initialRouteName is "Loading"
 *  - create a AppContainer using createAppContainer
 *  - create & export a default method contains a Root view(includes AppContainer)
 *
 * @Notice
 *  swtichNavigator is different from StackNavigator, and it does not store navigation history
 *  import Root using backets ( {, } ) since it is not default Class in the "native-base"
 *  export a default method not Class
 *
 */

import React from "react";
import { Root } from "native-base";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Loading from "./pages/Sessions/Loading"
import Main from "./pages/Sessions/Main"
import Login from "./pages/Sessions/Login"
import SignUp from "./pages/Sessions/SignUp"

const switchNavigator = createSwitchNavigator({
        Loading: {screen: Loading},
        Main: {screen: Main},
        Login: {screen: Login},
        SignUp: {screen: SignUp}
    },
    {
        initialRouteName: 'Loading'
    }
);

const AppContainer = createAppContainer(switchNavigator);

export default () => {
    return (
        <Root>
            <AppContainer/>
        </Root>
    )
}

