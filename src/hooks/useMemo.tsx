import {View, Text, Button} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';

const ExampleUseMemo = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 8, 9, 10]);

  const avg = useMemo(() => {
    return data.reduce((acc, val) => acc + val, 0) / data.length;
  }, [data]);

  const addNumber = useCallback(() => {
    setData([...data, data.length + 1]);
  }, [data]);

  return (
    <View>
      <Text>Average : {avg}</Text>
      <Button title="Add Number" onPress={addNumber} />
    </View>
  );
};

export default ExampleUseMemo;
