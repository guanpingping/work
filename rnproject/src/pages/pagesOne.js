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

export default class PagesOne extends React.Component {
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
                        <Text style={styles.con}>二额外若翁热无热无额外若翁认为热无热无若翁热无热无若</Text>
                    </View>
                </View>
                <StatusBar barStyle="dark-content" />
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('pagesEr')}}
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