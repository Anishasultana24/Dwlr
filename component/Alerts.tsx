import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert, Platform, PermissionsAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

import { WebView } from 'react-native-webview';
type LocationType = {
  latitude: number;
  longitude: number;
};


const Alerts = () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState<LocationType | null>(null);
  const [permissionGranted, setPermissionGranted] = useState(true);

  const DWLRs = () => {
    navigation.navigate('DWLRs');
  };
  const Dashboard = () => {
    navigation.navigate('Dashboard');
  };

  const Report = () => {
    navigation.navigate('Report');
  };

  const Predict = () => {
    navigation.navigate('Predict');
  };








  return (
    <View style={styles.container}>
      <View style={{ height: 87, width: 360, padding: 17, flexDirection: 'row' }}>
        <Image source={require('./Images/image1.png')} style={{ height: 46, width: 99, }} />
        <Image source={require('./Images/image2.png')} style={{ height: 27, width: 45, left: 140, top: 8 }} />
        <Image source={require('./Images/image3.png')} style={{ height: 30, width: 55, left: 160, top: 8 }} />
      </View>

      <ScrollView style={{ backgroundColor: '#DEFFFC', flex: 1 }}>
        <View style={{ marginBottom: 85 }}>
          <View style={{ backgroundColor: '#fff', height: 378, width: 330, left: 33, marginTop: 25, borderRadius: 15, elevation: 10, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>
            {/* First notification component */}
            <View style={{ backgroundColor: '#fff', height: 90, width: 289, left: 20, marginTop: 25, borderRadius: 15, elevation: 20, shadowOffset: { width: 8, height: 4 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>
              <Icon name="bell" size={23} color="#f48383" style={{ top: 30, left: 13 }} />

              <View style={{ top: -10, left: 50 }}>
                <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Kameron-SemiBold', marginBottom: 5 }}>DWLRs ID</Text>
                <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>Problem</Text>
                <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>explain in one line</Text>

              </View>
              <Image source={require('./Images/image6.png')} style={{ top: -69, left: 180 }} />
              <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#274c77', justifyContent: 'center', alignItems: 'center', width: 68, height: 31, top: -143, left: 207 }}>
                <Text style={{ color: 'white' }}>Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#274c77', justifyContent: 'center', alignItems: 'center', width: 68, height: 31, top: -132, left: 207 }}>
                <Text style={{ color: 'white' }}>Hide</Text>
              </TouchableOpacity>
            </View>

            {/* Second notification component */}
            <View style={{ backgroundColor: '#fff', height: 90, width: 289, left: 20, marginTop: 25, borderRadius: 15, elevation: 20, shadowOffset: { width: 8, height: 4 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>
              <Icon name="bell" size={23} color="#f48383" style={{ top: 30, left: 13 }} />

              <View style={{ top: -10, left: 50 }}>
                <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Kameron-SemiBold', marginBottom: 5 }}>DWLRs ID</Text>
                <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>Problem</Text>
                <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>explain in one line</Text>

              </View>
              <Image source={require('./Images/image6.png')} style={{ top: -69, left: 180 }} />
              <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#274c77', justifyContent: 'center', alignItems: 'center', width: 68, height: 31, top: -143, left: 207 }}>
                <Text style={{ color: 'white' }}>Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#274c77', justifyContent: 'center', alignItems: 'center', width: 68, height: 31, top: -132, left: 207 }}>
                <Text style={{ color: 'white' }}>Hide</Text>
              </TouchableOpacity>
            </View>

            {/* Third notification component */}
            <View style={{ backgroundColor: '#fff', height: 90, width: 289, left: 20, marginTop: 25, borderRadius: 15, elevation: 20, shadowOffset: { width: 8, height: 4 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>
              <Icon name="bell" size={23} color="#f48383" style={{ top: 30, left: 13 }} />

              <View style={{ top: -10, left: 50 }}>
                <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Kameron-SemiBold', marginBottom: 5 }}>DWLRs ID</Text>
                <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>Problem</Text>
                <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>explain in one line</Text>

              </View>
              <Image source={require('./Images/image6.png')} style={{ top: -69, left: 180 }} />
              <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#274c77', justifyContent: 'center', alignItems: 'center', width: 68, height: 31, top: -143, left: 207 }}>
                <Text style={{ color: 'white' }}>Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#274c77', justifyContent: 'center', alignItems: 'center', width: 68, height: 31, top: -132, left: 207 }}>
                <Text style={{ color: 'white' }}>Hide</Text>
              </TouchableOpacity>
            </View>

          </View>

          {/* DWLR Details Component */}
          <View style={{ backgroundColor: '#fff', height: 450, width: 330, left: 33, marginTop: 25, borderRadius: 15, elevation: 10, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>
            <Text style={{ color: 'black', fontFamily: 'Kameron-SemiBold', fontSize: 22, top: 15, left: 15 }}>DWLR ID:222222</Text>
            <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold', top: 15, left: 15 }}>Location: Sample Location</Text>
            <Text style={{ fontSize: 15, color: '#000', fontFamily: 'Kameron-SemiBold', top: 32, left: 15 }}>Last Reported</Text>
            <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold', top: 32, left: 15 }}>6 hours ago</Text>
            <Text style={{ fontSize: 15, color: '#000', fontFamily: 'Kameron-SemiBold', top: 49, left: 15 }}>Water Level</Text>
            <Text style={{ fontSize: 12, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold', top: 47, left: 15 }}>5 m</Text>
            <Text style={{ fontSize: 15, color: '#000', fontFamily: 'Kameron-SemiBold', top: 59, left: 15 }}>Battery</Text>
            <Text style={{ fontSize: 12, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold', top: 59, left: 15 }}>50%</Text>

              {/* Map View */}
            <View style={styles.locationContainer}>
              <Image source={require('./Images/image10.png')}/>
            </View>

          </View>
        </View>
      </ScrollView>

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
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Icon name="exclamation-triangle" size={20} color="#fff" />
          <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>ALERT</Text>
        </TouchableOpacity>

        {/* Dashboard */}
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={Dashboard}>
          <Icon name="th-large" size={20} color="#fff" />
          <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>Dashboard</Text>
        </TouchableOpacity>

        {/* Report */}
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={Report}>
          <Icon name="file-text-o" size={20} color="#fff" />
          <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center' }} onPress={Predict}>
          <Icon name="flask" size={20} color="#fff" />
          <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>Predict</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Alerts

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  locationContainer: {
    backgroundColor: '#fff',
    height: 230,
    width: 320,
    top: 80,
    borderRadius: 15,

    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: 'yellow',
    borderWidth: 2

  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  locationDetails: {
    fontSize: 14,
    color: '#333',
  },
  webview: {
    width: '100%',
    height: '100%', // Adjust height as needed
  },
});
function _getLocationPermission() {
  throw new Error('Function not implemented.');
}

function _getCurrentLocation() {
  throw new Error('Function not implemented.');
}

