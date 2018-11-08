import React from 'react'

class DiscComponent extends React.Component {

    choose = [
        '节点英雄',
        'DAPP 开发者',
        '文档贡献者',
        '社区志愿者'
    ]

    main_node = [
        {
            name: 'slowmistioio',
            img_src: '../imgs/main1.png'
        },
        {
            name: 'fibos123comm',
            img_src: '../imgs/main2.png'
        },
        {
            name: 'fibosrockskr',
            img_src: '../imgs/main3.png'
        },
        {
            name: 'fibosgenesis',
            img_src: '../imgs/main4.png'
        },
        {
            name: 'eosteaeostea',
            img_src: '../imgs/main5.png'
        }
    ]
    dapp_developer = [
        {
            name: '邱绍锡',
            img_src: '../imgs/dappdev-1.png'
        },
        {
            name: '侯松林',
            img_src: '../imgs/dappdev-2.png'
        },
        {
            name: '庄周梦蝶',
            img_src: '../imgs/dappdev-3.png'
        },
        {
            name: 'fun',
            img_src: '../imgs/dappdev-4.png'
        },
        {
            name: '建怀',
            img_src: '../imgs/dappdev-5.png'
        },
    ]

    doc_contributor = [
        {
            name: '邱绍锡',
            img_src: '../imgs/docer1.png'
        },
        {
            name: '假曾泽学',
            img_src: '../imgs/docer2.png'
        },
        {
            name: '痛饮狂歌',
            img_src: '../imgs/docer3.png'
        },
        {
            name: '筱伟',
            img_src: '../imgs/docer4.png'
        },
        {
            name: '蜘蛛侠',
            img_src: '../imgs/docer5.png'
        },
    ]

    volunteer = [
        {
            name: 'Onechain.one',
            img_src: '../imgs/community1.png'
        },
        {
            name: 'MORE Wallet',
            img_src: '../imgs/community2.png'
        },
        {
            name: 'Fotoolkit',
            img_src: '../imgs/community3.png'
        },
        {
            name: '51Token',
            img_src: '../imgs/community4.png'
        },
        {
            name: 'Ironman',
            img_src: '../imgs/community5.png'
        },
    ]

    state = {
        discList: [
            {
                img_src: '../imgs/icon-future1.png',
                title: '高性能公链设施',
                detail: 'FIBOS 是基于 EOS 技术架构开发的新型公链，采用 DPOS 共识机制，满足大规模商业应用的要求。'
            },
            {
                img_src: '../imgs/icon-future2.png',
                title: '健康的通证模型',
                detail: 'FIBOS 创新性地采用了基于 Bancor 协议的通证模型，实现通证经济体系的快速建立和健康发展。'
            },
            {
                img_src: '../imgs/icon-future3.png',
                title: '区块链生态入口',
                detail: 'FIBOS 生态中的 FO 钱包，帮助用户方便安全地管理数字资产并且承载整个生态的各种应用，是进入区块链世界的重要入口。'
            },
            {
                img_src: '../imgs/icon-future4.png',
                title: '降低开发者门槛',
                detail: 'FIBOS 融合了 EOS 和 fibjs 的 JavaScript 运行环境，扩展了 EOS 的可编程能力，并且能够使用 JavaScript 开发智能合约，让智能合约编程变得简单、高效!'
            }
        ],
        currentChoose: '节点英雄'
    }

    render() {
        const { discList, currentChoose } = this.state;
        let chooseMap = new Map([
            ['节点英雄', this.main_node],
            ['DAPP 开发者', this.dapp_developer],
            ['文档贡献者', this.doc_contributor],
            ['社区志愿者', this.volunteer],
        ])
        return (
            <div>
                <div className="index-disc">
                    <div className="index-wrap">
                        <div className="disc-title">
                            <div id="Performance">高性能基础设施 赋能实体</div>
                        </div>
                        <div className="disc-content">
                            <div className="row">
                                {
                                    discList.map((ele, index) => (
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 disc-warp" key={index}>
                                            <div className="disc-panel">
                                                <div className="disc-pic">
                                                    <img src={ele.img_src} className="disc-icon" />
                                                </div>
                                                <div className="panel-title" id="Lower_threshold">{ele.title}</div>
                                                <div className="disc-detail" id="Lower_threshold_disc">
                                                    {ele.detail}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="disc-bottom">
                    <div className="disc-bottom-wrap">
                        <div className="disc-top-title" id="Diversified">
                            多样化参与途径 链接未来
                        </div>
                        <div className="disc-choose">
                            <ul>
                                {
                                    this.choose.map((name) => (
                                        <li>
                                            <div
                                                className={`chooseclick2 chooseclick main ${name === currentChoose ? 'active' : ''}`}
                                                onClick={() => {
                                                    this.setState({ currentChoose: name })
                                                }}
                                            >{name}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="clear">
                            </div>
                        </div>
                        <div className="disc-avatar">
                            <ul className="avatar-ul">
                                {
                                    chooseMap.get(currentChoose).map((ele, index, array) =>
                                        (
                                            index !== array.length - 1 ?
                                                < li >
                                                    <div className="avatar">
                                                        <img src={ele.img_src} className="avatar4" />
                                                        <div className="name avatar4-name">
                                                            {ele.name}
                                                        </div>
                                                    </div>
                                                </li> :
                                                <li className="last-li">
                                                    <div className="avatar">
                                                        <img src={ele.img_src} className="avatar5" />
                                                        <div className="name avatar5-name">
                                                            {ele.name}
                                                        </div>
                                                    </div>
                                                </li>
                                        )
                                    )
                                }
                            </ul>
                            <div className="clear">
                            </div>
                        </div>
                        <div className="disc-ibo">
                            <a href="/ibounion.html" id="IBO" target="_blank">IBO 应用创新联盟</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DiscComponent