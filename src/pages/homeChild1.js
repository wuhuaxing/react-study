/*
 * @Author: wuhuaxing
 * @Date: 2021-12-26 11:34:29
 * @LastEditTime: 2021-12-27 23:31:27
 * @Description: 
 */
import React, { useState } from 'react';
import { Form, Input, Button, Timeline } from 'antd';

function HomeChild1() {
    const [result, setResult] = useState('');
    const [projects, setProjects] = useState('');
    const [logText, setLogText] = useState('');


    const splitStringByDate = (str) => {
        const months = ['01', '02','03', '04','05', '06','07', '08', '09', '10', '11', '12'];
        const yearMonths = [];
        const splitStr = '@#*@#*';

        months.forEach((item) => {
            const dateStr = `2021-${item}-01`; // 每个月1号的字符串
            yearMonths.push(`2021-${item}`);
            str = str.replace(dateStr, splitStr);
        })
        const strArr = str.split(splitStr);

        const statStringObj = {};
        yearMonths.forEach((item) => {
            const statStrArr = strArr.filter((s) => {
                return s.includes(item)
            })
            statStringObj[item] = statStrArr[0] || '';
        })
        console.log('替换后的字符串对象', statStringObj);
        return statStringObj;
    }

    /**
     * 统计天数
     * @param {Array} projectArr 需要统计的项目
     * @param {Object} statStringObj 每个月统计的字符串
     */
    const calcProjectDays = (projectArr) => {
        const statStringObj = splitStringByDate(logText)

        const statObj = {
            data: [],
            total: 0
        };
        for (let k in statStringObj) {
            const curMonthStr = statStringObj[k];
            // if (!curMonthStr) {
            //     statObj[k] = {};
            //     continue;
            // }
            const arr = [];
            let monthTotal = 0;
            projectArr.forEach((item) => {
                const reg = new RegExp(item, 'g');
                const count = curMonthStr.match(reg) ? curMonthStr.match(reg).length / 2 : 0;
                arr.push({
                    name: item,
                    count: count
                })
                monthTotal += Number(count);
                statObj.total += Number(count);
            })
            statObj.data.push({
                date: k,
                data: arr,
                total: monthTotal
            });
        }

        return statObj;
    }

    const onclickFn = () => {
        console.log(projects.split('、'));
        const projectArr = projects ? projects.split('、') : [];
        const statResult = calcProjectDays(projectArr)
        setResult(statResult);
        console.log('统计结果result', statResult)
    }

    const { TextArea } = Input;

    return (
        <div className="home-child-page">
            <div className="form-box">
                <Form>
                    <Form.Item>
                        <TextArea placeholder="请输入项目名称，以逗号隔开" value={projects} allowClear onChange={(e) => setProjects(e.target.value)}/>
                    </Form.Item>
                    <Form.Item>
                        <TextArea placeholder="请输入日志文本" value={logText} rows={10} allowClear onChange={(e) => setLogText(e.target.value)}/>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={onclickFn}>计算</Button> 
                    </Form.Item>
                </Form>
            </div>
            <div className="result-box">
                {result.data && result.data.length ? 
                    <Timeline mode="left">
                        {result.data.map((item) => 
                            <Timeline.Item label={item.date} key={item.date}>
                                <div className="month-total">总数：{item.total}</div>
                                {item.data.map((child) => 
                                    <p className="stat-item" key={child.name}>{child.name}: {child.count}</p>
                                )}
                            </Timeline.Item>
                        )}
                    </Timeline>   
                : <div></div>} 
            </div>
        </div>
    );
}

export default HomeChild1;