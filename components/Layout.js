import React from 'react'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import userAgent from '../utils/userAgent'
import zh_cn from '../locales/zh-CN'
import en_us from '../locales/en-US'
import post from '../utils/request'
export default function layout(Component, isIndex) {
    return class extends React.Component {
        static getInitialProps({ req }) {
            const agent = userAgent(req)
            let path = req.url;
            let language = path.indexOf('en-us') === -1 ? zh_cn : en_us;
            let isNews = path.indexOf('newsdetail') !== -1 ? true : false;
            let title = '';
            if (isNews) {
                let id = path.split('/')[3];
                try {
                    const res = axios(
                        {
                            method: "POST",
                            url: '/1.0/app/web/details',
                            data: { lang: this.props.language.Lang, id },
                            "Content-Type": "application/json",
                            timeout: 500
                        }
                    )
                    if (res.data) {
                        title = res.data.details.title;
                    }
                } catch (err) {
                    
                }
            }
            return { language, agent, isNews, title }
        }
        render() {
            let { isNews, language, agent, title } = this.props;
            return (<div>
                <Head isNews={isNews} title={title} />
                <Header isIndex={isIndex} language={language} />
                <Component agent={agent} language={language} />
                <Footer language={language} />
            </div>)
        }
    }
}