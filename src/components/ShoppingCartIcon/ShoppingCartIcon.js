import React from 'react';
import './ShoppingCartIcon.css';
import {Space, Typography} from "antd";
import {ShoppingOutlined} from "@ant-design/icons";


const ShoppingCartIcon = (props) => {
    return (
        <Space className={'shoppingCartIcon'}>
            <ShoppingOutlined />
            <div className={'shoppingCartIconContent'}>
                <Typography.Text className={'shoppingCartIconContentTopItem'}>Shopping Cart</Typography.Text>
                <Typography.Text className={'shoppingCartIconContentBottomItem'}>{props.eur.toFixed(2)} EUR</Typography.Text>
            </div>
        </Space>
    );
};
ShoppingCartIcon.defaultProps = {
    eur : 0.00,
};

export default ShoppingCartIcon;
        