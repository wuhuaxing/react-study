/*
 * @Author: wuhuaxing
 * @Date: 2021-12-07 20:22:46
 * @LastEditTime: 2021-12-26 14:59:54
 * @Description: 
 */
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import logo from './logo.svg';
import './styles/app.css';

const App = () => {
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const submitClick = () => {
    console.log(2333, useNavigate)
    navigate('/homePage/homeChild1')
  }

  return (
    <div className='app-index'>
      <img className='logo' src={logo} alt='logo'></img>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" onClick={submitClick}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;