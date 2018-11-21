import React from 'react'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import userAgent from '../utils/userAgent'
import zh_cn from '../locales/zh-CN'
import en_us from '../locales/en-US'
export default function layout(Component, isIndex) {
    return class extends React.Component {
        static getInitialProps({ req }) {
            const agent = userAgent(req)
            let language = en_us;
            return { language, agent }
        }
        render() {
            return (
                <div>
                    <Head />
                    <Header isIndex={isIndex} language={this.props.language} />
                    <Component agent={this.props.agent} language={this.props.language} />
                    <Footer language={this.props.language} />
                </div>
            )
        }
    }
}