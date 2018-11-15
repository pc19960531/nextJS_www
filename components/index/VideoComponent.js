import { Component } from 'react'
import Link from 'next/link'
import { Carousel } from 'react-bootstrap'

class VideoComponent extends Component {
    state = {
        newsList: [
        ]
    }
    
    componentDidMount() {
        let newsList = [
            {
                id: 1,
                title: 'fibsos上线1111'
            },
            {
                id: 2,
                title: 'fibsos上线22222'
            }, {
                id: 3,
                title: 'fibsos上线33333'
            }, {
                id: 4,
                title: 'fibsos上线44444'
            }
        ]
        setTimeout(() => {
            this.setState({ newsList })
        }, 400)
    }
    render() {
        const { newsList } = this.state;
        return (
            <div className="index-video">
                <div className="video-wrap">
                    <div className="video-content">
                        <video className="video-play" poster="../imgs/video_preview.jpg" playsInline autoPlay muted loop
                            id="pc-video">
                            <source src="http://pg9omf3zm.bkt.clouddn.com/background101002.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="index-advance">
                        <div className="content1 animate fly-from-left a-delay7" id="Discover">
                            发现无处不在的价值
            </div>
                        <div className="content2 animate fly-from-left a-delay13" id="Platform">
                            FIBOS 是一个创造和发展区块链应用生态的平台，
            </div>
                        <div className="content3 animate fly-from-left a-delay13" id="Easy">
                            让你轻松创建属于自己的价值网络，帮助开发者和创业者一步进入区块链世界
            </div>
                        <div className="link-app animate fly-from-bottom a-delay19">
                            <div className="link">
                                <a href="https://wallet.fo" target="_blank">
                                    <img src="../imgs/button-green.png" />
                                    <div className="link-content">
                                        <img src="../imgs/icon-download.png" />
                                        <div className="link-download" id="DownloadWallet">下载 FO 钱包</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-banner">
                    <div className="news-wrap">
                        <div className="row">
                            <div className="col-2 news">
                                新闻
                            </div>
                            <div className="col-7 text-left">
                                {
                                    newsList.length > 0 &&
                                    <Carousel controls={false} interval={3000} indicators={false}>
                                        {
                                            newsList.map((ele) => (
                                                <Carousel.Item>
                                                    <Link href={`/detail/${ele.id}`}>
                                                        <a target="_blank">
                                                            <div className="news-content row">
                                                                <div className="news-title col-12 text-left">
                                                                    {ele.title}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </Carousel.Item>
                                            ))
                                        }
                                    </Carousel>
                                }
                            </div>
                            <div className="col-3">
                                <Link href="/news" >
                                    <a>更多 ></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoComponent