import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {pTd} from '../common/myCommon';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <SafeAreaView style={styles.contaner}>
                <View style={styles.box}>
                    <Text style={styles.tit}>客户</Text>
                    <View style={styles.cons}>
                        <Text style={styles.con}>菩提本无树，明镜亦非台。本来无一物，何处惹尘埃？</Text>
                    </View>
                </View>
                <StatusBar barStyle="dark-content" />
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('PhoneLogin')}}
                    style={styles.test}>
                    <Text style={{fontSize:18}}>点击跳转</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    box:{
        flexDirection:'row',
        backgroundColor:'skyblue',
        marginBottom:pTd(50),
        width:pTd(560),
        justifyContent:'space-between',
        paddingLeft:pTd(20),
        paddingRight:pTd(20)
    },
    tit:{
        marginRight:pTd(30)
    },
    cons:{
        flex:1,
        // justifyContent:'flex-end',
        alignItems:'flex-end'
        // flexDirection:'row'
    },
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
        backgroundColor: '#0f0'
    }
});