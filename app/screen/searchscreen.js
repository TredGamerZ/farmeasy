import React, { Component } from 'react';
import { NativeModules } from 'react-native';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Divider, Card, SearchBar, Button, Icon } from 'react-native-elements';

class searchScreen extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    constructor(props) {
        super(props);
    }
    render() {
        const { search } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.welText}>Search<Text style={styles.gr}>.</Text>
                </Text>
                <Divider></Divider>
                <SearchBar
                    placeholder="Search Diesease and More"
                    onChangeText={this.updateSearch}
                    value={search}
                    platform="default"
                    lightTheme={true}
                />

                <ScrollView style={{ flex: 1, backgroundColor: "#f1f1f1" }}>

                    <Card
                        title='Bacterial Spot | Bell Pepper | Xanthomonas campestris '
                        image={{ uri: 'bs' }}
                        containerStyle={{ borderRadius: 10 }}
                    >
                        <Text style={{ marginBottom: 20, marginTop: 20, fontSize: 16 }}>
                            Bacterial spot on pepper is caused by the bacterium <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Xanthomonas campestris pv. vesicatoria.</Text> Warm and humid conditions favor the disease.
                            The disease organism can be spread by rain or during overhead irrigation.
                  </Text>
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#5AC46F'
                            buttonStyle={{ borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0., backgroundColor: '#5AC46F' }}
                            title='Learn More' />
                    </Card >
                    <Card
                        title='Early Blight | Potato | Alternaria solani'
                        image={{ uri: 'eb' }}
                        containerStyle={{ borderRadius: 10 }}
                    >
                        <Text style={{ marginBottom: 20, marginTop: 20, fontSize: 16 }}>
                            Early blight of potato is caused by the fungus, <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Alternaria solani</Text>, which can cause disease in potato, tomato, other members of the potato family, and some mustards. This disease, also known as target spot, rarely affects young, vigorously growing plants. It is found on older leaves first. Early blight is favored by warm temperatures and high humidity.
                  </Text>
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#5AC46F'
                            buttonStyle={{ borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0., backgroundColor: '#5AC46F' }}
                            title='Learn More' />
                    </Card >
                    <Card
                        title='Late Blight | Potato | Phytophthora infestans'
                        image={{ uri: 'lb' }}
                        containerStyle={{ borderRadius: 10, marginBottom: 20 }}
                    >
                        <Text style={{ marginBottom: 20, marginTop: 20, fontSize: 16 }}>
                            Late blight of potato is a serious disease caused by, <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Phytophthora infestans</Text>, It affects potato, tomato and, occasionally, eggplant and other members of the potato family. Late blight is the worst potato disease.
                  </Text>
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#5AC46F'
                            buttonStyle={{ borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0., backgroundColor: '#5AC46F' }}
                            title='Learn More' />
                    </Card >
                </ScrollView>


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


export default searchScreen;