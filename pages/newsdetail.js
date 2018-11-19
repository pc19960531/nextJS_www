import { Component } from 'react'
import Band from '../components/news/Band'
import layout from '../components/Layout'
import { withRouter } from 'next/router'
import post from '../utils/request'

class Newdetail extends Component {
    state = {
        details: "",
        recommends: ""
    }
    componentDidMount() {
        let id = this.props.router.query.title;
        post('/1.0/app/web/details', { lang: 'zh-cn', id }).then((newsdtails) => {
            this.setState({
                details: newsdtails.details,
                recommends: newsdtails.recommends
            })
        }).catch(() => {
            alert("系统异常")
        })
    }
    render() {
        const { details } = this.state;
        console.log("details:" + details)
        return (
            <div className="inside-container">
                <Band />
                <div class="page-body">
                    <div class="container row">
                        <div class="col-lg-9 col-md-9 news-content-container">
                            <h3 class="news-title">{details.title}</h3>
                            <p class="info">发布时间: {details.date} 作者: {details.author}</p>
                            <div class="news-content" dangerouslySetInnerHTML={{ __html: details.content }} >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const detail = withRouter(Newdetail)

export default layout(detail)