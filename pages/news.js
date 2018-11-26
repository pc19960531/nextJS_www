import React from 'react'
import layout from '../components/Layout'
import Link from 'next/link'
import '../css/news.scss'
import '../css/common.scss'
import Band from '../components/news/Band'
import post from '../utils/request'


class News extends React.Component {
    state = {
        newsList: [],
        recommendList: []
    }


    componentDidMount() {
        post('/1.0/app/web/news', { lang: 'zh-cn' }).then((newsList) => {
            this.setState({ newsList: newsList.news, recommendList: newsList.recommends })
        }).catch((err) => {
            alert("系统异常，请稍后再试！")
        })
    }

    render() {
        const { newsList, recommendList } = this.state;
        const language = this.props.language;
        return (
            <div className="doc-container">
                <div className="inside-container">
                    <Band />
                    <div className='page-body'>
                        <div className="container row">
                            <div className="col-lg-9 col-md-9 news-list-container">
                                {
                                    newsList.length > 0 && newsList.map((ele) =>
                                        (
                                            <div className="new-item">
                                                <h4>
                                                    <Link href={`/newsdetail?id=${ele.id}`}>
                                                        <a>
                                                            {ele.title}
                                                        </a>
                                                    </Link>
                                                </h4>
                                                <p className="info">发布时间: {ele.date} 作者: {ele.author}</p>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                            <div className="col-lg-3 col-md-3 news-rec-container">
                                <h5>新闻推荐</h5>
                                <div className="rec-wrap">
                                    <ul className="rec-list">
                                        {
                                            recommendList.length > 0 && recommendList.map((ele, index) => (
                                                <Link href={`/newsdetail?id=${ele.id}`} key={index}>
                                                    <a className="rec-item">
                                                        {ele.title}
                                                    </a>
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default layout(News)