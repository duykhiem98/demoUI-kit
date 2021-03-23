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
  ImageBackground,
  Button,
} from 'react-native';

import styled from 'styled-components';
import { LOCK,EYE,SMS } from './image';
export default class QMK2 extends React.Component {
    render(){
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.Container}>

                <View style={styles.up}>
                    <View style={styles.textcontainer}>
                     <Text style={styles.text1}>Quen mat khau</Text>
                    </View>
                    <View style={styles.textcontainer1}>
                     <Text style={styles.text1}>Buoc:2</Text>
                    </View>
            
                </View>

                <View style={styles.down}>
                    <View style={styles.downcontainer}>
                        <Image source={LOCK} style={{width:15,height:15,}} />
                        <TextInput style={styles.inputext} 
                        placeholder='Nhap mat khau moi'
                        ></TextInput>
                        <TouchableOpacity style={styles.icecontainer}>
                           <Image source={EYE} style={{width:20,height:20,}}></Image>
                         </TouchableOpacity>  
                    </View>
                    
                    <View style={styles.downcontainer1}>
                        <View style={styles.input123}>
                             <Image source={SMS} style={{width:16,height:16}} />
                             <TextInput style={{width:153,height:41}} 
                             placeholder='Nhap ma'
                             keyboardType={'numeric'}>
                              </TextInput>
                        </View>
                        <TouchableOpacity style={styles.gmbutton}>
                             <Text style={styles.buttontitle}>gui lai</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>Con ... OTP se het hieu luc </Text>

                    <TouchableOpacity style={styles.buttonlogin}>
                        <Text style={styles.buttontitle}>Luu mat khau moi</Text>
                    </TouchableOpacity>
                </View>

            </View>

            </TouchableWithoutFeedback>
            
        )
    }
}
const Container=styled.View
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
        paddingHorizontal: 40
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

        marginTop:50,
        borderRadius:30,
        paddingLeft:12

    },
    downcontainer1:{
        flexDirection:'row',
        backgroundColor:"#E2E2E2",
        marginTop:50,
        width:'50%',
        borderRadius:30,
        paddingLeft:12

    },
    input123:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center',
        alignItems:'center'

    },
    buttonlogin:{

        alignItems:"center",
        backgroundColor:'blue',
        marginTop:100,
        padding:20,
        paddingVertical:15,
        borderRadius:50,
    },
    buttontitle:{
        color:'white'

    },
    gmbutton:{
      flexDirection:'row',
      alignItems:'center',
      marginLeft:40,
      paddingHorizontal:25,
      borderRadius:25,
      paddingVertical:15,
     backgroundColor:'#0B597A'
    },
    icecontainer:{
    flexDirection:'column',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingLeft:'45%',

    }, 

})