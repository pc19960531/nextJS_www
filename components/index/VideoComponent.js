import { Component } from 'react'
import Link from 'next/link'
import { Carousel } from 'react-bootstrap'
import PropTypes from 'prop-types';

class VideoComponent extends Component {

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
        const language = this.context.language;
        const newsList = this.props.newsList
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
                        <div className="content1 animate fly-from-left a-delay7">
                            {language.Discover}
                        </div>
                        <div className="content2 animate fly-from-left a-delay13" id="Platform">
                            {language.Platform}
                        </div>
                        <div className="content3 animate fly-from-left a-delay13" id="Easy">
                            {language.Easy}
                        </div>
                        <div className="link-app animate fly-from-bottom a-delay19">
                            <div className="link">
                                <a href="https://wallet.fo" target="_blank">
                                    <img src="../imgs/button-green.png" />
                                    <div className="link-content">
                                        <img src="../imgs/icon-download.png" />
                                        <div className="link-download" id="DownloadWallet">{language.DownloadWallet}</div>
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
                                {language.News}
                            </div>
                            <div className="col-7 text-left">
                                {
                                    newsList.length > 0 &&
                                    <Carousel controls={false} interval={3000} indicators={false}>
                                        {
                                            newsList.map((ele, index) => (
                                                <Carousel.Item key={index}>
                                                    <Link href={`/newsdetail?id=${ele.id}`}>
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
                                <Link href={`${language.Lang === 'zh-cn' ? "/zh-cn" : "/en-us"}/news`} >
                                    <a>{language.More}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

VideoComponent.contextTypes = {
    language: PropTypes.object
}

export default VideoComponent