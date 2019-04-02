/**
 * Header Component for Lovedones List
 * @WhatToDo
 *   render the Header item for Loved Ones List Components
 *   This is used in both of "All Loved Ones" and "Active Loved Ones".
 * @Structure
 *   View [view]
 *   Header
 *     Left
 *       Text
 *     Right
 *       Text
 *   Header
 *     Body
 *       Text
 *       TextInput
 * */

import React from "react";
import { Body, Button, Header, Left, Right, View } from "native-base";
import { StyleSheet, Text, TextInput } from "react-native";

export default class LHeader extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        {/**
         Header 1st
         It includes 2 things.
           Left: the time when the Shift started
           Right: the button to start the shift
          */}
        <Header style={styles.header_1st}>
          <Left>
            <Text style={styles.header_label_started}>
              {/**
               * This time is pulled from the server as soon as the user click "Start Shift".
               * */}
              Your last shift ended: 03-30-19 18:26
            </Text>
          </Left>
          <Right>
            <Button
              danger
              small
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              {/**
               * The user can click the "Start New Shift" button, and it will send the request
               * to the server
               * */}
              <Text style={styles.header_button_text}>Start New Shift</Text>
            </Button>
          </Right>
        </Header>
        <Header style={styles.header_2nd}>
          <Body style={{ alignItems: "center" }}>
            {/**
             * Just Title
             * */}
            <Text style={styles.header_label_title}>All Loved Ones</Text>
            {/**
             * The text input for Search
             * */}
            <TextInput style={styles.header_input_search} />
          </Body>
        </Header>
      </View>
    );
  }
}

/**
 * @Structure
 *   view
 *     header_1st
 *       Left
 *         header_label_started
 *       Right
 *         Button
 *           header_button_text
 *     header_2nd
 *     Body
 *       header_label_title
 *       header_input_search
 * */
const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: null,
    backgroundColor: "black"
  },
  header_1st: {
    width: "100%",
    height: null,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "black"
  },
  header_2nd: {
    height: null,
    paddingBottom: 5,
    width: "100%",
    backgroundColor: "black"
  },
  header_label_started: {
    color: "white",
    fontSize: 12,
    width: 200
  },
  header_button_text: {
    color: "white",
    fontSize: 12,
    lineHeight: 20
  },

  header_label_title: {
    fontSize: 14,
    color: "white",
    width: "100%",
    textAlign: "center"
  },

  header_input_search: {
    paddingLeft: 5,
    padding: 0,
    backgroundColor: "white",
    width: "80%",

    borderRadius: 4
  }
});
