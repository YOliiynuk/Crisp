import React, {useState} from 'react';
import './Admin.css';
import {SkinOutlined} from "@ant-design/icons";
import {Col, Menu, Row} from "antd";
import AllProducts from "../AllProducts/AllProducts";
import AddProduct from "../AddProduct/AddProduct";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Products', 'products', <SkinOutlined />, [
        getItem('Product', 'all_products', null),
        getItem('Add product', 'add_product', null, null, null),
    ])
];

export const options = [
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
export const optionsColor = [
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

const Admin = () => {
    const [activeKey, setActiveKey] = useState('')
    const onClick = (e) => {
        setActiveKey(e.key)
    };
    function menuRender(key) {
        switch (key) {
            case 'all_products': {
                return <AllProducts/>
            }
            case 'add_product': {
                return <AddProduct/>
            }
        }
    }
    return (
        <Row>
            <Col>
                <Menu
                    onClick={onClick}
                    style={{
                        width: 256,
                    }}
                    mode="inline"
                    items={items}
                />
            </Col>
            <Col style={{padding: "0 50px"}}>
                {
                    menuRender(activeKey)
                }
            </Col>


        </Row>
    );
};

export default Admin;
        