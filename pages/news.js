import React from 'react'
import layout from '../components/Layout'
import '../css/index.scss'
import Link from 'next/link'
import '../css/news.scss'


class News extends React.Component {
    state = {
        newsList: []
    }
    componentDidMount() {
        let newsList = [
            {
                id: '123123',
                date: '10-25',
                author: 'fibos',
                title: 'asdsad1212312',
                discribe: 'asdasdxxxxasdasdas'
            },
            {
                id: '123123',
                date: '10-25',
                author: 'fibos',
                discribe: 'asdasdxxxxasdasdas',
                title: 'asdsad1212312',
            },
            {
                id: '123123',
                date: '10-25',
                author: 'fibos',
                discribe: 'asdasdxxxxasdasdas',
                title: 'asdsad1212312',
            }
        ]
        setTimeout(() => {
            this.setState({ newsList })
        }, 400)
    }
    render() {
        const { newsList } = this.state;
        return (
            <div className="inside-container">
                <div className="band">
                    <div className="container">
                        <span className="group" data-i18n-text="News">
                        </span>
                    </div>
                </div>
                <div className="container">
                    <ol className="breadcrumb">
                        <li>
                            <Link href="/index">
                                <a>
                                    首页
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/news">
                                <a>
                                    新闻
                            </a>
                            </Link>
                        </li>
                    </ol>
                </div>
                <div className='page-body'>
                    <div className="container row">
                        <div className="col-lg-9 col-md-9 news-list-container">
                            {
                                newsList.length > 0 && newsList.map((ele) =>
                                    (
                                        <div className="new-item">
                                            <h4><a href="{{path}}">{ele.title}</a></h4>
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