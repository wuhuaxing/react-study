/*
 * @Author: your name
 * @Date: 2021-12-16 20:16:48
 * @LastEditTime: 2021-12-27 20:48:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-app\src\router\router.js
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import App from './../App'
import HomePage from './../pages/home' 
import CalcPage from './../pages/calcPage'
import HomeChild1 from './../pages/homeChild1';
import HomeChild2 from './../pages/homeChild2';
import HomeChild3 from './../pages/homeChild3';

const myRouter = () => (
  <Router>
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/homePage" element={<HomePage />}>
          <Route path="/homePage/homeChild1" element={<HomeChild1 />}></Route>
          <Route path="/homePage/homeChild2" element={<HomeChild2 />}></Route>
          <Route path="/homePage/homeChild3" element={<HomeChild3 />}></Route>
        </Route>
        <Route path="/calcPage" element={<CalcPage/>} />
    </Routes>
  </Router>
)

export default myRouter;
