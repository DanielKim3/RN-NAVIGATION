import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

function OpenDetailButton() {
    const navigation = useNavigation();

    return (
        <Button 
            title="Detail 열기"
            onPress={() => navigation.push('Detail', {id:1})}
        />
    )
}

function HomeScreen ({navigation}) {   

    return(
        <View>
            <Text>Home</Text>            
            <OpenDetailButton />                  
        </View>

    );
}

function SearchScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}

function NotificationScreen() {
    return (
        <View>
            <Text>Notification</Text>
        </View>
    );  
}

function MessageScreen() {
    return (
        <View>
            <Text>Message</Text>
        </View>
    );     
}



function UpperMainScreen() {
    return(
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                showIcon: true,
            }}
            >
        <Tab.Screen
         name="Home"
         component={HomeScreen}
         options={{           
           tabBarIcon: ({color}) => 
             <Icon name="home" color={color} size={24}/>,
             tabBarColor: 'black',
             tabBarBadge: 'new',     
         }}
          />

        <Tab.Screen
         name="Search"
         component={SearchScreen}
         options={{          
            tabBarIcon: ({color}) => 
             <Icon name="search" color={color} size={24}/>, 
             tabBarColor: 'black'
         }}
         />
        
        <Tab.Screen 
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({color}) => 
             <Icon name="notifications" color={color} size={24}/>, 
             tabBarColor: 'black',
             tabBarBadge: 30,
        }}
        />

        <Tab.Screen 
          name="Message" 
          component={MessageScreen}
          options={{
            tabBarIcon: ({color}) => 
             <Icon name="message" color={color} size={24}/>,  
             tabBarColor: 'black',
             tabBarBadge: true,
          }}
        />
        </Tab.Navigator>
    )
}

export default UpperMainScreen;