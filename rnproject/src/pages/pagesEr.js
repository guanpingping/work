/* 横向滑动 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {pTd} from '../common/myCommon';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';

export default class PagesEr extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            label1: ['Tab1', 'Tab2','Tab3','Tab4','Tab5','Tab6','Tab7','Tab8'],
        }
    }
    render() {
        let {label1} = this.state;
        return (
            <SafeAreaView style={styles.contaner}>
                {/* <StatusBar barStyle="dark-content" />
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}
                    style={styles.test}>
                    <Text style={{fontSize:18}}>点击跳转</Text>
                </TouchableOpacity> */}
                <ScrollableTabView
                    scrollWithoutAnimation={true}   //视图切换是否有动画
                    renderTabBar={() => <ScrollableTabBar/>}>
                        {
                            label1.map((item, index) => {
                                return (
                                    <View tabLabel={item} key={index} style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                                        <Text>{item}</Text>
                                        <Text>{'ScrollableTabBar'}</Text>
                                    </View>
                                )
                            })
                        }
                </ScrollableTabView>
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