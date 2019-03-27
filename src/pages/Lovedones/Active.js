/**
 * The Component View to show active Lovedones in Safety Notice App
 * https://github.com/railsjack/sn_mobile2/src/pages/lovedones/active.js
 *
 * @WhatToDo
 *  Show active Lovedones
 *  Here, all data will be pulled from the API Server
 *
 * @flow
 *  - import React from "react"
 *  - import View, Text, StyleSheet from "react-native"
 *  - create & export a class named "ActiveLovedOnes" extends React.Component
 *  - implement render
 *  - declare and define "styles" for views (container)
 *
 * @Notice
 *  - We use "react-native" not "native-base"
 *  - styles needs to be declared and defined out of Class
 */

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ActiveLovedOnes extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Active Loved Ones
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})



