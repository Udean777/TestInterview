import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import postUserPass from '../axios/postUserPass';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function isValidEmail(email: string) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  const handleLogin = () => {
    if (isValidEmail(email)) {
      postUserPass(email, password);

      Alert.alert(
        "Login success"
      );
    } else {
      Alert.alert(
        'Invalid Email',
        'Please check your email address and try again.',
      );
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 40, fontWeight: '900', color: '#333'}}>
        Login
      </Text>

      <View style={{marginVertical: 10, gap: 10}}>
        <TextInput
          placeholder="email"
          style={styles.textInput}
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <TextInput
          placeholder="Password"
          style={styles.textInput}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: 300,
    padding: 10,
    borderRadius: 10,
  },
});

export default Login;
