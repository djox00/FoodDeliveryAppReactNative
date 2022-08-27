import { useEffect, useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MyProfile from '../MyProfile';
import RestaurantsScreen from '../RestaurantsScreen';
import Orders from '../Orders';
import Tools from '../Tools/Tools';
import { collection, getDocs, getFirestore, query, where, doc, getDoc } from '@firebase/firestore';
import { auth } from '../../config/firebase-config';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faGear, faCartShopping, faUtensils } from '@fortawesome/free-solid-svg-icons';




const  BottomTabs = () => {


  const Tab = createMaterialBottomTabNavigator();

const [userType, setuserType] = useState("user"); 

const db  = getFirestore();

const checkUserType =  async ()  =>{

  const user = await getDoc(doc(db,"Users","MVn0Ssw7CXZTalXTsdg6zDfgobm2")); 
  const usertype = await user.data(); 
  setuserType(usertype.user); 

}

useEffect(() => {
  checkUserType(); 
}, [])





  return (
    <Tab.Navigator  initialRouteName="Home"
    activeColor="white"
    inactiveColor="black"
    shifting={true}
    barStyle={{ backgroundColor: '#694fad', }}>
        
    <Tab.Screen name="Restaurants"  options={{tabBarIcon: ()=><FontAwesomeIcon  style={{color: "white"}}  icon={faUtensils} />}} component={RestaurantsScreen} /> 
    <Tab.Screen name="Orders" options={{tabBarIcon: ()=><FontAwesomeIcon  style={{color: "white"}}  icon={faCartShopping} />}} component={Orders} /> 
    {userType == "user" ? <Tab.Screen name="Tools"  options={{tabBarIcon: ()=><FontAwesomeIcon   style={{color: "white"}} icon={faGear} />}}   component={Tools}  /> : null}
    <Tab.Screen name="My profile" options={{tabBarIcon: ()=><FontAwesomeIcon  style={{color: "white"}}  icon={faUser} />}}  component={MyProfile}  /> 
    

    </Tab.Navigator>
  );
}
export default BottomTabs