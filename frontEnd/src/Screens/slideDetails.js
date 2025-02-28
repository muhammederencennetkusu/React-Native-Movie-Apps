import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, BackHandler, Modal } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Data from '../Data/notification.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';

const MoviesDetails = ({ route, navigation }) => {
    const { id } = route.params;
    const item = Data.find(movie => movie.id == id);

    if (!item) {
        return (
            <SafeAreaView>
                <Text>Movie not found</Text>
            </SafeAreaView>
        );
    }

    const [isModalVisible, setModalVisible] = useState(false);
    const videoRef = useRef(null);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const onBuffer = () => {
        console.log("Video buffering...");
    };

    const onError = (error) => {
        console.error("Video error:", error);
    };

    useEffect(() => {
        const onBackPress = () => {
            if (isModalVisible) {
                setModalVisible(false);
                return true;
            }
            return false;
        };

        const backHandler = BackHandler.addEventListener("hardwareBackPress", onBackPress);

        return () => {
            backHandler.remove();
        };
    }, [isModalVisible]);

    return (
        <SafeAreaView>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.moviesDetailsHeader}>
                    <Image source={{ uri: item.image }} style={styles.moviesImage} />
                    <View style={styles.imageOverlay}></View>
                    <View style={styles.imageHeader}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="chevron-left" size={15} style={{ color: 'white' }} />
                                <Text style={{ color: 'white', marginLeft: 10, fontWeight: '700' }}>Back</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="share" size={15} style={{ color: 'white' }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.headerPlays}>
                    <TouchableOpacity onPress={toggleModal}>
                        <Icon name="play" size={15} style={{ color: 'white' }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.detailsLowerImage}>
                    <Image source={{ uri: item.image }} style={styles.lowerImg} />
                    <Text style={styles.moviesName}>{item.name}</Text>
                    <View style={styles.detailsInformation}>
                        <View style={styles.informationRow}>
                            <Icon name="street-view" size={15} style={{ color: 'tomato' }} />
                            <Text style={styles.directorName}>{item.director}</Text>
                        </View>
                        <View style={styles.informationRow}>
                            <Icon name="folder" size={15} style={{ color: 'tomato' }} />
                            <Text style={styles.directorName}>{item.category}</Text>
                        </View>
                        <View style={styles.informationRow}>
                            <Icon name="bell" size={15} style={{ color: 'tomato' }} />
                            <Text style={styles.directorName}>{item.time}</Text>
                        </View>
                        <View style={styles.informationRow}>
                            <Icon name="star" size={15} style={{ color: 'tomato' }} />
                            <Text style={styles.directorName}>{item.star}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.informationDescription}>
                    <Text style={styles.informationText}>{item.title}</Text>
                </View>
            </ScrollView>

            <Modal visible={isModalVisible} transparent={true} animationType="slide"  onRequestClose={toggleModal}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                        <Icon name="times-circle" style={styles.modalClose} />
                    </TouchableOpacity>
                    {item.video ? (
                        <Video
                            source={{ uri: item.video }}
                            ref={videoRef}
                            onBuffer={onBuffer}
                            onError={onError}
                            style={styles.backgroundVideo}
                            controls
                            resizeMode="contain"
                        />
                    ) : (
                        <Text style={styles.errorText}>Video not available</Text>
                    )}
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    moviesDetailsHeader: {
        width: '100%',
        height: 300,
        flexDirection: 'row',
    },
    moviesImage: {
        width: '100%',
        height: '100%',
    },
    imageOverlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#0d0d0db5'
    },
    imageHeader: {
        width: '100%',
        padding: 10,
        position: 'absolute',
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerPlays: {
        width: 40,
        height: 40,
        borderRadius: 100,
        position: 'absolute',
        top: '20%',
        left: '47%',
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsLowerImage: {
        width: 100,
        height: 130,
        bottom: 50,
        left: 20,
        flexDirection: 'row'
    },
    lowerImg: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    moviesName: {
        width: 200,
        marginLeft: 30,
        fontSize: 15,
        color: 'white',
        fontWeight: '700',
    },
    detailsInformation: {
        position: 'absolute',
        left: 110,
        top: 60
    },
    informationRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    directorName: {
        marginLeft: 5
    },
    informationDescription: {
        paddingHorizontal: 20,
        marginBottom: 20
    },
    informationText: {
        color: '#0d0d0dc2',
        fontSize: 18,
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#11161da1',
        padding: 20
    },
    modalClose: {
        position: 'absolute',
        top: -20,
        right: -155,
        fontSize: 25,
        color: 'white',
        zIndex:999999
    },
    backgroundVideo: {
        width: '100%',
        height: '200',
        zIndex:1,
        
        
    }
});

export default MoviesDetails;
