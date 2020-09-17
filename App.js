import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import Mybutton from './components/Mybutton.js'

export default function App() {
  const [ input, setInput ] = useState('')
  const [color, setColor ] = useState('')

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://www.igeargeek.com/_nuxt/img/835647d.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>ขาหมูสูตรบางหว้า</Text>
      <TextInput 
        value={input}
        onChangeText={(text) => {setInput(text)}} 
        placeholder="เมนูที่ต้องการสั่ง" 
        style={styles.input} 
      />
      <Text 
        style={{ 
          fontSize:30, 
          marginTop:20, 
          color: color 
          }}>
        {input}
      </Text>
      <View style={styles.buttonLayout}>
        <Mybutton title="Red" color="#FF8181" onChangeColor={(color) => {setColor(color)}}/>
        <Mybutton title="Blue" color="#81B4FF" onChangeColor={(color) => {setColor(color)}}/>
        <Mybutton title="Yellow" color="#DFD806" onChangeColor={(color) => {setColor(color)}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderStyle: "solid",
    borderRadius: 4,
    borderWidth: 1,
    width: "80%",
    marginTop: 20,
  },
  buttonLayout: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
