import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BoxShadow } from 'react-native-shadow';
import { Avatar, Badge, withBadge } from 'react-native-elements'


class homeScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (<View style={styles.container}>

      <Text style={styles.welcomeText}>FarmEasy<Text style={styles.welText}>.</Text></Text>

      {/* <Text style={styles.SupportText}>Shazam for Things.</Text> */}
      {/* <View style={{ flex: 3 }}>
        <Image
          source={{ uri: 'seething01' }}
          style={{ width: 410, height: 410, marginLeft: '2%', marginTop: '2%' }}
        />
      </View> */}
      <View style={{ flex: 1, marginTop: 20, alignItems: "flex-start", alignSelf: "flex-start", flexDirection: "row", marginLeft: 10, marginRight: 10 }}>
        <View style={{ flex: 1, margin: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              alignItems: 'center',
              justifyContent: 'center',

              height: 120,
              borderRadius: 8,
              elevation: 10,
              marginBottom: '1%',

            }}
            onPress={() => {
              this.props.navigation.navigate('Learn');
            }

            }
          >
            <Image
              source={{ uri: 's2' }}
              style={{ width: 24, height: 24, marginLeft: '2%', marginTop: '2%' }}
            />
            <Text style={{
              fontFamily: 'Roboto',
              color: '#333',
              fontWeight: 'bold',
              fontSize: 18,
            }}>Learn</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, margin: 10 }}>

          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              alignItems: 'center',
              justifyContent: 'center',

              height: 120,
              borderRadius: 8,
              elevation: 10,
              marginBottom: '1%',

            }}
            onPress={() => {
              this.props.navigation.navigate('Camera');
            }}
          >
            <Image
              source={{ uri: 's3' }}
              style={{ width: 26, height: 29, marginLeft: '2%', marginTop: '2%' }}
            />
            <Text style={{
              fontFamily: 'Roboto',
              color: '#333',
              fontWeight: 'bold',
              fontSize: 18,
            }}>Search</Text>
          </TouchableOpacity>
        </View>
      </View><View style={{ flex: 1, alignItems: "flex-start", alignSelf: "flex-start", flexDirection: "row", marginLeft: 10, marginRight: 10 }}>
        <View style={{ flex: 1, margin: 10 }}>

          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              alignItems: 'center',
              justifyContent: 'center',

              height: 120,
              borderRadius: 8,
              elevation: 10,
              marginBottom: '1%',

            }}
            onPress={() => {
              this.props.navigation.navigate('Camera');
            }

            }
          >
            <Image
              source={{ uri: 's4' }}
              style={{ width: 32, height: 29, marginLeft: '2%', marginTop: '2%' }}
            />
            <Text style={{
              fontFamily: 'Roboto',
              color: '#333',
              fontWeight: 'bold',
              fontSize: 18,
            }}>Community</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, margin: 10 }}>

          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              alignItems: 'center',
              justifyContent: 'center',

              height: 120,
              borderRadius: 8,
              elevation: 10,
              marginBottom: '1%',

            }}
            onPress={() => {
              this.props.navigation.navigate('Camera');
            }}
          >
            <Image
              source={{ uri: 's1' }}
              style={{ width: 30, height: 30, marginLeft: '2%', marginTop: '2%' }}
            />
            <Text style={{
              fontFamily: 'Roboto',
              color: '#333',
              fontWeight: 'bold',
              fontSize: 18,
            }}>Help</Text>
          </TouchableOpacity>
        </View>
      </View>



      <View style={{ flex: 2, alignItems: "center", alignSelf: 'center', justifyContent: "flex-end" }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#5AC46F',
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 60,
            borderRadius: 100,
            marginBottom: '1%'
          }}
          onPress={() => {
            this.props.navigation.navigate('Camera');
          }

          }
        >
          <Image
            source={{ uri: 'leaf' }}
            style={{ width: 30, height: 30, marginLeft: '2%', marginTop: '2%' }}
          />
        </TouchableOpacity>
        <Text style={{ marginBottom: '7%', fontFamily: 'Roboto', fontWeight: 'normal', fontSize: 17, }}>Tap to start Classifying</Text>
      </View>
    </View>
    );
  }
  static navigationOptions = {
    header: null
  }
}
const shadowOpt = {
  width: 160,
  height: 170,
  color: "#000",
  border: 2,
  radius: 3,
  opacity: 0.2,
  x: 0,
  y: 3,
  style: { marginVertical: 5 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  welText: {
    color: '#5AC46F',
    fontFamily: 'RobotoBold',
    fontWeight: 'bold',
    fontSize: 60,
  },
  welcomeText: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: '0%',
    marginLeft: '8%',
    fontFamily: 'Roboto',
    color: '#333',
    fontWeight: 'bold',
    fontSize: 35,
  },
  SupportText: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: '5%',
    fontFamily: 'RobotoBold',
    fontWeight: 'bold',
    fontSize: 19,
  },
});

export default homeScreen;