import React from 'react'
import '../css/index.scss'
import VideoComponent from '../components/index/VideoComponent'
import DiscComponent from '../components/index/DiscComponent'
import PicShowComponent from '../components/index/PicShowComponent'
import RoadMapComponent from '../components/index/RoadMapComponent'
import FODataComponent from '../components/index/FODataComponent'
import CooComponent from '../components/index/CooComponent'
import DappsComponent from '../components/index/DappsComponent'
import layout from '../components/Layout'


import TeleGramComponent from '../components/TeleGramComponent'
import { msg } from '../store'




class Index extends React.Component {

    state = {
        list: [{}, {}, {}, {}, {}, {}, {}, {}]
    }
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
    }
    render() {
        const { list } = this.state;
        return (
            <div ref={(index) => this.index = index}>
                <VideoComponent />
                <DiscComponent />
                <PicShowComponent />
                <FODataComponent />
                <RoadMapComponent />
                <CooComponent />
                <DappsComponent />
                <TeleGramComponent />
            </div>
        )
    }

}

export default layout(Index)