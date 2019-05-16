import React, { Component } from 'react';
import { NativeModules } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Divider, Card } from 'react-native-elements';

class learnScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welText}>Learn<Text style={styles.gr}>.</Text>
                </Text>
                <Divider></Divider>

                <View style={{ flex: 2, margin: '8%' }}>
                    <Text style={styles.ptext}>Welcome to FarmEasy learning repository. </Text>
                </View>

                <Card
                    title='HELLO WORLD'
                    image={{ uri: 's2' }}>
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                      </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card >
            </View>


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


export default learnScreen;