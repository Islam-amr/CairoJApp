import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Navbar from './Components/Navbar'
import Intro from './Screens/Intro';
import Form from './Screens/Form';
import Home from './Screens/Home';
import Schedule from './Screens/Schedule';
import About from './Screens/About';
import Contact from './Screens/Contact';
import { AsyncStorage, Text } from 'react-native';


const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashScreenTimer: null,  // To Handle SplashScreen Time
      StarterScreen: null,
    };
    this.StartScreen();
  }

  //Splash Screen
  componentDidMount = async () => {
    let splashScreenTimer = setInterval(this.hideSplashScreen, 3000); // hide splash screen after 3s
    this.setState({ splashScreenTimer });
  }

  hideSplashScreen = () => {
    SplashScreen.hide();
    clearInterval(this.state.splashScreenTimer);
  }
  // End of Splash Screen

  StartScreen = async () => {
    //  await AsyncStorage.removeItem('UserToken');
    const userToken = await AsyncStorage.getItem('UserToken');
    if (userToken) {
      this.setState({ StarterScreen: "HomeScreen" });
    } else {
      this.setState({ StarterScreen: "IntroScreen" });
    }
    console.log(this.state.StarterScreen)
  };

  IntroScreen() {
    return (
      <Stack.Navigator initialRouteName="IntroScreen">
        <Stack.Screen name="HomeScreen" options={({ navigation }) => ({
          headerShown: true,
          header: () => <Navbar options={navigation} />
        })} component={Home} />
        <Stack.Screen name="ScheduleScreen" options={({ navigation }) => ({
          headerShown: true,
          header: () => <Navbar options={navigation} />
        })} component={Schedule} />
        <Stack.Screen name="AboutScreen" options={({ navigation }) => ({
          headerShown: true,
          header: () => <Navbar options={navigation} />
        })} component={About} />
        <Stack.Screen name="ContactScreen" options={({ navigation }) => ({
          headerShown: true,
          header: () => <Navbar options={navigation} />
        })} component={Contact} />
        <Stack.Screen name="IntroScreen" options={({ navigation }) => ({ headerShown: false, })} component={Intro} />
        <Stack.Screen name="FormScreen" options={({ navigation }) => ({ headerShown: false, })} component={Form} />
      </Stack.Navigator>
    );
  };

  HomeScreen() {
    return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" options={({ navigation }) => ({
          headerShown: true,
          header: () => <Navbar options={navigation} />
        })} component={Home} />
        <Stack.Screen name="ScheduleScreen" options={({ navigation }) => ({
          headerShown: true,
          header: () => <Navbar options={navigation} />
        })} component={Schedule} />
        <Stack.Screen name="AboutScreen" options={({ navigation }) => ({
          headerShown: true,
          header: () => <Navbar options={navigation} />
        })} component={About} />
        <Stack.Screen name="ContactScreen" options={({ navigation }) => ({
          headerShown: true,
          header: () => <Navbar options={navigation} />
        })} component={Contact} />
        <Stack.Screen name="IntroScreen2" options={({ navigation }) => ({ headerShown: false, })} component={Intro} />
        <Stack.Screen name="FormScreen" options={({ navigation }) => ({ headerShown: false, })} component={Form} />
      </Stack.Navigator>
    );
  };


  render() {
    return (
      <NavigationContainer>
        {this.state.StarterScreen === "HomeScreen" ? this.HomeScreen() : this.IntroScreen()}
      </NavigationContainer>
    );
  }
};

export default App;
