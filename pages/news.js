import React from 'react'
import layout from '../components/Layout'
import '../css/index.scss'
import Link from 'next/link'
import '../css/news.scss'
import Band from '../components/news/Band'
import post from '../utils/request'


class News extends React.Component {
    state = {
        newsList: []
    }


    componentDidMount() {
        post('/1.0/app/web/news', { lang: 'zh-cn' }).then((newsList) => {
            this.setState({ newsList: newsList.news })
        }).catch((err) => {
            alert("系统异常，请稍后再试！")
        })
    }

    render() {
        const { newsList } = this.state;
        return (
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
                                                <Link href={`/newsdetail?title=${ele.id}`}>
                                                    <a href="{{path}}">
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

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default layout(News)