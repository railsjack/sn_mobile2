/**
 * The Login Component View at first View of Safety Notice App
 * https://github.com/railsjack/sn_mobile2/src/pages/sessions/Login.js
 *
 * @WhatToDo
 *  Show Login View at first view
 *  If a user is not authenticated, then he/she can this view.
 *  In this view, there are 2 inputs (email, password) and 2 buttons ("Login", "SignUp")
 *
 * @flow
 *  - import React from "react"
 *  - import View, Text, StyleSheet, ImageBackground, TextInput,
 *      StatusBar, ActivityIndicator from "react-native"
 *  - import Container, Button, H3, Toast
 *  - create & export a class named "Login" extends React.Component
 *  - implement render
 *  - declare and define "styles" for views (container)
 *
 * @Notice
 *  - We use "react-native" not "native-base"
 *  - styles needs to be declared and defined out of Class
 */

import React from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  View
} from "react-native";
import { Button, Container } from "native-base";
import styles from "./styles/Login";
import Auth from "../../utils/Auth";

/**
 *  - create & export a class named "Login" extends React.Component
 */
export default class Login extends React.Component {
  /**
   *
   *  - Handling Login
   *    In this method, we handle logging in to our system.
   *    * We need a variable named "state" in this class.
   *      state = {username, password, loading}
   *    * when a user enters username, it will be stored into this.state,username
   *    * when a user enters password, it will be stored into this.state.password
   *    * when a user clicks a button "Login", the loading will become "true"
   *      And it sends the server the request with username and password.
   *    * when a response arrives from the API server, the loading will become "false"
   *      when a response is successful, we call onSignIn() in auth module.
   *      when a response is failsure, we displays an error message using Toast
   */

  state = { username: "john", password: "password", loading: false };
  handleLogin = () => {
    this.setState({ loading: true });
    Auth.signInWithUserNameAndPassword(this.state.username, this.state.password)
      .then(response => {
        this.setState({ loading: false });
        if (response.result === true) {
          this.props.navigation.navigate("Loading");
        }
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  /**
   *
   *  - implement render
   *    In this method, we show View and Text "Login" for now
   *    @Structure
   *     Container
   *       StatusBar [barStyle="light-content"]
   *       ImageBackground [source=launchScreenBg ]
   *         View [style=styles.container]
   *           ImageBackground [source=launchScreenLogo ]
   *           TextInput > User name
   *           TextInput > Password
   *           Button > Login [onPress=*handleLogin]
   *             ActivityIndicator [size="small"]
   *             :
   *             Text > Login
   */
  render() {
    const launchScreenBg = require("../../../assets/launchscreen-bg.png");
    const launchScreenLogo = require("../../../assets/logo.png");
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchScreenBg} style={styles.imageContainer}>
          <View style={styles.container}>
            <ImageBackground source={launchScreenLogo} style={styles.logo} />
            <TextInput
              editable={!this.state.loading}
              style={styles.textInput}
              placeholder="User name"
              placeholderTextColor="lightgray"
              autoCapitalize="none"
              value={this.state.username}
              onChangeText={username => this.setState({ username: username })}
            />
            <TextInput
              editable={!this.state.loading}
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="lightgray"
              autoCapitalize="none"
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password: password })}
            />
            <Button
              success
              block
              disabled={this.state.loading}
              style={[
                styles.button_base,
                this.state.loading && styles.button_base_disabled
              ]}
              onPress={this.handleLogin}
            >
              {this.state.loading ? (
                <ActivityIndicator size="small" />
              ) : (
                <Text style={styles.button_text}>Login</Text>
              )}
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}


