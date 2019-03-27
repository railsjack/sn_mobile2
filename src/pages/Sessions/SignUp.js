/**
 * The SignUp Component View at first View of Safety Notice App
 * https://github.com/railsjack/sn_mobile2/src/pages/sessions/SignUp.js
 *
 * @WhatToDo
 *  Show SignUp View at first view
 *  If a user is authenticated and the user clicks "SignUp", then he/she can this view.
 *  In this view, there are 2 inputs (email, password) and 2 buttons ("SignUp", "Login")
 *
 * @flow
 *  - import React from "react"
 *  - import View, Text, StyleSheet from "react-native"
 *  - create & export a class named "SignUp" extends React.Component
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
 *  - create & export a class named "SignUp" extends React.Component
 */
export default class SignUp extends React.Component {

    /**
     *
     *  - implement render
     *    In this method, we show View and Text "SignUp" for now
     *
     */
    render()  {
        return (
            <View style={styles.container}>
                <Text>SignUp</Text>
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

