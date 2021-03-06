/**
 * main.js
 * @authors binghongcha (hblvsjtu@163.com)
 * @date    2019-11-24 15:21:01
 * @version 0.0.1
 */
import {join} from 'lodash-es';
import './style/index.less';

const component = () => {
    const element = document.createElement('div');
    element.id = 'hello';
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    return element;
};

document.body.appendChild(component());

console.log('hello, i am consolelog');

export default class MyModele {
    constructor(a) {
        this.a = a;
    }
}
