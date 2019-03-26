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
 *  - import View, Text, StyleSheet from "react-native"
 *  - create & export a class named "Main" extends React.Component
 *  - implement render
 *  - declare and define "styles" for views (container)
 *
 * @Notice
 *  - We use "react-native" not "native-base"
 *  - styles needs to be declared and defiend out of Class
 */

import React from "react";
import {
    View, Text, StyleSheet
} from "react-native";

/**
 *  - create & export a class named "Main" extends React.Component
 */
export default class Main extends React.Component {

    /**
     *
     *  - implement render
     *    In this method, we show View and Text "Main" for now
     *
     */
    render()  {
        return (
            <View style={styles.container}>
                <Text>Main</Text>
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

