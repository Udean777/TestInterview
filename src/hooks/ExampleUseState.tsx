import {View, Text, TextInput} from 'react-native';
import React, {useCallback, useState} from 'react';

const ExampleUseState = () => {
  const [name, setName] = useState<string>('Lukas');

  const changeName = useCallback((name: string) => {
    setName(name);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
      }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => changeName(text)}
        style={{borderWidth: 1, width: 300, padding: 10, borderRadius: 10}}
      />

      <Text>{name}</Text>
    </View>
  );
};

export default ExampleUseState;
