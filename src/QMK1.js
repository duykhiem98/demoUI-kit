import React,{Component} from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Platform,
  Keyboard,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QMK2 from './QMK2';
import { PAD} from './image';
const QMK1 = () => {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.Container}>
            <View style={styles.up}>
                <View style={styles.textcontainer}>
                 <Text style={styles.text1}>Quen mat khau</Text>
                </View>
                <View style={styles.textcontainer1}>
                 <Text style={styles.text1}>Buoc1</Text>
                </View>
        
            </View>

            <View style={styles.down}>
                <View style={styles.downcontainer}>
                    <Image source={PAD} style={{width:16,height:16}} />
                    <TextInput style={styles.inputext} 
                    placeholder='nhap so dien thoai'
                    keyboardType={'numeric'}
                    ></TextInput>
                </View>
                <TouchableOpacity style={styles.buttonlogin} onPress={ () =>{
                     navigation.navigate("QMK2")
                }}>
                    <Text style={styles.buttontitle}>Tiep tuc</Text>
                </TouchableOpacity>
            </View>

        </View>

        </TouchableWithoutFeedback>
        
    )
}
export default QMK1;
const MainStack = createStackNavigator();
function MainStackScreen() {
    return (
      <MainStack.Navigator>
        <MainStack.Screen name="QMK1" component={QMK1} />
        <MainStack.Screen name="QMK2" component={QMK2} />
      </MainStack.Navigator>
    );
  }

const styles = StyleSheet.create({
    Container: {
      flex:1,
      flexDirection:'column',
      backgroundColor:'white',
    },
    up:{
        flex:3,
        justifyContent:'flex-end',

    },
    down:{
        flex:7,
        flexDirection:'column',
        alignItems:'center',
        paddingHorizontal:40,
    },

    textcontainer:{
        flexDirection:'column',
        alignItems:"center",
        marginBottom:20
   

    },
    textcontainer1:{
        flexDirection:'column',
        alignItems:"center",
   

    },
    downcontainer:{
        flexDirection:'row',
        alignContent:'flex-start',
        alignItems:'center',
        backgroundColor:"#E2E2E2",
        width:'100%',
        marginTop:50,
        borderRadius:30,
        paddingLeft:12

    },
    text1:{
        fontSize:16,
    },
  
    inputext:{

    },
    buttonlogin:{
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'blue',
        marginTop:200,
        paddingHorizontal:50,
        paddingVertical:15,
        borderRadius:25


    },
    buttontitle:{
        color:'white'

    }

})