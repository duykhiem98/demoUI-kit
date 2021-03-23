
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
import styled from "styled-components/native";
import {IC_USER,HOME,LOCK,EYE,LINE} from './image';
import QMK1 from './QMK1';

const login = ()=>{
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SView>
       <StyledViewup>
         <Image source={require('../image/123.png')} />
       </StyledViewup>
       
       <SViewdown>
         <Sh1>
           <Image style={{width: 24, height: 24}} source={HOME}/>
           <Stext placeholder='Chon cong ty'></Stext>
         </Sh1>

         <Sh1>
           <Image style={{width:24,height:24}} source={IC_USER} />
           <Stext placeholder='Ten su dung'></Stext>
         </Sh1>
        <Sh1>
          <Image style={{width:13,height:13,alignItems:'flex-start'}} source={LOCK} />
           <Stext placeholder='Nhap mat khau'secureTextEntry={true}></Stext>
           <STO1>
             <Image source={EYE} style={{width:15,height:15,}}></Image>
           </STO1>
         </Sh1>
         <STO2 onPress={() => {
            navigation.navigate("QMK1")
           }}>
           <Stext1>Quen mat khau?</Stext1>
         </STO2>
         <ST03 onPress={() => {
            navigation.navigate("mainscreens")
           }}>
           <Stext2>Dang nhap</Stext2>
         </ST03>
       </SViewdown>
    </SView>
   </TouchableWithoutFeedback>
  
  )
}
const MainStack = createStackNavigator();
function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="QMK1" component={QMK1} />
    </MainStack.Navigator>
  );
}


export default login;
const SView = styled.View`
   flex:1;
   flex-direction:column;
   background-color:white;
`;

const StyledViewup = styled.View`
  flex:3;
  flex-direction:column;
  align-items: center;
  justify-content: flex-end;
`;

// tu gio trở đi gõ nó sẽ gợi ý rồi nhé 
// nhớ là các biến sẽ ko có dấu phảy trên nữa nhé

// ok giờ sửa lại đi a xem

// ddùng styled sẽ ko có paddingHorizontal và paddingVertical nữa nhé 
// muốn dùng paddingHorizontal <=> padding: 0 20px 
// a giải thích cái padding bên html: padding: top right bottom left
// => TH ở dưới làm như này 

const SViewdown = styled.View`
   flex:7;
   flex-direction:column;
   justify-content:flex-start;
   align-items:center;
   padding: 0 40px;
`; // hoac padding: 0 40px 0 40px
// ok chưa 
const Sh1=styled.View`
   flex-direction: row;
    align-items: center;
    margin-top:30px;
    width: 100%;
    background-color:#E2E2E2;
    border-radius:30px;
    padding-left:12px;
    padding-right:12px;
`;

// để a giải thích lại nhé
// padding: là viết tắt của 4 cái: padding-left, padding-right, padding-bottom, padding-top
// nên e cũng có thể viết padding-left:0; ....
// padding: 0 0 0 12px; <=> padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 12px;
// đó nghiên cứu nhé
const Stext = styled.TextInput`
   width:280px;
   height:41px;
`;

const STO1=styled.TouchableOpacity`
  align-items:flex-end;

`;

const STO2=styled.TouchableOpacity`
  margin-top:30px;
  justify-content:center;
  align-items:center;
  background-color: white;
  padding:12px 20px;
  border-radius: 8px;
`; // ok nhớ các giá trị phải có px ở cuối nhé

const Stext1=styled.Text`
  color:#AEAEAE;
`;

const ST03 =styled.TouchableOpacity`
  margin-top:50px;
  justify-content:center;
  align-items:center;
  background-color: #1BA7DB;
  padding:12px 20px;
  border-radius: 8px;
  `;

const Stext2=styled.Text`
  color:#fff;
`;

// cac bien du lieu ko can phai cho vao ngoac 


/*
const styles = StyleSheet.create({
  Container: {
    flex:1,
    flexDirection:'column',
    backgroundColor:'white',
  },
  up:{
    flex:2,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-end'
  },
  down:{
    flex:7,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingHorizontal: 40
  },
  inputcontainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:30,
    width: '100%',
    backgroundColor:"#E2E2E2",
    borderRadius: 30,
    paddingLeft: 12,
    paddingRight:12
  },
  textInput:{
    width:280,
    height:41,
  },
  button:{
    marginTop:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  buttontitle:{
    color:'#AEAEAE',
  },
  buttonlogin:{
    marginTop:70,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#1BA7DB',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  buttontitle1:{
   color:'#fff'
  },
 
});
*/