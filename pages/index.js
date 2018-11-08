import React from 'react'

import post from '../utils/request'
import '../css/index.scss'
import VideoComponent from '../components/VideoComponent'
import DiscComponent from '../components/DiscComponent'
import PicShowComponent from '../components/PicShowComponent'
import RoadMapComponent from '../components/RoadMapComponent'
import FODataComponent from '../components/FODataComponent'
import CooComponent from '../components/CooComponent'
import DappsComponent from '../components/DappsComponent'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import '../css/global.css'


class Index extends React.Component {

    state = {
        list: [{}, {}, {}, {}, {}, {}, {}, {}]
    }
    componentDidMount() {
        // const req = post('/api/goods/findHomeGoods', {})
        // console.log(JSON.stringify(req))
    }
    render() {
        const { list } = this.state;
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                    <title>FIBOS 是一个创造和发展区块链应用生态的平台</title>
                    <meta name="keywords" content="EOS,区块链,BANCOR,钱包,fibos.js,DAPP,通证,token,FIBOS,区块链开发,发币,智能合约,JavaScript" />
                    <meta name="description" content="开发者友好的区块链生态系统,JavaScript 开发 + BANCOR 协议智能通证 + 开发者服务，FIBOS 平台实现了快速开发、快速部署和稳定且流动的通证体系，帮助开发者一步进入区块链时代。" />
                    <link rel="icon" type="image/png" href="/imgs/favicon.ico" />
                </Head>
                <Header />
                <VideoComponent />
                <DiscComponent />
                <PicShowComponent />
                <FODataComponent />
                <RoadMapComponent />
                <CooComponent />
                <DappsComponent />
                <Footer/>
            </div>
        )
    }
}

export default Index