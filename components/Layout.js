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
            if (isNews) {
                console.log('进来')
                let id = path.split('/')[3];
                this.getNewsTitle(language, id).then((title) => {
                    console.log('成功')
                    return { language, agent, isNews, title }
                }).catch(() => {
                    console.log('失败')
                    return { language, agent }
                })
            }
            return { language, agent, isNews }
        }

        static getNewsTitle = async (language, id) => {
            let title = ''
            try {
                const res = await axios(
                    {
                        method: "POST",
                        url: '/1.0/app/web/details',
                        data: { lang: language.Lang, id },
                        "Content-Type": "application/json",
                        timeout: 500
                    }
                )
                if (res.data) {
                    title = res.data.details.title;
                }
                console.log('title:' + title);
                return title
            } catch (err) {

            }
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