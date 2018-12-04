import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types';
import axios from 'axios'
import Link from 'next/link'

class TeleGramComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: true,
            messages: [],
            isMobile: false,
            members: 0,
            allHistoryMessage: [],
            pageCount: 0,
            currentPage: 2,
            loading: false,
            scrollHeight: 0,
        }
    }

    toggleCollapseOrLink = () => {
        if (browser.versions.mobile) {
            window.open('https://t.me/FIBOSIO')
            return
        }
        this.collapse = !this.collapse
    }

    async getLastPageMessage(page) {
        try {
            var protocol = window.location.protocol
            var host = window.location.host
            let url = `/1.0/app/getTgHistory/${page}`
            //let url = `http://115.47.142.152:9090/getTgHistory/${page}`
            this.setState({ loading: true })
            const result = await axios({
                method: 'Get',
                url
            })
            return result
        } catch (err) {
            throw err;
        }
    }

    scrollDid = () => {
        let e = this.messageswrap
        const { loading, pageCount, currentPage } = this.state;
        let that = this;
        $('.messages').scroll(function () {
            if (e.scrollTop === 0 && currentPage <= pageCount && !loading) {
                let currentHeight = e.scrollHeight
                let nextMessages = []
                that.getLastPageMessage(currentPage)
                    .then(res => {
                        nextMessages = res.data.messages
                        that.setState({
                            loading: false,
                            messages: that.transferMessage(nextMessages).concat(that.messages),
                            currentPage: currentPage + 1
                        })
                    })
                    .catch(() => {
                        that.setState({
                            loading: false,
                        })
                        alert('请刷新页面重试')
                    })
                    .finally(() => {
                        e.scrollTop = e.scrollHeight - currentHeight - 10
                    })
            }
        })
    }

    transferMessage = (messages) => {
        return messages.map(function (ele) {
            if (ele.text) {
                var escapetext = escape(ele.text)
                var escapetextlist = escapetext.split('%0A')
                var messagelist = escapetextlist.map(function (ele) {
                    return unescape(ele)
                })
                ele.messagelist = messagelist

            }
            if (ele.unixDate) {
                var formatDate = moment.unix(ele.unixDate).format("HH:mm")
                ele.formatDate = formatDate;
            }
            return ele
        })
    }


    pushMessage = (newmessages, isHistory, pageCount) => {
        const { messages } = this.state;
        let latestMassage
        if (isHistory) {
            this.setState({ pageCount })
            latestMassage = newmessages.concat(messages)
        } else {
            latestMassage = messages.concat(newmessages)
        }
        let transfermessages = this.transferMessage(latestMassage)

        this.setState({ messages: transfermessages })

        let e = this.messageswrap;
        scroll = e.scrollHeight - e.scrollTop
        if (isHistory) {
            e.scrollTop = e.scrollHeight
        }
        if (scroll >= 300 && scroll <= 600) {
            e.scrollTop = e.scrollHeight
        }
        this.scrollDid()
    }

    pushMembers = (data) => {
        this.setState({ members: data })
    }

    initWebsocket = () => {
        var protocol = window.location.protocol
        var host = window.location.host
        //this.socket = new WebSocket(`${protocol.indexOf('https') >= 0 ? 'wss' : 'ws'}://${host}/1.0/push`)
        this.socket = new WebSocket('ws://115.47.142.152:9090/1.0/push');
        //this.socket = new WebSocket('ws://fibos.io/1.0/push');

        this.socket.onmessage = e => {
            var d = JSON.parse(e.data)
            if (d.data && d.data.messages) {
                this.pushMessage(d.data.messages, d.data.isHistory, d.data.pageCount)
            }
            if (d.data && d.data.members) {
                this.pushMembers(d.data.members)
            }
        }
    }

    componentDidMount() {
        this.initWebsocket();

        this.setState({ isMobile: this.context.agent.mobile })
    }
    render() {
        const { collapse, isMobile, members, loading, messages } = this.state;
        return (
            <div id="tele" className={collapse ? 'tele-collapse' : ''} >
                <div className={isMobile ? 'hide' : 'bg'}>
                    <div className="top">
                        <div className="top-title">
                            FIBOS 初学者 电报群
                        </div>
                        <div className="top-member">{members} members</div>
                        <img src="../imgs/blacklogo.png" />
                    </div>
                    <div className="wrap">
                        <div className={loading ? 'loadingshow' : 'loadingdis'} >
                            <div className="spinner">
                                <div className="rect1"></div>
                                <div className="rect2"></div>
                                <div className="rect3"></div>
                                <div className="rect4"></div>
                                <div className="rect5"></div>
                            </div>
                        </div>
                        <ul className="messages" ref={(index) => this.messageswrap = index}>
                            {
                                messages.length > 0 && messages.map((message, index) => (
                                    <Messagecomponent message={message} key={index} />
                                ))
                            }
                        </ul >
                    </div >
                    <div className="bottom">
                        <div className="bottom-title">
                            <Link href="/zh-cn/test">
                                <a>加入电报群和大神一起聊技术</a>
                            </Link>
                        </div>
                        <img src="/imgs/toggle-collapse.png" className="bottom-img" onClick={() => {

                        }} />
                    </div >
                </div >
                <img src={collapse ? '../imgs/toggle-collapse.png' : '../imgs/toggle-open.png'} alt="" className="toggle-btn"
                    onClick={() => {
                        if (isMobile) {
                            window.open('https://t.me/FIBOSIO')
                            return
                        }
                        this.setState({ collapse: !collapse })
                    }}
                />
            </div >
        )
    }
}

function Messagecomponent({ message }) {

    return (
        <div className="message">
            <p className="name">
                {message.from.name}
            </p>
            <div className="tele-message-content-wrapper">
                <div className="tele-message-content" >
                    {
                        message.messagelist.map((content, index) => (
                            <div className={content ? 'textdiv' : ''} key={index}>
                                {content}
                            </div>
                        ))
                    }
                </div>
                <div className="tele-message-time">
                    <span>{message.formatDate}</span>
                </div>
            </div >
        </div >
    )
}

TeleGramComponent.contextTypes = {
    agent: PropTypes.object
}

export default TeleGramComponent

