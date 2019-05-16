import React, { Component } from 'react';
import { NativeModules } from 'react-native';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Divider, Card, Button, Icon } from 'react-native-elements';

class helpScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welText}>Help<Text style={styles.gr}>.</Text>
                </Text>
                <Divider></Divider>


                <View style={{ margin: '8%' }}>
                    <Text style={styles.ptext}>Thanks for using FarmEasy. We are here to help! </Text>
                </View>



            </View >


        )
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    welText: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',

        marginBottom: '3%',
        marginLeft: '8%',
        fontFamily: 'Roboto',
        color: '#333',
        fontWeight: 'bold',
        fontSize: 25,
    },
    ptext: {
        fontFamily: 'Roboto',
        color: '#333',
        fontWeight: 'normal',
        fontSize: 18,
    },
    gr: {
        color: '#5AC46F',
        fontFamily: 'RobotoBold',
        fontWeight: 'bold',
        fontSize: 40,
    }
});


export default helpScreen;