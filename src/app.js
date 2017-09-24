/**
 * Created by liqin on 2017/9/15.
 */
import nav from './components/nav.js'// 引入模块

import {firstName,lastName,year} from './components/const.js'

nav();//执行

function setName(){
    console.log(firstName+","+lastName+","+year);
}
setName();