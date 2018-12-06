import React from 'react'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import userAgent from '../utils/userAgent'
import zh_cn from '../locales/zh-CN'
import en_us from '../locales/en-US'


import fetch from 'isomorphic-unfetch'


export default function layout(Component, isIndex) {
    return class extends React.Component {

        static async getInitialProps({ req }) {
            const agent = userAgent(req)
            let path = req.url;
            let language = path.indexOf('en-us') === -1 ? zh_cn : en_us;
            let isNews = path.indexOf('newsdetail') !== -1 ? true : false;
            if (isNews) {
                let title = '';
                let alias = path.split('/')[3];
                try {
                    let opt = {
                        method: "POST",
                        body: JSON.stringify({ lang: language.Lang, alias }),
                        headers: {
                            Accept: 'application/json, text/plain, */*',
                            "Content-Type": "application/json;charset=UTF-8",
                        },
                        credentials: 'same-origin',
                        // timeout: 1000
                    }
                    const res = await fetch('https://guspc.com/1.0/app/web/details', opt)
                    const data = await res.json();
                    if (data) {
                        title = data.details.title;
                    }
                    return { language, agent, title }
                } catch (e) {
                    return { language, agent }
                }
            } else {
                return { language, agent }
            }

        }

        render() {
            let { language, agent, title } = this.props;
            return (<div>
                <Head title={title} />
                <Header isIndex={isIndex} language={language} />
                <Component agent={agent} language={language} />
                <Footer language={language} />
            </div>)
        }
    }
}