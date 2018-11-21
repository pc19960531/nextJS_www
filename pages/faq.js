import { Component } from 'react'
import layout from '../components/Layout'
import Link from 'next/link'
import '../css/faq.scss'
import { Panel, PanelGroup } from 'react-bootstrap'
import post from '../utils/request'
class FAQ extends Component {
    state = {
        classNameify: [],
        qaList: [],
    }

    componentDidMount() {
        post('/1.0/app/web/faq', { lang: 'zh-cn' }).then((res) => {
            this.setState({
                classNameify: res.classNameify,
                qaList: res.qa,
            })
        }).catch((err) => {
            alert("系统异常，请稍后再试！")
        })


    }
    render() {
        const { classNameify, qaList } = this.state;
        return (
            <div className="inside-container">

                <div className="band">
                    <div className="container">
                        <span className="group" id="FAQ_T">

                            指南
                </span>

                    </div>
                </div>
                <div className="container">
                    <ol className="breadcrumb">
                        <li>
                            <Link href="/index">
                                <a data-i18n-text="ToHome">首页</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/iboUnion">
                                <a data-i18n-text="IBO_U">指南</a>
                            </Link>
                        </li>
                    </ol>
                </div>
                <div className="page-body">
                    <div className="container row">
                        <div className="sidebar hidden-xs col-lg-2">
                            <div className="panel-group" id="accordion" role="tablist">
                                {
                                    classNameify.length > 0 && classNameify.map((ele) => (
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingOne">
                                                <h4 className="card-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" onClick={() => {
                                                        post('/1.0/app/web/faq', { lang: 'zh-cn', id: ele.id }).then((res) => {
                                                            this.setState({
                                                                classNameify: res.classNameify,
                                                                qaList: res.qa,
                                                            })
                                                        }).catch((err) => {
                                                            alert("系统异常，请稍后再试！")
                                                        })
                                                    }}>
                                                        {ele.name}
                                                    </a>
                                                </h4>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-lg-10">
                            {/* <Panel>
                                <Panel.Heading>Panel heading without a title</Panel.Heading>
                                <Panel.Body>Panel content</Panel.Body>
                            </Panel> */}

                            <div id="accordion">
                                {
                                    qaList.length > 0 && qaList.map((ele, index) => (
                                        <div className="faq" key={index}>
                                            <div className="faq-header" id={`heading${index}`}>
                                                <h2 className="h2 collapsed" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                                    {ele.question}
                                                </h2>
                                            </div>
                                            <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`} data-parent="#accordion">
                                                <div className="faq-body" dangerouslySetInnerHTML={{ __html: ele.answer }} >
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        )
    }

}
export default layout(FAQ)