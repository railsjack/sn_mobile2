/**
 * The Loading Component View at first View of Safety Notice App
 * https://github.com/railsjack/sn_mobile2/src/pages/sessions/Loading.js
 *
 * @WhatToDo
 *  Show Loading View at first view
 *    When a user runs this app, this view will be shown at the first time.
 *    In this view, if user is authenticated, then show the Main view
 *    Or show the Login view
 *
 * @flow
 *  - import React from "react"
 *  - import View, Text, StyleSheet from "react-native"
 *  - create & export a class named "Loading" extends React.Component
 *  - implement componentDidMount
 *  - implement render
 *  - declare and define "styles" for views (container)
 *
 * @Notice
 *  - We use "react-native" not "native-base"
 *  - styles needs to be declared and defined out of Class
 */

import React from "react";
import { ActivityIndicator, ImageBackground, View } from "react-native";
import { Container, Text } from "native-base";

/**
 * Auth is imported from util module
 * styles is imported from customs/global
 * */
import Auth from "../../utils/Auth";
import styles from "../components/global";

/**
 *  - create & export a class named "Loading" extends React.Component
 */
export default class Loading extends React.Component {

    /**
     *  - implement componentDidMount
     *    In this method, we implement the feature to check if the user is authenticated or not
     *    If authenticated, show Main or Login
     *    Auth.isSignedIn returns a promise if it is successful
     *    In the promise, if signedIn is true, then it will show Main or Login page.
     */
    componentDidMount(): void {
        Auth.isSignedIn()
            .then( (signedIn) => {
                setTimeout(()=>{
                    this.props.navigation.navigate( (signedIn? 'Main' : 'Login') )
                }, 1000);
            });
    }

    /**
     *
     *  - implement render
     *    In this method, we show View and Text "Loading..."
     *
     */
    render()  {
        const launchScreenBg = require("../../../assets/launchscreen-bg.png");
        return (
            <Container>
                <ImageBackground source={launchScreenBg} style={styles.imageContainer}>
                    <View style={styles.container}>
                        <ActivityIndicator size="large" color="lightgray" />
                        <Text style={styles.text}>
                            {"\n"}
                            Loading...
                        </Text>
                    </View>
                </ImageBackground>
            </Container>
        )
    }

}

