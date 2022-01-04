/*
 * @Author: your name
 * @Date: 2021-12-16 20:19:17
 * @LastEditTime: 2021-12-27 20:52:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-app\src\pages\homePage\home.js
 */
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import {
    Outlet
} from 'react-router-dom';
import './../styles/home.css';

function HomePage() {
    const { Header } = Layout;
    const navigate = useNavigate();

    const navClick = (item) => {
        console.log('navClick', item)
        navigate(`/homePage/homeChild${item.key}`)
    }
    
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" 
                      mode="horizontal"
                      defaultSelectedKeys={['1']}
                      onClick={navClick}>
                    <Menu.Item key="1">chidlPage-1</Menu.Item>
                    <Menu.Item key="2">chidlPage-2</Menu.Item>
                    <Menu.Item key="3">chidlPage-3</Menu.Item>
                </Menu>
            </Header>
            <div className="home-router-view">
                <Outlet/>
            </div>
        </Layout>
    );
}

export default HomePage;