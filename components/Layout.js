import React from 'react'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import userAgent from '../utils/userAgent'
export default function layout(Component, isIndex) {
    return class extends React.Component {
        static getInitialProps({ req }) {
            const agent = userAgent(req)
            return { agent }
        }
        render() {
            return (
                <div>
                    <Head />
                    <Header isIndex={isIndex} />
                    <Component agent={this.props.agent} />
                    <Footer />
                </div>
            )
        }
    }
}