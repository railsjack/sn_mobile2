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
import { FlatList, ImageBackground, View } from "react-native";

import gstyles from "../components/global";
import LovedOne from "../components/LovedOne";
import LHeader from "../components/LHeader";

export default class AllLovedOnes extends React.Component {
  state = { data: [{ key: "a", name: "test1" }, { key: "b" }, { key: "c" }] };
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
      <ImageBackground source={launchScreenBg} style={gstyles.imageContainer}>
        <LHeader style={{ flex: 1 }} />
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <LovedOne key={item.key} name={item.name} date={item.date} type="normal" />
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}
