import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

import Logo from '../../../assets/Login_logo.png';

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.obs}>Este app está em desenvolvimento, portanto ainda não existe usuários, basta clicar em LOGIN</Text>
      <View style={styles.content}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.boxInput}>
          <TextInput style={styles.input} placeholder="Digite sua matrícula" />
          <MaterialIcons 
            name="account-box" 
            size={20} 
            color="#5e5e5e" 
            style={{ margin: 10 }}
          />
        </View>
        <View style={styles.boxInput}>
          <TextInput style={styles.input} placeholder="Digite sua senha" />
          <MaterialIcons 
            name="lock"
            size={20}
            color="#5e5e5e"
            style={{ margin: 10 }}
          />
        </View>
        <TouchableOpacity 
          style={styles.buttonSubmit} 
          onPress={() => navigation.navigate('Routes')}
        >
          <Text style={styles.textSubmit}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;