import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screen/SignIn'; 
import SignUp from './screen/SignUp'; 
import VirtualClass from './screen/virtualClass';
import Inface from './screen/Inface';
import DashboardScreen from './screen/DashboardScreen'; 
import Exam from './screen/Exam'; 
import Assignment from './screen/Assignment'; 
// import DashboardScreen from './screen/DashboardScreen';  // استيراد الشاشة DashboardScreen

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inface" component={Inface} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="VirtualClass" component={VirtualClass} />
        <Stack.Screen name="Exam" component={Exam} />
        <Stack.Screen name="Assignment" component={Assignment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
