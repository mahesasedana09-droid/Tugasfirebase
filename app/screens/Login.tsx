import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      console.log('logged in');
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Login</Text>
      <TextInput placeholder="email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="password" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={signIn} />
    </View>
  );
};

export default Login;
