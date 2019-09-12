import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {pTd} from '../common/myCommon'
export default class PhoneLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <SafeAreaView style={styles.contaner}>
                <StatusBar barStyle="dark-content" />
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}
                    style={styles.test}>
                    <Text style={{fontSize:18}}>点击跳转</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    contaner: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    test:{
        width: pTd(150),
        height: pTd(150),
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#f00'
    }
});