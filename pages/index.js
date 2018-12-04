import React from 'react'
import PropTypes from 'prop-types';
import '../css/index.scss'
import VideoComponent from '../components/index/VideoComponent'
import DiscComponent from '../components/index/DiscComponent'
import PicShowComponent from '../components/index/PicShowComponent'
import RoadMapComponent from '../components/index/RoadMapComponent'
import FODataComponent from '../components/index/FODataComponent'
import CooComponent from '../components/index/CooComponent'
import DappsComponent from '../components/index/DappsComponent'

import layout from '../components/Layout'
import post from '../utils/request'


import TeleGramComponent from '../components/TeleGramComponent'
import { msg } from '../store'




class Index extends React.Component {


    state = {
        data: {},
        newsList: []
    }

    getChildContext() {
        return { agent: this.props.agent, language: this.props.language };
    }

    // getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFromProps:" + props)
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("getSnapshotBeforeUpdate:" + prevProps)
    // }



    componentDidMount() {
        window.onscroll = function () {
            if (document.getElementsByClassName('index-roadmap')[0]) {
                var roadmapHeight = document.getElementsByClassName('index-roadmap')[0].offsetTop//index-roadmap距离文档顶部高度
                var scrollTop = document.documentElement.scrollTop // 滚动隐藏高度
                if (roadmapHeight - scrollTop < 780) {
                    $('.roadmap-bottom .animate').addClass('fly-from-bottom')
                }
            }
        }

        post('/1.0/app/getBlockChainInfo', {}).then((data) => {
            this.setState({ data })
        }).catch((err) => {
            alert("系统异常，请稍后再试！")
        })

        post('/1.0/app/web/news', { lang: this.props.language.Lang }).then((newsList) => {
            this.setState({ newsList: newsList.news })
        }).catch((err) => {
            alert("系统异常，请稍后再试！")
        })

    }
    render() {
        return (
            <div>
                <VideoComponent newsList={this.state.newsList} />
                <DiscComponent />
                <PicShowComponent language={this.props.language} />
                <FODataComponent data={this.state.data} language={this.props.language} />
                <RoadMapComponent language={this.props.language} />
                <CooComponent language={this.props.language} />
                {
                    this.props.language.Lang === "zh-cn" &&
                    <DappsComponent language={this.props.language} />
                }
                <TeleGramComponent />
            </div>
        )
    }

}

Index.childContextTypes = {
    agent: PropTypes.object,
    language: PropTypes.object
};

export default layout(Index, true)