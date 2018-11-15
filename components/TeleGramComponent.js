import React from 'react'

class TeleGramComponent extends React.Component {
    state = {
        collapse: true,
        messages: [],
        isMobile: '',
        members: 0,
        allHistoryMessage: [],
        pageCount: 0,
        currentPage: 2,
        loading: false,
        scrollHeight: 0
    }

    pushMessage = (messages, isHistory, pageCount) => {
        let latestMassage
        if (isHistory) {
            this.allHistoryMessage = messages
            //this.page = (messages.length % 20 === 0 ? 0 : 1) + parseInt(messages.length / 20);
            this.pageCount = pageCount
            //let initMessage = messages.slice(messages.length - 20);
            latestMassage = messages.concat(this.messages)
        } else {
            latestMassage = this.messages.concat(messages)
        }
        this.messages = this.transferMessage(latestMassage)

        let e = this.$refs.messages
        scroll = e.scrollHeight - e.scrollTop
        if (isHistory) {
            this.$nextTick(function () {
                e.scrollTop = e.scrollHeight
            })
        }
        if (scroll >= 300 && scroll <= 600) {
            this.$nextTick(function () {
                e.scrollTop = e.scrollHeight
            })
        }
    }

    pushMembers = (data) => {
        this.setState({ members: data })
    }

    initWebsocket = () => {
        var protocol = window.location.protocol
        var host = window.location.host
        this.socket = new WebSocket(`${protocol.indexOf('https') >= 0 ? 'wss' : 'ws'}://${host}/1.0/push`)
        //this.socket = new WebSocket('ws://115.47.142.152:9090/1.0/push');
        //this.socket = new WebSocket('ws://fibos.io/1.0/push');

        this.socket.onmessage = e => {
            var d = JSON.parse(e.data)
            if (d.data && d.data.messages) {
                this.pushMessage(d.data.messages, d.data.isHistory, d.data.pageCount)
                // if ($('ul.messages')[0].scrollHeight = $('ul.messages').scrollTop() + $(".wrap").height()) {
                //   $('ul.messages').scrollTop($('ul.messages')[0].scrollHeight)
                // }
            }
            if (d.data && d.data.members) {
                this.pushMembers(d.data.members)
            }
        }
    }

    componentDidMount() {
        this.initWebsocket();
    }
    render() {
        const { collapse, isMobile, members, loading } = this.state;
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
                        <ul className="messages" ref="messages">

                        </ul >
                    </div >
                    <div className="bottom">
                        <div className="bottom-title">
                            <a onClick={() => {

                            }}>
                                加入电报群和大神一起聊技术
                        </a>
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

export default TeleGramComponent

