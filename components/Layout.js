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
                console.log('进来')
                let title = '';
                let id = path.split('/')[3];
                console.log('id:' + id)
                console.log('lang:' + language.Lang)
                try {
                    let opt = {
                        method: "POST",
                        body: JSON.stringify({ lang: language.Lang, id }),
                        headers: {
                            Accept: 'application/json',
                            "Content-Type": "application/json",
                        }
                        // timeout: 1000
                    }
                    const res = await fetch('/1.0/app/web/details', opt)
                    console.log('try')
                    console.log(`Show data fetched. Count: ${res.json()}`);
                    // if (res.data) {
                    //     title = res.data.details.title;
                    // }
                    return { language, agent, title }
                } catch (e) {
                    console.log('e:' + JSON.stringify(e))
                    return { language, agent }
                }
            } else {
                return { language, agent }
            }

        }

        async componentDidMount() {
            let opt = {
                method: "POST",
                body: JSON.stringify({ lang: 'zh-cn', id: '5bd97b86f9463f45327f5345' }),
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json",
                }
                // timeout: 1000
            }
            const res = await fetch('/1.0/app/web/details', opt)
            console.log('componentDidMount')
            console.log(`Show data fetched. Count:`+ JSON.stringify(res));
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