import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal, FlatList, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { PieChart } from "react-native-chart-kit";
import Predict from './Predict';
// import Svg, { Circle, Rect } from 'react-native-svg';

// data for piechart
const data = [
  {
    name: "Active",
    population: 320,
    color: "#F765A3",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Total",
    population: 123,
    color: "#165BAA",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Probelematic",
    population: 785,
    color: "#16BFD6",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  
];

const Dashboard = () => {

  const navigation = useNavigation();

  const DWLRs = () => {
    navigation.navigate('DWLRs');
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

  const [selectedState1, setSelectedState1] = useState('');
  const [selectedState2, setSelectedState2] = useState('');
  const [selectedState3, setSelectedState3] = useState('');
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const states = [
    { label: 'Select State', value: '' },
    { label: 'West Bengal', value: 'West Bengal' },
    { label: 'Odisha', value: 'Odisha' },
    { label: 'Tripura', value: 'Tripura' },
  ];

  const districts = [
    { label: 'Select District', value: '' },
    { label: 'Alipurduar', value: 'Alipurduar' },
    { label: 'Bankura', value: 'Bankura' },
    { label: 'Birbhum', value: 'Birbhum' },
    { label: 'Cooch Behar', value: 'Cooch Behar' },
    { label: 'South Dinajpur', value: 'South Dinajpur' },
    { label: 'Darjeeling', value: 'Darjeeling' },
    { label: 'Hooghly', value: 'Hooghly' },
    { label: 'Howrah', value: 'Howrah' },
    { label: 'Jalpaiguri', value: 'Jalpaiguri' },
    { label: 'Jhargram', value: 'Jhargram' },
    { label: 'Kalimpong', value: 'Kalimpong' },
    { label: 'Kolkata', value: 'Kolkata' },
    { label: 'Malda', value: 'Malda' },
    { label: 'Nadia', value: 'Nadia' },
    { label: 'Paschim Bardhaman', value: 'Paschim Bardhaman' },
    { label: 'Purba Bardhaman', value: 'Purba Bardhaman' },
    { label: 'Paschim Medinipur', value: 'Paschim Medinipur' },
    { label: 'Purba Medinipur', value: 'Purba Medinipur' },
    { label: 'Purulia', value: 'Purulia' },
    { label: 'North 24 Parganas', value: 'North 24 Parganas' },
    { label: 'South 24 Parganas', value: 'South 24 Parganas' },
    { label: 'Uttar Dinajpur', value: 'Uttar Dinajpur' },
  ];

  const city = [
    { label: 'Select City', value: '' },
    { label: 'Bolpur', value: 'Bolpur' },
    { label: 'Santiniketan', value: 'Santiniketan' },
    { label: 'Rampurhat', value: 'Rampurhat' },
    { label: 'Nalhati', value: 'Nalhati' },
    { label: 'Dubrajpur', value: 'Dubrajpur' },
    { label: 'Sainthia', value: 'Sainthia' },
    { label: 'Rajnagar', value: 'Rajnagar' },
    { label: 'Khayrasol', value: 'Khayrasol' },
    { label: 'Labpur', value: 'Labpur' },
    { label: 'Mayureswar', value: 'Mayureswar' },
    { label: 'Nanoor', value: 'Nanoor' },
    { label: 'Illambazar', value: 'Illambazar' },
    { label: 'Tarapith', value: 'Tarapith' },
    { label: 'Hetampur', value: 'Hetampur' },
  ];
  const handleSelectState = (setSelectedState, setModalVisible, itemValue) => {
    setSelectedState(itemValue);
    setModalVisible(false);
  };

  const { width: screenWidth } = useWindowDimensions();
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 87, width: 360, padding: 17, flexDirection: 'row' }}>
        <Image source={require('./Images/image1.png')} style={{ height: 46, width: 99, }} />
        <Image source={require('./Images/image2.png')} style={{ height: 27, width: 45, left: 140, top: 8 }} />
        <Image source={require('./Images/image3.png')} style={{ height: 30, width: 55, left: 160, top: 8 }} />
      </View>
      <View style={{ backgroundColor: '#DEFFFC', position: 'relative', flex: 1 }}>
        <ScrollView>
          <View style={{ marginBottom: 85 }}>
            <View style={styles.statePickerContainer}>

              <TouchableOpacity onPress={() => setModalVisible1(true)} style={styles.selectButton}>
                <Text style={styles.selectButtonText}>{selectedState1 || 'SELECT STATE'}</Text>
                <Icons name="arrow-drop-down" size={24} color="#000" style={styles.dropdownIcon} />
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
                onRequestClose={() => setModalVisible1(false)}
              >
                <View style={styles.modalView}>
                  <FlatList
                    data={states}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleSelectState(setSelectedState1, setModalVisible1, item.value)} style={styles.modalItem}>
                        <Text style={styles.modalItemText}>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </Modal>


              <TouchableOpacity onPress={() => setModalVisible2(true)} style={styles.selectButton}>
                <Text style={styles.selectButtonText}>{selectedState2 || 'SELECT DISTRICT'}</Text>
                <Icons name="arrow-drop-down" size={24} color="#000" style={styles.dropdownIcon} />
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => setModalVisible2(false)}
              >
                <View style={styles.modalView}>
                  <FlatList
                    data={districts}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleSelectState(setSelectedState2, setModalVisible2, item.value)} style={styles.modalItem}>
                        <Text style={styles.modalItemText}>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </Modal>


              <TouchableOpacity onPress={() => setModalVisible3(true)} style={styles.selectButton}>
                <Text style={styles.selectButtonText}>{selectedState3 || 'SELECT CITY'}</Text>
                <Icons name="arrow-drop-down" size={24} color="#000" style={styles.dropdownIcon} />
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible3}
                onRequestClose={() => setModalVisible3(false)}
              >
                <View style={styles.modalView}>
                  <FlatList
                    data={city}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleSelectState(setSelectedState3, setModalVisible3, item.value)} style={styles.modalItem}>
                        <Text style={styles.modalItemText}>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </Modal>
            </View>

            <View style={{ backgroundColor: '#fff', height: 348, width: 325, left: 40, marginTop: 10, borderRadius: 15, elevation: 4, shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2.41, paddingLeft: 45, paddingTop: 29 }}>
              <Text style={styles.dataText}>TOTAL DWLRs</Text>
              <Text style={{ color: 'black', fontFamily: 'Kameron-SemiBold', fontSize: 42, left: 75, marginBottom: 15 }}>200</Text>

              <Text style={styles.dataText}>ACTIVE DWLRs</Text>
              <Text style={{ color: 'black', fontFamily: 'Kameron-SemiBold', fontSize: 42, left: 75, marginBottom: 15 }}>170</Text>

              <Text style={{ color: 'black', fontFamily: 'Kameron-SemiBold', fontSize: 24 }}>PROBLEMATIC DWLR</Text>
              <Text style={{ color: 'black', fontFamily: 'Kameron-SemiBold', fontSize: 42, left: 95, marginBottom: 15 }}>30</Text>
            </View>

            {/* ekhane pie chart dhokabe tarpor icon  debe */}
            <View style={{ backgroundColor: '#fff', height: 348, width: 325, left: 40, marginTop: 10, borderRadius: 15, elevation: 4, shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2.41, paddingLeft: 30, paddingTop: 29 }}>
              <Text style={{ color: 'black', fontSize: 18 }}>State Name</Text>
              <Text style={{ color: 'black', fontSize: 18 }}>City Name</Text>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ borderRadius: 10, width: 48, height: 40, backgroundColor: '#defffc', alignItems: 'center', justifyContent: 'center', left: '55%', top: -40, marginRight: 10 }}>
                  <Image source={require('./Images/image8.png')} />
                </View>

                <View style={{ borderRadius: 10, width: 48, height: 40, backgroundColor: '#defffc', alignItems: 'center', justifyContent: 'center', left: '55%', top: -40 }}>
                  <Image source={require('./Images/image9.png')} />
                </View>
              </View>
              {/* Pie Chart */}
              <View style={{ marginTop: 3 }}>
              <PieChart
                data={data}
                width={screenWidth - 50}
                height={200}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"-8"}
                center={[10, 5]}
                hasLegend={false} 
                absolute={false}
              />
              </View>
              <View style={{ flexDirection: 'column', left: '62%', top: -178 }}>
                <View style={{ height: 14, width: 28, backgroundColor: '#165baa' }}></View>
                <Text style={{ color: 'black', left: 35, top: '-20%' }}>Total</Text>
                <View style={{ height: 14, width: 28, backgroundColor: '#F765A3' }}></View>
                <Text style={{ color: 'black', left: 35, top: '-19%' }}>Active</Text>
                <View style={{ height: 14, width: 28, backgroundColor: '#16BFD6' }}></View>
                <Text style={{ color: 'black', left: 35, top: '-17%' }}>Problematic</Text>
              </View>
            </View>
            {/* Pie chart section2 */}
            <View style={{ backgroundColor: '#fff', height: 348, width: 325, left: 40, marginTop: 10, borderRadius: 15, elevation: 4, shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2.41, paddingLeft: 30, paddingTop: 29 }}>
              <Text style={{ color: 'black', fontSize: 18 }}>State Name</Text>
              <Text style={{ color: 'black', fontSize: 18 }}>City Name</Text>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ borderRadius: 10, width: 48, height: 40, backgroundColor: '#defffc', alignItems: 'center', justifyContent: 'center', left: '55%', top: -40, marginRight: 10 }}>
                  <Image source={require('./Images/image8.png')} />
                </View>

                <View style={{ borderRadius: 10, width: 48, height: 40, backgroundColor: '#defffc', alignItems: 'center', justifyContent: 'center', left: '55%', top: -40 }}>
                  <Image source={require('./Images/image9.png')} />
                </View>
              </View>
              {/* Pie Chart */}
              <View style={{ marginTop: 3 }}>
              <PieChart
                data={data}
                width={screenWidth - 50}
                height={200}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"-8"}
                center={[10, 5]}
                hasLegend={false} 
                absolute={false}
              />
              </View>
              <View style={{ flexDirection: 'column', left: '62%', top: -178 }}>
                <View style={{ height: 14, width: 28, backgroundColor: '#165baa' }}></View>
                <Text style={{ color: 'black', left: 35, top: '-20%' }}>Total</Text>
                <View style={{ height: 14, width: 28, backgroundColor: '#F765A3' }}></View>
                <Text style={{ color: 'black', left: 35, top: '-19%' }}>Active</Text>
                <View style={{ height: 14, width: 28, backgroundColor: '#16BFD6' }}></View>
                <Text style={{ color: 'black', left: 35, top: '-17%' }}>Problematic</Text>
              </View>
            </View>
            {/* last box */}
            <View style={{ backgroundColor: '#fff', height: 348, width: 325, left: 40, marginTop: 10, borderRadius: 15, elevation: 4, shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2.41, paddingLeft: 30, paddingTop: 29 }} >
              <View style={{ borderRadius: 10, backgroundColor: '#274c77', height: 45, width: 90, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: '#fff', fontFamily: 'Kameron-Medium', fontSize: 18 }}>Alert</Text></View>
                    <Image source={require('./Images/Vector.png')} style={{ top:-50,left:80}}/>

            </View>
          </View>
        </ScrollView>
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
        >
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

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  statePickerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 10,
  },
  selectButton: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 20,
  },

  selectButtonText: {
    color: '#000',
    flex: 1,
  },
  dropdownIcon: {
    marginLeft: 10,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  modalItemText: {
    fontSize: 18,
    color: '#000',
  },
  dataContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 30,
  },
  dataText: {
    fontSize: 32,
    fontFamily: 'Kameron-SemiBold',
    color: '#000',


  },


})