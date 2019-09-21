import Home from '../pages/home';
import pagesOne from '../pages/pagesOne';
import pagesEr from '../pages/pagesEr';
import Setting from '../pages/setting';
import Example from '../pages/example';
import uploadImg from '../pages/uploadImg';
import PreviewPicture from '../pages/previewpictures';
/* 所有的内页 */

const MainPages = {
    pagesOne:{
        screen:pagesOne,
        title:'内页一'
    },
    pagesEr:{
        screen:pagesEr,
        title:'内页二'
    },
    uploadImg:{
        screen:uploadImg,
        title:'上传图片'
    },
    PreviewPicture:{
        screen:PreviewPicture,
        title:'预览图片'
    }
}

/* tab页 */
const TabPages = {
    Home,
    Setting,
    Example
}

export{
    MainPages,
    TabPages
}