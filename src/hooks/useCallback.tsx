import {View, Text, Button} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

function ExampleUseCallback() {
  const [start, setStart] = useState<boolean>(false);
  const [seconds, setSeconds] = useState(0);
  let intervalId: any = null;

  useEffect(() => {
    if (start) {
      intervalId = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [start]);

  const handleStart = useCallback(() => {
    setStart(true);
  }, []);

  const handleStop = useCallback(() => {
    setStart(false);
  }, []);

  return (
    <View>
      <Button title="Start Timer" onPress={handleStart} />
      <Text style={{fontSize: 20, marginVertical: 20, fontWeight: 'bold'}}>
        Seconds: {seconds}
      </Text>
      <Button title="Stop Timer" onPress={handleStop} />
    </View>
  );
}

export default ExampleUseCallback;
