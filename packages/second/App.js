import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome5';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Second - Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('SecondProfileScreen')}
        title="GO TO PROFILE"
        color="#841584"
      />
      <Icon name="comments" size={30} color="#900" />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Second - Profile Screen</Text>
      <Button
        onPress={() => navigation.navigate('SecondHomeScreen')}
        title="GO TO HOME"
        color="#841584"
      />
      <Icon name="comments" size={30} color="#900" />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SecondHomeScreen" component={HomeScreen} />
        <Stack.Screen name="SecondProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
