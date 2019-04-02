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
import { FlatList, ImageBackground, View } from "react-native";
import styles from "../components/global";
import LHeader from "../components/LHeader";
import LovedOne from "../components/LovedOne";

export default class ActiveLovedOnes extends React.Component {
  state = {
      data: [
          { key: "a", name: "test 2", date: "4/2/2019" },
          { key: "a1", name: "test 21", date: "4/2/2019" },
          { key: "a2", name: "test 22", date: "4/2/2019" },
          { key: "a3", name: "test 23", date: "4/2/2019" },
          { key: "a4", name: "test 24", date: "4/2/2019" },
          { key: "a5", name: "test 25", date: "4/2/2019" },
          { key: "a6", name: "test 26", date: "4/2/2019" },
          { key: "a7", name: "test 27", date: "4/2/2019" },
          { key: "a8", name: "test 28", date: "4/2/2019" }
      ]
  };
  /**
   *  - implement render
   *  @Structure
   *  ImageBackground
   *    LHeader (abbr. Lovedone Header)
   *    View
   *      FlatList [ data <= Dara Array, renderItem <= Item to Render ]
   *          LovedOne
   *          LovedOne
   *          ...
   *  @DataArray
   *    ref: this.state.data
   *    source: Server API
   * */
  render() {
    const launchScreenBg = require("../../../assets/launchscreen-bg.png");
    return (
      <ImageBackground source={launchScreenBg} style={styles.imageContainer}>
        <LHeader style={{ flex: 1  }} />
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <LovedOne key={item.key} name={item.name} date={item.date} type="active" />
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}
