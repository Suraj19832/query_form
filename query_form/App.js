import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import QueryForm from './Screens/QueryForm';
import FeatureDetails from './Screens/FeatureDetails';
import TechnicalPreferences from './Screens/TechnicalPreferences';
import TimelineBudget from './Screens/TimelineBudget';
import AdditionalDetails from './Screens/AdditionalDetails';
import ReviewSubmit from './Screens/ReviewSubmit';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='QueryForm' component={QueryForm} />
        <Stack.Screen name="FeatureDetails" component={FeatureDetails} />
        <Stack.Screen name="TechnicalPreferences" component={TechnicalPreferences} />
        <Stack.Screen name="TimelineBudget" component={TimelineBudget} />
        <Stack.Screen name="AdditionalDetails" component={AdditionalDetails} />
        <Stack.Screen name="ReviewSubmit" component={ReviewSubmit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
