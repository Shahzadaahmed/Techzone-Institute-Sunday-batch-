import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

// Stack navigation...!
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();
// const { Navigator, Screen } = Stack;


// Bottom tabs navigation...!
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTabsStack = createBottomTabNavigator();
const { Navigator, Screen } = BottomTabsStack;

// Note: Import required components...!
import Home from './src/components/home/home';
import About from './src/components/about/about';

import Comments from './src/components/comments/comments';
import Feedback from './src/components/feeedback/feedback';
import Other from './src/components/other/other';

// const App = () => {
//     return (
//         <NavigationContainer>
//             <Navigator screenOptions={{ headerShown: false }}>
//                 <Screen name='home' component={Home} />
//                 <Screen name='about' component={About} />
//             </Navigator>
//         </NavigationContainer>
//     );
// };


const App = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='feedback' component={Feedback} />
                <Screen name='comments' component={Comments} />
                <Screen name='other' component={Other} />
            </Navigator>
        </NavigationContainer>
    );
};


export default App;