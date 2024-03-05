import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import postUserPass from '../axios/postUserPass';

const Login = () => {
  //  here's how the usestate implemented
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  {
    /* how useState work is, its basically store the data,
  i'll explain it below
    */
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 40, fontWeight: '900', color: '#333'}}>
        Login
      </Text>

      <View style={{marginVertical: 10, gap: 10}}>
        <TextInput
          placeholder="Username"
          style={styles.textInput}
          //   so we set the value of username into whatever the text is in the TextInput
          onChangeText={text => setUsername(text)}
          value={username}
          //   and then we set the value of the username, which we already set it to whatever the text in textinput
        />

        {/* work the same with the username textinput */}
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>

      {/* then we make the button for login, and we pass the username & password state into the params */}
      <Button title="Login" onPress={() => postUserPass(username, password)} />
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
