/**
 * Setup app for Safety Notice App
 * https://github.com/railsjack/sn_mobile2/src/boot/Setup.js
 *
 * @WhatToDo
 *  1) Starts the first Component View for this application.
 *     We call this as "StartApp.js"
 *  2) Sets up all necessary variables from theme
 *  Theme includes components and variables
 *  - Components includes almost components for general mobile Apps
 *    ex: Button, Form, Card ...
 *  - Variables includes variables for commonColor, material, platform
 *
 * @flow
 *  - import React from "react"
 *  - import StyleProvider from "native-base"
 *  - import StartApp from "../StartApp"
 *  - import getTheme from "../theme/components" // this is used by a function/method
 *  - import variables from "../theme/commonColor"
 *  - create & export a class named "Setup" extends React.Component
 *  - create a view using StyleProvider
 *  - create a view StartApp within StyleProvider, in this way, we can control style/color over our application.
 *
 * @Notice
 *  We don't use any React-Native components here.
 *  Instead, we use a component named "StyleProvider" from "native-base"
 *
 */

import React from "react";
import { StyleProvider } from "native-base";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

import StartApp from "../StartApp";

export default class Setup extends React.Component {
    render() {
        return (
            <StyleProvider style={getTheme(variables)}>
                <StartApp/>
            </StyleProvider>
        )
    }
}


