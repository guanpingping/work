import React,{Component} from 'react';
import {View ,Text ,Button} from 'react-native';

class Example extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Button title='上传图片' 
                onPress={()=>{this.props.navigation.navigate('uploadImg')}}/>
                <Button title='预览图片'
                onPress={()=>{this.props.navigation.navigate('PreviewPicture')}}/>
            </View>
        )
    }
}

export default Example;