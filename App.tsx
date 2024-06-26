import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import HomeScreen from './HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
