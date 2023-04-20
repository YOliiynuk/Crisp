import React, {useEffect} from "react";
import './App.css';
import {Layout, Image, ConfigProvider, Space, Button, Typography, Carousel} from "antd";
import CustomButton from './components/Button/Button'
import {Content, Footer} from "antd/es/layout/layout";
import Header from "./components/Header";
import logo from "./assets/logo1.png"
import Menu from "./components/Menu";
import theme from "./theme";
import {SearchOutlined, HeartOutlined} from "@ant-design/icons";
import ShoppingCartIcon from "./components/ShoppingCartIcon/ShoppingCartIcon";
import Admin from "./pages/Admin/Admin";
import {useDispatch} from "react-redux";
import {getProducts} from "./redux/actions";

const items = [
    {
        label: 'HOME',
        key: 'home',
    },
    {
        label: 'SHOP',
        key: 'shop',
    },
    {
        label: 'BLOG',
        key: 'blog',
    },
    {
        label: 'SALE',
        key: 'sale',
    },
    {
        label: 'CONTACT US',
        key: 'contact us',
    },
]

function Carusel() {
    return null;
}

function App() {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getProducts())
    }, [])
    const contentStyle: React.CSSProperties = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
  return (
      <ConfigProvider theme={theme}>
          <Layout className={'layout'}>
              <Header>
                  <Image src={logo} preview={false}/>
                  <Space>
                      <Menu items={items} mode='horizontal'></Menu>
                      <Button type="link" icon={<SearchOutlined/>}>{'SEARCH'.toUpperCase()}</Button>
                  </Space>
                  <Space>
                      <Typography.Link>SIGN IN</Typography.Link>
                      <Typography.Link>CREATE AN ACCOUNT</Typography.Link>
                      <HeartOutlined />
                      <ShoppingCartIcon/>
                  </Space>

              </Header>
              <Content>
                  {/*<Carousel autoplay>
                      <div>
                          <h3 style={contentStyle}>1</h3>
                      </div>
                  </Carousel>*/}
                  <Admin/>
              </Content>
              <Footer>Footer</Footer>
          </Layout>
      </ConfigProvider>

  );
}

export default App;
