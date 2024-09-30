import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const Predict = () => {

    const navigation = useNavigation();

    const Dashboard = () => {
      navigation.navigate('Dashboard');
    };
    const Alerts = () => {
      navigation.navigate('Alerts');
    };
    const DWLRs = () => {
      navigation.navigate('DWLRs');
    };
    const Report = () => {
      navigation.navigate('Report');
    };
   
    return (
        <View style={{flex:1}}>
           
            <View style={{ height: 87, width: 360, padding: 17, flexDirection: 'row' }}>
                <Image source={require('./Images/image1.png')} style={{ height: 46, width: 99, }} />
                <Image source={require('./Images/image2.png')} style={{ height: 27, width: 45, left: 140, top: 8 }} />
                <Image source={require('./Images/image3.png')} style={{ height: 30, width: 55, left: 160, top: 8 }} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1,backgroundColor:'#DEFFFC' }} >
                <Text style={{ fontSize: 30, color: 'gray' }}>Coming Soon</Text>
            </View>
            
            <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#274c77',
          paddingVertical: 15,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {/* Dwlrs */}
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={DWLRs}>
          <Icon name="tint" size={20} color="#fff" />
          <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>DWLRS</Text>
        </TouchableOpacity>

        {/* Alert */}
        <TouchableOpacity style={{ alignItems: 'center' }}
          onPress={Alerts}>
          <Icon name="exclamation-triangle" size={20} color="#fff" />
          <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>ALERT</Text>
        </TouchableOpacity>

        {/* Dashboard */}
        <TouchableOpacity style={{ alignItems: 'center' }}
          onPress={Dashboard}>
          <Icon name="th-large" size={20} color="#fff" />
          <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>Dashboard</Text>
        </TouchableOpacity>



        {/* Report */}
        <TouchableOpacity style={{ alignItems: 'center' }}
         onPress={Report} >
          <Icon name="file-text-o" size={20} color="#fff" />
          <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center' }}
        onPress={Predict} >
          <Icon name="flask" size={20} color="#fff" />
          <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>Predict</Text>
        </TouchableOpacity>


      </View>

           
         
        </View>
    )
}

export default Predict

const styles = StyleSheet.create({})