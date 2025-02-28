import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Data from '../Data/movies.json'
import Flim from "../components/Flim";
import Notification from "../components/Notification";
import NotificationData from "../Data/notification.json";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { API_URL } from "../Config/Constants";
import { Alert } from "react-native";

const renderItem = ({ item }) => {
    return <Flim item={item} />
}




const renderNotification = ({ item }) => {
    return <Notification item={item} />
}

function HomeScreen() {

    const [movies, setMovies] = useState([]);
    const [notification, setNotification] = useState([]);
    let moviess = [];



    useEffect(() => {
        axios.get(`${API_URL}/home`).then((result) => {
            if (result.data.status) {
                setMovies(result.data.data.movies);
                setNotification(result.data.data.notifications);
            } else {
                Alert(result.data.message);
            }
        });
    });

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={style.header}>
                    <Text style={style.header_title}>MOVIES</Text>
                    <Icon name="search" size={20} />
                </View>
                <FlatList
                    style={{ flex: 1 }}
                    data={notification}
                    renderItem={renderNotification}
                    showsVerticalScrollIndicator={false}
                    horizontal
                />
                <Text style={style.header_films}>FILMS</Text>
                <View style={style.movies_body} >
                    <FlatList
                        style={{ flex: 1 }}
                        numColumns={2}
                        data={movies}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}
const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center'

    },
    header_title: {
        fontSize: 15,
        fontWeight: 700
    },
    header_films: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight: '700'
    },
    movies_body: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flex: 1
    }
});
export default HomeScreen;