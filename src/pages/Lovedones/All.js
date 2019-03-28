/**
 * The Component View to show all Lovedones in Safety Notice App
 * https://github.com/railsjack/sn_mobile2/src/pages/lovedones/all.js
 *
 * @WhatToDo
 *  Show all Lovedones
 *  Here, all data will be pulled from the API Server
 *
 * @flow
 *  - import React from "react"
 *  - import View, Text, StyleSheet from "react-native"
 *  - create & export a class named "AllLovedOnes" extends React.Component
 *  - implement render
 *  - Load data from the Server
 *  - declare and define "styles" for views (container)
 *
 * @Notice
 *  - We use "react-native" not "native-base"
 *  - styles needs to be declared and defined out of Class
 */

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class AllLovedOnes extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    All Loved Ones
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



