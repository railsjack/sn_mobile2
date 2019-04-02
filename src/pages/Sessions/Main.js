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
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import AllLovedOnes from "../Lovedones/All";
import ActiveLovedOnes from "../Lovedones/Active";
import Logout from "../Sessions/Logout";

/**
 *  - implement tab
 *    In this view, we have 3 Tabs
 *    ("ALL LOVED ONES", "ACTIVE LOVED ONES", "LOGOUT")
 *    This tab is placed at the bottom.
 *    And, there are 3 items on itself.
 *    We call createBottomTabNavigator to create a bottom tab.
 *    @1st parameter: Object contains tab items.
 *    @2nd parameter:
 *      defaultNavigationOptions
 *          callback({navigation})
 *      tabBarOptions
 */

const bottomTabNavigator = createBottomTabNavigator(
  {
    "All Loved Ones": { screen: AllLovedOnes },
    "Active Loved Ones": ActiveLovedOnes,
    Logout: Logout
  },
  {
    /**
     *
     * @WhatToDo
     * A method to create TabBar Icon in the tab page
     * In this page, it makes tab items corresponding to routeName
     * @params
     *  navigation:
     *    This method will be called to get the routeName
     * @return
     *  It returns IonicIcons object named "IconComponnent" with iconName and color
     * */
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "All Loved Ones") {
          iconName = `md-people`;
        } else if (routeName === "Active Loved Ones") {
          iconName = `md-person`;
        } else if (routeName === "Logout") {
          iconName = `md-exit`;
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    /**
     * babBarOption
     *   includes: active color, inactive color and background color
     * */
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "white",
      pressColor: "gray", //for click (ripple) effect color
      style: {
        backgroundColor: "rgb(45, 40, 35)" //color you want to change
      }
    }
  }
);

export default createAppContainer(bottomTabNavigator);
