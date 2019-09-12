import React from 'react';
import { Text, View } from 'react-native';

class HomeScreen extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Text
                    onPress={()=>{this.props.navigation.navigate('Login')}}
                >去页面一</Text>
            </View>
        );
    }
}
export default HomeScreen;