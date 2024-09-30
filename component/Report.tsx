import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Modal, FlatList, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icons from 'react-native-vector-icons/MaterialIcons';


const Report = () => {
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
 
  const Predict = () => {
    navigation.navigate('Predict');
  };
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handleStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartPicker(false);
    setStartDate(currentDate);
  };

  const handleEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndPicker(false);
    setEndDate(currentDate);
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


  return (
    <View style={styles.container}>
      <View style={{ height: 87, width: 360, padding: 17, flexDirection: 'row' }}>
        <Image source={require('./Images/image1.png')} style={{ height: 46, width: 99, }} />
        <Image source={require('./Images/image2.png')} style={{ height: 27, width: 45, left: 140, top: 8 }} />
        <Image source={require('./Images/image3.png')} style={{ height: 30, width: 55, left: 160, top: 8 }} />
      </View>
      <View style={{ backgroundColor: '#DEFFFC', position: 'relative', flex: 1 }}>
        <ScrollView style={{ backgroundColor: '#DEFFFC', flex: 1 }}>
          <View style={{ marginBottom: 85 }}>
            <ScrollView style={{ backgroundColor: '#fff', height: 378, width: 330, left: 33, marginTop: 35, borderRadius: 15, elevation: 10, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}
              nestedScrollEnabled={true}>
              {/* First notification component */}
              <View style={{ backgroundColor: '#fff', height: 90, width: 289, left: 20, marginTop: 25, borderRadius: 15, elevation: 20, shadowOffset: { width: 8, height: 4 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>

                <View style={{ top: 15, left: 50 }}>
                  <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Kameron-SemiBold', marginBottom: 5 }}>DWLRs ID</Text>
                  <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>Problem</Text>
                  <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>explain in one line</Text>

                </View>
                <Image source={require('./Images/image6.png')} style={{ top: -49, left: 180 }} />
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#274c77', justifyContent: 'center', alignItems: 'center', width: 75, height: 35, top: -110, left: 200 }}>
                  <Text style={{ color: 'white' }}>Download</Text>
                </TouchableOpacity>

              </View>

              {/* Second notification */}

              <View style={{ backgroundColor: '#fff', height: 90, width: 289, left: 20, marginTop: 25, borderRadius: 15, elevation: 20, shadowOffset: { width: 8, height: 4 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>

                <View style={{ top: 15, left: 50 }}>
                  <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Kameron-SemiBold', marginBottom: 5 }}>DWLRs ID</Text>
                  <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>Problem</Text>
                  <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>explain in one line</Text>

                </View>
                <Image source={require('./Images/image6.png')} style={{ top: -49, left: 180 }} />
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#274c77', justifyContent: 'center', alignItems: 'center', width: 75, height: 35, top: -110, left: 200 }}>
                  <Text style={{ color: 'white' }}>Download</Text>
                </TouchableOpacity>

              </View>

              {/* Thid notification */}
              <View style={{ backgroundColor: '#fff', height: 90, width: 289, left: 20, marginTop: 25, borderRadius: 15, elevation: 20, shadowOffset: { width: 8, height: 4 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>

                <View style={{ top: 15, left: 50 }}>
                  <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Kameron-SemiBold', marginBottom: 5 }}>DWLRs ID</Text>
                  <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>Problem</Text>
                  <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>explain in one line</Text>

                </View>
                <Image source={require('./Images/image6.png')} style={{ top: -49, left: 180 }} />
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#274c77', justifyContent: 'center', alignItems: 'center', width: 75, height: 35, top: -110, left: 200 }}>
                  <Text style={{ color: 'white' }}>Download</Text>
                </TouchableOpacity>

              </View>

              {/* Fourth notification  */}
              <View style={{ backgroundColor: '#fff', height: 90, width: 289, left: 20, marginTop: 25, borderRadius: 15, elevation: 20, shadowOffset: { width: 8, height: 4 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>

                <View style={{ top: 15, left: 50 }}>
                  <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Kameron-SemiBold', marginBottom: 5 }}>DWLRs ID</Text>
                  <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>Problem</Text>
                  <Text style={{ fontSize: 10, color: '#4e4e4e', fontFamily: 'Kameron-SemiBold' }}>explain in one line</Text>

                </View>
                <Image source={require('./Images/image6.png')} style={{ top: -49, left: 180 }} />
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#274c77', justifyContent: 'center', alignItems: 'center', width: 75, height: 35, top: -110, left: 200 }}>
                  <Text style={{ color: 'white' }}>Download</Text>
                </TouchableOpacity>

              </View>
            </ScrollView>
            {/* Download */}

            <View style={{ backgroundColor: '#fff', height: 578, width: 330, left: 33, marginTop: 25, padding: 25, borderRadius: 15, elevation: 10, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.3, shadowRadius: 2.41, }}>
              <Text style={{ color: 'black', fontFamily: 'Kameron-SemiBold', fontSize: 16, fontWeight: 'bold' }}>Download data</Text>


              <Text style={{ color: 'black', fontFamily: 'Kameron-SemiBold', marginTop: 25, fontWeight: 'bold', fontSize: 16 }}>Select Start Date</Text>
              <View style={{ borderRadius: 10, height: 45, width: 290, borderColor: 'gray', borderWidth: 1 }}>
                <Text style={{ color: 'black', marginTop: 10, marginLeft: 15 }}>{startDate ? startDate.toLocaleDateString() : "dd-mm-yyyy"}</Text>
                <TouchableOpacity onPress={() => setShowStartPicker(true)}>
                  <Icon name="calendar" size={20} color="#000" style={{ top: -15, left: 250 }} />
                </TouchableOpacity>
              </View>


              <Text style={{ color: 'black', fontFamily: 'Kameron-SemiBold', marginTop: 25, fontSize: 16, fontWeight: 'bold' }}>Select End Date</Text>
              <View style={{ borderRadius: 10, height: 45, width: 290, borderColor: 'gray', borderWidth: 1 }}>
                <Text style={{ color: 'black', marginTop: 10, marginLeft: 15 }}>{endDate ? endDate.toLocaleDateString() : "dd-mm-yyyy"}</Text>
                <TouchableOpacity onPress={() => setShowEndPicker(true)}>
                  <Icon name="calendar" size={20} color="#000" style={{ top: -15, left: 250 }} />
                </TouchableOpacity>
              </View>

              <Text style={{ color: 'black', fontFamily: 'Kameron-SemiBold', marginTop: 25, fontSize: 16, fontWeight: 'bold' }}>Select State</Text>
              <View style={{ borderRadius: 10, height: 45, width: 290, borderColor: 'gray', borderWidth: 1 }}>
                <TouchableOpacity onPress={() => setModalVisible1(true)}>
                  <Text style={{ color: 'black', margin: 10 }}>{selectedState1 || 'Choose State'}</Text>

                  <Icons name="arrow-drop-down" size={32} color="#000" style={{ marginLeft: 250, top: -30 }} />
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
              </View>


              <Text style={{ color: 'black', fontFamily: 'Kameron-SemiBold', marginTop: 25, fontSize: 16, fontWeight: 'bold' }}>Select District</Text>
              <View style={{ borderRadius: 10, height: 45, width: 290, borderColor: 'gray', borderWidth: 1 }}>
                <TouchableOpacity onPress={() => setModalVisible2(true)}>
                  <Text style={{ color: 'black', margin: 10 }}>{selectedState2 || 'Choose District'}</Text>

                  <Icons name="arrow-drop-down" size={32} color="#000" style={{ marginLeft: 250, top: -30 }} />
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
              </View>

              
              
              <Text style={{ color: 'black', fontFamily: 'Kameron-SemiBold', marginTop: 25, fontSize: 16, fontWeight: 'bold' }}>Select City</Text>
              <View style={{ borderRadius: 10, height: 45, width: 290, borderColor: 'gray', borderWidth: 1 }}>
                <TouchableOpacity onPress={() => setModalVisible3(true)}>
                  <Text style={{ color: 'black', margin: 10 }}>{selectedState3 || 'Choose a City'}</Text>

                  <Icons name="arrow-drop-down" size={32} color="#000" style={{ marginLeft: 250, top: -30 }} />
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

              <TouchableOpacity style={{ borderRadius: 15, backgroundColor: '#274C77', marginTop: 15, height: 40, }}>

                <Text style={{ color: '#fff', marginLeft: 120, marginTop: 10, fontFamily: 'Kameron-SemiBold', }}>Download</Text>
              </TouchableOpacity>
            </View>
            {/* Date Picker Modals */}
            {showStartPicker && (
              <DateTimePicker
                value={startDate}
                mode="date"
                display="default"
                onChange={handleStartDateChange}
              />
            )}
            {showEndPicker && (
              <DateTimePicker
                value={endDate}
                mode="date"
                display="default"
                onChange={handleEndDateChange}
              />
            )}
          </View>
        </ScrollView>
      </View >
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
        >
          <Icon name="file-text-o" size={20} color="#fff" />
          <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center' }}
        onPress={Predict} >
          <Icon name="flask" size={20} color="#fff" />
          <Text style={{ color: '#fff', marginTop: 5, fontFamily: 'Kameron-SemiBold', fontSize: 12 }}>Predict</Text>
        </TouchableOpacity>


      </View>

    </View >
  )
}

export default Report

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    marginTop:220
  },
  modalItemText: {
    fontSize: 18,
    color: '#000',
  },
  modalItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
})