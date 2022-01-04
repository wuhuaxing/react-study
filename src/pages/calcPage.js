/*
 * @Author: your name
 * @Date: 2021-12-16 20:19:17
 * @LastEditTime: 2021-12-16 20:43:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-app\src\pages\homePage\home.js
 */

function CalcPage() {
    function onclickFn () {
        console.log('点了一些')
    }

    return (
        <div className="App">
        <header className="App-header">
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
            <button onClick={onclickFn}>点一下</button>
        </header>
        </div>
    );
}

export default CalcPage;