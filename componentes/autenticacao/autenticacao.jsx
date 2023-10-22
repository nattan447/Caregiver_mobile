import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import authsyle from './estilos/authestyle';
import Whouare from './contextos/whouare';
export default function Autenticacao(props) {
  const {iscliente, Setiscliente} = useContext(Whouare);
  const changeuser = () => {
    Setiscliente(!iscliente);
  };

  return (
    <View style={authsyle.container}>
      <Button onPress={changeuser} title={props.nomebtn}></Button>
    </View>
  );
}
