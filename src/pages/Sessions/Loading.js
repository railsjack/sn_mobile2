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
import {
    View, Text, StyleSheet
} from "react-native";



/**
 *  - create & export a class named "Loading" extends React.Component
 */
export default class Loading extends React.Component {

    /**
     *  - implement componentDidMount
     *    In this method, we implements the feature to check if the user authenticated or not
     *    If authenticated, show Main or Login
     */
    componentDidMount(): void {
        const userAuthenticated = true
        this.props.navigation.navigate(userAuthenticated? 'Main' : 'Login')
    }

    /**
     *
     *  - implement render
     *    In this method, we show View and Text "Loading..."
     *
     */
    render()  {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        )
    }

}


/**
 *
 *  - declare and define "styles" for views (container)
 *    flex: 1, justfiyContent: 'center' (Vertically), alignItems: 'center' (Horizontally)
 *
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

