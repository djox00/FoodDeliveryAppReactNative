import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MyProfile from '../MyProfile';
import Restaurants from '../Restaurants';
import Orders from '../Orders';
const Tab = createMaterialBottomTabNavigator();

const  BottomTabs = () => {
  return (
    <Tab.Navigator  initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}>
        
    <Tab.Screen name="Restaurants" component={Restaurants} />
    <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="My profile"  component={MyProfile}  />
    </Tab.Navigator>
  );
}
export default BottomTabs