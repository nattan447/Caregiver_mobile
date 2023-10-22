/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {useEffect, useState} from 'react';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Whouare from './componentes/autenticacao/contextos/whouare';
import Autenticacao from './componentes/autenticacao/autenticacao';

function App() {
  const [iscliente, Setiscliente] = useState(true);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Whouare.Provider value={{iscliente, Setiscliente}}>
        {iscliente ? (
          <Autenticacao nomebtn="cliente" />
        ) : (
          <Autenticacao nomebtn="Cuidador" />
        )}
      </Whouare.Provider>
    </SafeAreaView>
  );
}

export default App;
