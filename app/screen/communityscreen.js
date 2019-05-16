import React, { Component } from 'react';
import { NativeModules } from 'react-native';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, TouchableHighlight, FlatList, Image } from 'react-native';
import { Divider, ListItem, Card, Button, Icon, Badge, } from 'react-native-elements';

class communityScreen extends Component {

    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welText}>Community<Text style={styles.gr}>.</Text>
                </Text>
                <Divider></Divider>
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            topDivider={true}
                            bottomDivider={true}
                            title=
                            {item.question}
                            subtitle={
                                <View style={{ flex: 1, alignContent: "flex-start", flexDirection: 'row' }}>

                                    <Text style={{ marginRight: 10 }}>{item.author}</Text>
                                    <Badge style={{ marginLeft: 20 }} status="primary" value={item.value}></Badge>
                                </View>
                            }
                            leftAvatar={{
                                size: "large",
                                source: item.avatar_url && { uri: item.avatar_url },
                                title: item.author[0]
                            }}
                            titleStyle={{ fontSize: 18, color: "#333" }}

                        />
                    ))
                }

            </View >
        )
    };
}
const img1 = 'https://d3qz1qhhp9wxfa.cloudfront.net/growingproduce/wp-content/uploads/2016/03/Bacterial-spot-symptoms-on-pepper-leaves-for-web.jpg';
const list = [
    {
        author: 'Rohan Raj',
        subtitle: 'Vice President',
        avatar_url: 'http://www.omafra.gov.on.ca/IPM/images/potatoes/diseases/late-blight/potato_late-blight_07_zoom.jpg',
        image: 'http://www.omafra.gov.on.ca/IPM/images/potatoes/diseases/late-blight/potato_late-blight_07_zoom.jpg',
        question: 'What diesease is this? Please help?',
        value: '2 answers'

    },
    {
        author: 'Rajat Singh',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajGdr-Sl0sSPIluVPQH2Z1kONLDH5T5Umei1njhHqs4XlwBJ9',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        image: 'eb',
        question: 'My potatoes have early blight? What should i do?',
        value: '4 answers'
    },
    {
        author: 'Mahesh Singh',
        avatar_url: 'https://extension.umn.edu/sites/extension.umn.edu/files/styles/caption_medium/public/late-blight-plant-tomato.jpg?itok=01j0Q1Zu',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        image: 'eb',
        question: 'I think my field have some kind of diesease need help?',
        value: '3 answers'
    },

]
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

export default communityScreen;