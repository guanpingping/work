import React from 'react';
import { Text, View } from 'react-native';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';

/* 
ScrollableTabBar：Tab可以超过屏幕范围，滚动可以显示。
DefaultTabBar：Tab会平分在水平方向的空间。 
*/
class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            label1: ['Tab1', 'Tab2','Tab3','Tab4','Tab5','Tab6','Tab7','Tab8'],
        }
    }
    render() {
        let {label1} = this.state;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
                {/* <Text
                    onPress={()=>{this.props.navigation.navigate('Login')}}
                >去页面一</Text> */}
            </View>
        );
    }
}
export default HomeScreen;