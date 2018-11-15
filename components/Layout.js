import React from 'react'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
export default function layout(Component) {
    return class extends React.Component {
        render() {
            return (
                <div>
                    <Head />
                    <Header />
                    <Component />
                    <Footer />
                </div>
            )
        }
    }
}