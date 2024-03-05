/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Login from './src/screens/Login';
import ExampleUseCallback from './src/hooks/useCallback';
import ExampleUseMemo from './src/hooks/useMemo';
import ExampleUseState from './src/hooks/ExampleUseState';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Login />
      {/* <ExampleUseCallback /> */}
      {/* // <ExampleUseMemo/> */}
      {/* <ExampleUseState/> */}
    </SafeAreaView>
  );
}

export default App;
