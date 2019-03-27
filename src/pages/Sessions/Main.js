/**
 * The Main Component View at first View of Safety Notice App
 * https://github.com/railsjack/sn_mobile2/src/pages/sessions/Main.js
 *
 * @WhatToDo
 *  Show Main View at first view
 *  If a user is authenticated, then he/she can this view.
 *  In this view, there are 3 tabs (including "All Patiens", "Loved Ones", "Logout"
 *
 * @flow
 *  - import React from "react"
 *  - import Views for AllLovedOnes, ActiveLovedOnes and Logout
 *  - import createBottomTabNavigator & createAppContainer from "react-navigation"
 *  - implement tab
 *  - create & export a default method using createAppContainer
 *
 * @Notice
 *  - We use "react-native" not "native-base"
 */

import React from "react";
import {
    createBottomTabNavigator, createAppContainer
} from "react-navigation";

import AllLovedOnes from "../Lovedones/All";
import ActiveLovedOnes from "../Lovedones/Active";
import Logout from "../Sessions/Logout";


/**
 *  - implement tab
 *    In this view, we have 3 Tabs ("ALL LOVED ONES", "ACTIVE LOVED ONES", "LOGOUT")
 */

const bottomTabNavigator = createBottomTabNavigator({
    AllLovedOnes: AllLovedOnes,
    ActiveLovedOnes: ActiveLovedOnes,
    Logout: Logout
});

/**
 *  - create & export a default method using createAppContainer
 * */
export default createAppContainer(bottomTabNavigator);

