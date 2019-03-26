/**
 * Safety Notice App
 * https://github.com/railsjack/sn_mobile2/SafetyNoticeapp.js
 *
 * @WhatToDo
 *  This file contains Setup for this Application
 *
 * @flow
 *  - import React from "react"
 *  - import setup from "src/boot/setup"
 *  - create & export a class named "SafetyNoticeApp" extends React.Component
 *  - render and return a view named "Setup"
 *
 * @Notice
 *  We don't use any React-Native components here.
 *
 */


import React from "react";
import Setup from "./src/boot/Setup";

export default class SafetyNoticeApp extends React.Component {
    render() {
        return (
            <Setup/>
        )
    }
}

