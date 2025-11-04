import React from 'react';
import { View, Text, Button } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { NavigationProp } from '@react-navigation/native';

const Home = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home</Text>
      <Button title="Detail" onPress={() => navigation.navigate('Details')} />
      <Button title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />
    </View>
  );
};

export default Home;
