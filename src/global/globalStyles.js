
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { palette } from '../assets/config/colors';
import fontFamily from '../assets/config/fontFamily';
import { HP, WP } from '../assets/config/screen-ratio';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5, elevation: 5,
  },
  card: {
    backgroundColor: "#fff",
    paddingHorizontal: WP(5),
    paddingVertical: HP(1)
  },
  boldTxt: {
    fontFamily: fontFamily.bold, fontSize: 18, color: palette.black
  },
  mediumTxt: {
    fontFamily: fontFamily.medium, fontSize: 14, color: palette.black
  },
  regularTxt: {
    fontFamily: fontFamily.regular, fontSize: 14, color: palette.black
  },
  lightTxt: {
    fontFamily: fontFamily.light, fontSize: 14, color: palette.black
  },
  urlTxt: {
    fontFamily: fontFamily.light, fontSize: 14, color: palette.white, textDecorationLine: 'underline'
  },
  btnView: {
    paddingVertical: HP(1), width: WP(40)
  },
  iconImg: {
    width: WP(14), height: WP(14), alignSelf: 'center', borderRadius: WP(12)
  },
  inp: {
    fontFamily: fontFamily.regular,
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#B7C1DF',
    borderRadius: WP(2),
    paddingHorizontal: WP(6),
    color: palette.black,
    height: Platform?.OS == 'ios' ? 55 : 55,
  }
})