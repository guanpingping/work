import React from 'react';
import {View,Text,Button} from 'react-native';

class SettingsScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <Button 
                onPress={this.toGo.bind(this)}
                title="跳转到页面一"
                />
            </View>
        );
    }
    toGo(){
        this.props.navigation.navigate("pagesOne")
    }
}
export default SettingsScreen;