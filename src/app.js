/**
 * Created by liqin on 2017/9/15.
 */
import nav from './components/nav.js'// 引入模块

import {firstName,lastName,year} from './components/const.js'

/*引入一个模块时候，名字要和导出模块名字相同*/
import { city, Counter } from './components/a.js';

nav();//执行

function setName(){
    console.log(firstName+","+lastName+","+year);
}
setName();

console.log(city);//执行另一个模块里面声明的变量和函数
console.log(Counter())