import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from '@react-navigation/native';


let ScreenHeight = Dimensions.get("window").height;

const Landing = () => {
    const navigation = useNavigation();

    const Dashboard = () => {
        navigation.navigate('Dashboard');
      };
    return (
        <View >
            <View style={{ height: 87, width: 360, padding: 17, flexDirection: 'row' }}>
                <Image source={require('./Images/image1.png')} style={{ height: 46, width: 99, }} />
                <Image source={require('./Images/image2.png')} style={{ height: 27, width: 45, left: 140, top: 8 }} />
                <Image source={require('./Images/image3.png')} style={{ height: 30, width: 55, left: 160, top: 8 }} />
            </View>
            <View>
                <Image
                    source={require('./Images/gradient.png')}
                    style={{ height: '100%', width: '100%', resizeMode: 'cover', zIndex: 1, position: 'relative' }} />
                <View style={{ zIndex: 2, position: 'absolute' }}>

                    <View style={{ zIndex: 2, position: 'absolute', justifyContent: 'center', alignItems: 'center', }}>
                        <MaskedView maskElement={
                            <View style={{ flexDirection: 'column', paddingBottom: 2 }}>
                                <Text style={{ fontSize: 60, fontFamily: 'Kameron-SemiBold', width: 401, height: 214, left: 80, }}>  DWLRs</Text>
                                <Text style={{ fontSize: 60, fontFamily: 'Kameron-SemiBold', width: 401, height: 214, left: 70, top: -155 }}>MONITOR</Text>
                            </View>
                        }>
                            <LinearGradient
                                colors={['#274C77', '#488DDD']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{ width: 580, height: 250 }}

                            >
                                <Text style={[{ opacity: 0, fontSize: 32 }]}>APP</Text>
                                <Text style={[{ opacity: 0, fontSize: 32 }]}>Name</Text>
                            </LinearGradient>
                        </MaskedView>

                    </View>

                    <Text style={{ fontSize: 12, fontFamily: 'Kameron-SemiBold', color: '#274C77', textAlign: 'center', marginHorizontal: 70, marginVertical: 150, width: 249, height: 85, }}>
                        A software application for analysis of DWLR data and raise alarms in respect of anomalous values, faulty DWLRs etc
                    </Text>

                    <TouchableOpacity style={{ width: 100, height: 38, borderRadius: 22, backgroundColor: '#DEFFFC', justifyContent: 'center', alignItems: 'center', top: -150, left: 140 }}
                      onPress={Dashboard}>
                        <Text style={{ color: '#274c77', fontFamily: 'Kameron-SemiBold', fontSize: 16 }}>LOGIN</Text>
                    </TouchableOpacity>

                    <View style={{  position: 'relative', top: -125,left:45, }}>
                        <Image source={require('./Images/image4.png')} />
                        <View style={{flexDirection:'row',position:'absolute',marginTop:15,marginLeft:20}}>
                            <View style={{ alignItems: 'center', }}>
                                <Text style={{ fontSize: 24, color: '#fff', }}>14000</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Kameron-SemiBold', color: '#fff', marginTop: 15, }}>Total DWLRS</Text>
                            </View>
                            <Image source={require('./Images/image5.png')} style={{top:-13,marginHorizontal:15}}/>
                            <View style={{ alignItems: 'center', }}>
                                <Text style={{ fontSize: 24,  color: '#fff', }}>14000</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Kameron-SemiBold', color: '#fff', marginTop: 15, }}>Active</Text>
                            </View>
                            <Image source={require('./Images/image5.png')} style={{top:-13,marginHorizontal:15}}/>
                            <View style={{ alignItems: 'center', }}>
                                <Text style={{ fontSize: 24,  color: '#fff', }}>14000</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Kameron-SemiBold', color: '#fff', marginTop: 15, }}>Problematic</Text>
                            </View>
                        </View>
                    </View>
                    <Image source={require('./Images/india.png')} style={{top:-90,left:90,}}/>
                </View>
            </View>
        </View >
    )
}

export default Landing

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: ScreenHeight,

    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        backgroundColor: '#F1F9FF',
        borderRadius: 15,
        paddingVertical: 20,
        marginBottom: 30,
    },
})