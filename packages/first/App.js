import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome5';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>First - Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('FirstProfileScreen')}
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
      <Text>First - Profile Screen</Text>
      <Button
        onPress={() => navigation.navigate('FirstHomeScreen')}
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
        <Stack.Screen name="FirstHomeScreen" component={HomeScreen} />
        <Stack.Screen name="FirstProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
