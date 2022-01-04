/*
 * @Author: your name
 * @Date: 2021-12-07 20:22:46
 * @LastEditTime: 2021-12-26 13:35:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-app\src\index.js
 */
// import React from 'react';
import ReactDOM from 'react-dom';
import 'element-theme-default';
import 'antd/dist/antd.css';
import myRouter from './router/router';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  myRouter(),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
