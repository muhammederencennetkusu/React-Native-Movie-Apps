import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

// 📌 Sayfaları içe aktar
import HomeScreen from './src/Screens/Home';
import SettingsScreen from './src/Screens/Settings';
import MoviesDetails from './src/Screens/MoviesDetails';
import SlideDetails from './src/Screens/slideDetails'

// 📌 Stack Navigator oluştur
const Stack = createStackNavigator();
function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="MoviesDetails" 
        component={MoviesDetails} 
        options={{ title: "Film Detayları",headerShown: false, }} 
      />
         <Stack.Screen 
        name="slideDetails" 
        component={SlideDetails} 
        options={{ title: "Slide Detayları",headerShown: false, }} 
      />
    </Stack.Navigator>
  );
}

// 📌 Tab Navigator oluştur
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Ana Sayfa"
          component={HomeStackNavigator} // 📌 Stack Navigator burada!
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
            headerShown: false, // Tab içinde stack olduğu için header gizlendi
          }}
        />
        <Tab.Screen
          name="Ayarlar"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="cog" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
