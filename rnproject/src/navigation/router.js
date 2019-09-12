import Home from '../pages/home';
import Login from '../pages/Login';
import PhoneLogin from '../pages/PhoneLogin';
import Setting from '../pages/setting'


/* 所有的内页 */

const MainPages = {
    Login:{
        screen:Login,
        title:'内页一'
    },
    PhoneLogin:{
        screen:PhoneLogin,
        title:'内页二'
    }
}

/* tab页 */
const TabPages = {
    Home,
    Setting
}

export{
    MainPages,
    TabPages
}