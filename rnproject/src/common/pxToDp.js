import { Dimensions } from 'react-native';

//设备宽度、单位dp
const deviceWidthDp = Dimensions.get('window').width;
//设计稿宽度 ， 单位是px
const uiWidthPx = 750;

//px 转 dp（设计稿中的px转rn中的dp

export const pTd = (uiElePx) =>{
    return uiElePx*deviceWidthDp / uiWidthPx;
}