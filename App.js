import React from 'react';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LowerMainScreen from './screens/LowerMainScreen';
import DetailScreen from './screens/DetailScreen';



const Stack = createNativeStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  const nameMap = {
    Home:'홈',
    Search:'검색',
    Notification:'알림',
    Message:'메시지',
  }
  return nameMap[routeName];
}


function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={LowerMainScreen}
          //options={{headerShown: false}} //설정 안하면 두개의 헤더가 나타닌다. 상단 탭 네비게이터 사용할때는 주석처리.
          options={({route})=> ({
            title: getHeaderTitle(route),
          })}
        />
        <Stack.Screen name="Detail" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;