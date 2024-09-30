import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Predict from './Predict';

const DWLRs = () => {

    const navigation = useNavigation();

    const Dashboard = () => {
        navigation.navigate('Dashboard');
    };
    const Report = () => {
        navigation.navigate('Report');
    };

    const Alerts = () => {
        navigation.navigate('Alerts');
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
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false} >

                    <View style={{ flexDirection: 'row', height: 60, paddingRight: 55 }}>
                        <View style={{ borderRadius: 20, borderColor: '#FED766', width: 100, height: 35.88, left: 13, borderWidth: 2.5, marginLeft: 20, top: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'black', fontFamily: 'Kameron-Medium' }}>ALL</Text>
                        </View>

                        <View style={{ borderRadius: 20, borderColor: '#FED766', width: 100, height: 35.88, left: 14, borderWidth: 2.5, marginLeft: 20, top: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'black', fontFamily: 'Kameron-Medium' }}>No Data</Text>
                        </View>

                        <View style={{ borderRadius: 20, borderColor: '#FED766', width: 129, height: 35.88, left: 14, borderWidth: 2.5, marginLeft: 20, top: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'black', fontFamily: 'Kameron-Medium' }}>Abnormal Data</Text>
                        </View>
                        <View style={{ borderRadius: 20, borderColor: '#FED766', width: 100, height: 35.88, left: 14, borderWidth: 2.5, marginLeft: 20, top: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'black', fontFamily: 'Kameron-Medium' }}>Low Battery</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{marginBottom:85}}>
                    <View style={{ backgroundColor: '#fff', height: 348, width: 315, left: 40, marginTop: 10, borderRadius: 15, elevation: 4, shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>
                        <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#A7F482', alignItems: 'center', justifyContent: 'center', width: 77, height: 25, left: '65%', top: 15 }}>
                            <Text style={{ color: 'black' }}>Active</Text>
                        </TouchableOpacity>
                        <View style={{ paddingHorizontal: 35, paddingVertical: 35 }}>
                            <Text style={{ color: '#000', fontSize: 25, fontFamily: 'Kameron-SemiBold' }}>DWLR ID : 2222222</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >Location</Text>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Kameron-Medium' }}>Last Reported</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >6 hours ago</Text>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Kameron-Medium' }}>Water Level</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >5 min</Text>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Kameron-Medium' }}>Battery</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >50%</Text>
                        </View>
                    </View>

                    {/* 2nd box */}
                    <View style={{ backgroundColor: '#fff', height: 348, width: 315, left: 40, marginTop: 10, borderRadius: 15, elevation: 4, shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>
                        <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#FED766', alignItems: 'center', justifyContent: 'center', width: 77, height: 25, left: '65%', top: 15 }}>
                            <Text style={{ color: 'black' }}>No Data</Text>
                        </TouchableOpacity>
                        <View style={{ paddingHorizontal: 35, paddingVertical: 35 }}>
                            <Text style={{ color: '#000', fontSize: 25, fontFamily: 'Kameron-SemiBold' }}>DWLR ID : 2222222</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >Location</Text>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Kameron-Medium' }}>Last Reported</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >6 hours ago</Text>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Kameron-Medium' }}>Water Level</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >5 min</Text>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Kameron-Medium' }}>Battery</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >50%</Text>
                        </View>

                    </View>
                    
                    {/* 3rd Card */}
                    <View style={{ backgroundColor: '#fff', height: 348, width: 315, left: 40, marginTop: 10, borderRadius: 15, elevation: 4, shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>
                        <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#F4b982', alignItems: 'center', justifyContent: 'center', width: 115, height: 30, left: '55%', top: 15 }}>
                            <Text style={{ color: 'black' }}>Abnormal Data</Text>
                        </TouchableOpacity>
                        <View style={{ paddingHorizontal: 35, paddingVertical: 35 }}>
                            <Text style={{ color: '#000', fontSize: 25, fontFamily: 'Kameron-SemiBold' }}>DWLR ID : 2222222</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >Location</Text>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Kameron-Medium' }}>Last Reported</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >6 hours ago</Text>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Kameron-Medium' }}>Water Level</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >5 min</Text>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Kameron-Medium' }}>Battery</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >50%</Text>
                        </View>



                    </View>
                   
                     {/* 4th Card */}
                     <View style={{ backgroundColor: '#fff', height: 348, width: 315, left: 40, marginTop: 10, borderRadius: 15, elevation: 4, shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>
                        <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#F48282', alignItems: 'center', justifyContent: 'center', width: 105, height: 28, left: '58%', top: 15 }}>
                            <Text style={{ color: 'black' }}>Low Battery</Text>
                        </TouchableOpacity>
                        <View style={{ paddingHorizontal: 35, paddingVertical: 35 }}>
                            <Text style={{ color: '#000', fontSize: 25, fontFamily: 'Kameron-SemiBold' }}>DWLR ID : 2222222</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >Location</Text>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Kameron-Medium' }}>Last Reported</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >6 hours ago</Text>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Kameron-Medium' }}>Water Level</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >5 min</Text>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Kameron-Medium' }}>Battery</Text>
                            <Text style={{ color: '#5b5a5a', fontSize: 12, fontFamily: 'Kameron-SemiBold', marginBottom: 20 }} >50%</Text>
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
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Icon name="tint" size={20} color="#fff" />
                    <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>DWLRS</Text>
                </TouchableOpacity>

                {/* Alert */}
                <TouchableOpacity style={{ alignItems: 'center' }}
                    onPress={Alerts} >
                    <Icon name="exclamation-triangle" size={20} color="#fff" />
                    <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>ALERT</Text>
                </TouchableOpacity>

                {/* Dashboard */}
                <TouchableOpacity style={{ alignItems: 'center' }}
                    onPress={Dashboard} >
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
                 onPress={Predict}>
                    <Icon name="flask" size={20} color="#fff" />
                    <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>Predict</Text>
                </TouchableOpacity>


            </View>

        </View>
    )
}

export default DWLRs

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
})