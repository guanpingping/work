
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'
import TabNavigator from './tabNavigation';

import {MainPages} from './router';

// console.log(...TabNavigator)
// const MainNavigation = ()=>{
//     const MainNavigationJson = {};
//     for( var key in MainPages){
//         MainNavigationJson[key] = {
//             screen: MainPages[key]['screen'],
//             navigationOptions: {title: MainPages[key]['title']}
//         }
//         console.log(MainNavigationJson)
//     }
//     return MainNavigationJson;
// }
const generateMainNavigation = () => {
    const mainNavigationJson = {};
    for(var key in MainPages){
        mainNavigationJson[key] = {
            screen:MainPages[key].screen,
            navigationOptions:{
                title:MainPages[key].title
            }
        }
    }
    return mainNavigationJson;
}
const SketchRouter = createStackNavigator(
    {
        TabNavigator:{
            screen:TabNavigator,
            navigationOptions:{
                header:null
            }
        },
        ...generateMainNavigation(),
        initalRouteName:'TanNavigator'
    },
    {
        headerBackTitleVisible: false
    }
)

export default createAppContainer(SketchRouter);