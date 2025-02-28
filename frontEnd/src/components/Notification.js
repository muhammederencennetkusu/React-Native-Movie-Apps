import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Notification = ({ item }) => {

    const history = useNavigation();
    return (
        <TouchableOpacity onPress={()=>  history.navigate('slideDetails',{id:item.id})} style={style.movies_container}>
            <View style={style.image_style}>
            <View style={style.category_container}>
            <Text style={style.category_title}>{item.badge}</Text>
            </View>
            <View style={style.star_container}>
            <Text style={style.star_title}>{item.star}</Text>
            </View>
            <Image source={{ uri: item.image }} style={style.movies_image} />
            </View>
            <View style={style.movies_detail}>
            <Text style={style.movies_title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
};



const style = StyleSheet.create({

    movies_container: {
        width:320,
        margin:10,
        padding:5

    },
    movies_image: {
        width: '100%',
        height: 200,
        borderRadius:5,

    },
    image_style: {
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 18,
        },
        shadowOpacity:  0.25,
        shadowRadius: 20.00,
        elevation: 24,
        width:'100%',
        height:200
    },
    movies_detail:{
       position:'absolute',
       bottom:5,
       width:'100%',
       left:5,
       height:'30',
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#000000a8'
    },
    movies_title:{
        textAlign:'center',
        fontSize:14,
        fontWeight:'700',
        color:'white'
    },
    category_container:{
        position:'absolute',
        zIndex:9999,
        left:5,
        top:5,
        backgroundColor:'#000000a8'
    },
    category_title:{
        color:'white',
        fontSize:12,
        padding:5,
        fontWeight:'700'

    },
    star_container:{
        position:'absolute',
        zIndex:9999,
        right:5,
        top:5,
        width:30,
        height:30,
        borderRadius:100,
        backgroundColor:'tomato',
        justifyContent:'center',
        alignItems:'center'
    },
    star_title:{
        color:'white',
        fontSize:12,
        padding:5,
        fontWeight:'700',
        
    }


});


export default Notification;