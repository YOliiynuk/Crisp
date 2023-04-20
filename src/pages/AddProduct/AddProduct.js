import React from 'react';
import './AddProduct.css';
import {Button, Form, Input, Checkbox, Space, InputNumber} from "antd";
import {useDispatch} from "react-redux";
import {createProduct} from "../../redux/actions";

const options = [
    {
        label: 'osfa',
        value: 'osfa',
    },
    {
        label: 'w26',
        value: 'w26',
    },
    {
        label: 'w27',
        value: 'w27',
    },
    {
        label: 'w28',
        value: 'w28',
    },
    {
        label: 'w29',
        value: 'w29',
    },
    {
        label: 'w30',
        value: 'w30',
    },
    {
        label: 'w31',
        value: 'w31',
    },
    {
        label: 'w32',
        value: 'w32',
    },
    {
        label: 'w33',
        value: 'w33',
    },
    {
        label: 'w34',
        value: 'w34',
    },
    {
        label: 'w35',
        value: 'w35',
    },
    {
        label: 'w36',
        value: 'w36',
    },
    {
        label: 'w38',
        value: 'w38',
    },
    {
        label: 'w40',
        value: 'w40',
    },
    {
        label: 'w42',
        value: 'w42',
    },
    {
        label: 'w44',
        value: 'w44',
    },
    {
        label: 'w46',
        value: 'w46',
    },
    {
        label: 'w48',
        value: 'w48',
    },
    {
        label: 'w50',
        value: 'w50',
    },
    {
        label: 'w52',
        value: 'w52',
    },
];
const optionsColor = [
    {
        label: '#292A2D',
        value: '#292A2D',
    },
    {
        label: '#F3ECE2',
        value: '#F3ECE2',
    },
    {
        label: '#24426A',
        value: '#24426A',
    },
    {
        label: '#18574A',
        value: '#18574A',
    },
    {
        label: '#666689',
        value: '#666689',
    },
    {
        label: '#C2BEB6',
        value: '#C2BEB6',
    },
    {
        label: '#AAABA7',
        value: '#AAABA7',
    },
    {
        label: '#971E34',
        value: '#971E34',
    },
    {
        label: '#CBA13E',
        value: '#CBA13E',
    },
    {
        label: '#73513C',
        value: '#73513C',
    },
    {
        label: '#DAB1B1',
        value: '#DAB1B1',
    },
    {
        label: '#2B9FA7',
        value: '#2B9FA7',
    },
];


const AddProduct = () => {
    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(createProduct(values))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="addProduct"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="color"
                name="color"
                rules={[
                    {
                        required: true,
                        type: "array",
                        message: 'Please select color!',
                    },
                ]}
            >
                <Checkbox.Group>
                    <Space wrap={true}>
                        {
                            optionsColor.map((value) => <Checkbox key={value.value} style={{backgroundColor: value.value}} value={value.value}>
                                {value.value}
                            </Checkbox>)
                        }
                    </Space>
                </Checkbox.Group>
            </Form.Item>
            <Form.Item
                label="size"
                name="size"
                rules={[
                    {
                        required: true,
                        type: "array",
                        message: 'Please select size!',
                    },
                ]}
            >
                <Checkbox.Group>
                    <Space wrap={true}>
                        {
                            options.map((value) => <Checkbox key={value.value} value={value.value}>
                                {value.label}
                            </Checkbox>)
                        }
                    </Space>
                </Checkbox.Group>
            </Form.Item>
            <Form.Item
                label="price"
                name="price"
                rules={[
                    {
                        required: true,
                        message: 'Please input price!',
                    },
                ]}
            >
                <InputNumber addonAfter={'€'} min={0}/>
            </Form.Item>
            <Form.Item
                label="sale"
                name="sale"
                rules={[
                    {
                        required: true,
                        message: 'Please input sale!',
                    },
                ]}
                initialValue={0}
            >
                <InputNumber addonAfter={'%'} min={0} max={100}/>
            </Form.Item>
            <Form.Item
                label="image"
                name="image"
                rules={[
                    {
                        required: true,
                        message: 'Please input your image!',
                    },
                ]}
            >
                <Input addonAfter={'url'}/>
            </Form.Item>


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddProduct;
        