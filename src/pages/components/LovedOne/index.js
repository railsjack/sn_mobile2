/**
 * name: Loved One Component
 * @Structure
 *   ListItem
 *     Text [ for Name ]
 *     Text [ for Date ]
 *     in case type is "normal"
 *       TouchableOpacity [for Button "Activate" ]
 *     in case type is "active"
 *       TouchableOpacity [for Label "Activate" ]
 *       TouchableOpacity [for Button "╳" ]
 */

import React from "react";
import { ListItem, Text } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";

export default class LovedOne extends React.Component {
  render() {
    return (
      <ListItem style={styles.list_item}>
        <Text style={styles.list_name}>{this.props.name}</Text>
        <Text style={styles.list_date}>{this.props.date}</Text>
        {/**
         * If LovedOne's type is "normal", then "Activate" button will be shown
         * This is the case when the User clicks "All Loved Ones"
         * */}
        {this.props.type === "normal" && (
          <TouchableOpacity style={styles.button_activate}>
            <Text style={styles.button_activate_text}>Activate</Text>
          </TouchableOpacity>
        )}

        {/**
         * If LovedOne's type is "active", then "Activate" button will be shown
         * This is the case when the User clicks "Active Loved Ones"
         * */}
        {this.props.type === "active" && (
          <TouchableOpacity style={styles.label_activate}>
            <Text style={styles.label_activate_text}>Activate</Text>
          </TouchableOpacity>
        )}
        {this.props.type === "active" && (
          <TouchableOpacity style={styles.button_close}>
            <Text style={styles.button_close_text}>╳</Text>
          </TouchableOpacity>
        )}
      </ListItem>
    );
  }
}

/**
 * Styles for Loved One Item
 *
 * @Structure
 *   list_item
 *     list_name
 *     list_date
 *     button_activate
 *       button_activate_text
 *     label_activate
 *       label_activate_text
 *     button_close
 *       button_close_text
 *
 * */
const styles = StyleSheet.create({
  list_item: {
    marginHorizontal: 20,
    borderBottomColor: "#dcdcdc",
    borderBottomWidth: 1,
    height: 70
  },
  list_name: {
    fontSize: 18,
    color: "white",
    position: "absolute",
    top: 10,
    left: 5
  },
  list_date: {
    color: "white",
    position: "absolute",
    top: 40,
    left: 5,
    fontWeight: "200",
    fontSize: 14
  },
  button_activate: {
    position: "absolute",
    right: 0,
    top: 15,
    height: 25,
    borderRadius: 3,
    backgroundColor: "green"
  },
  button_activate_text: {
    textAlign: "center",
    width: 80,
    lineHeight: 25,
    color: "white",
    fontSize: 12
  },
  label_activate: {
    position: "absolute",
    right: 50,
    top: 15,
    height: 25,
    backgroundColor: "transparent",
    borderWidth: 0
  },
  label_activate_text: {
    color: "lightgray"
  },
  button_close: {
    position: "absolute",
    right: 0,
    top: 15,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    width: 20,
    height: 20,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.3)",
    textAlign: "center"
  },
  button_close_text: {
    fontFamily: "Serif",
    color: "black",
    fontSize: 12,
    lineHeight: 19
  }
});
