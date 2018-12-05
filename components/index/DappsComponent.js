import { Component } from 'react'
import { Carousel } from 'react-bootstrap'

class DappsComponent extends Component {
    state = {
        index: 0
    }
    render() {
        const language = this.props.language;
        let index = this.state.index;
        return (
            <div className="index-banner">
                <a name="dapps" style={{ height: 0 }}></a>
                <div className="banner-wrap">
                    <div className="banner-choose" id="Dapps">
                        {language.Dapps}
                    </div>
                    <div className="banner-show">
                        <Carousel
                            indicators={false}
                            controls={false}
                            activeIndex={index}
                        >
                            <Carousel.Item className="bannercontent">
                                <div className="row">
                                    <div className="dapp">
                                        <a href={`http://wallet.fo/${language.Lang}`} target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp1.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{language.FOSmartWallet}</h5>
                                                    <p className="card-text">{language.FOSmartWallet_disc}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dapp">
                                        <a href="https://more.top/app" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp2.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">MORE Wallet</h5>
                                                    <p className="card-text">
                                                        {language.MoreWalletDes}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dapp">
                                        <a href="https://www.51Token.im" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp3.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">51Token</h5>
                                                    <p className="card-text">
                                                        {language.TokenDes}
                                                    </p>
                                                </div>

                                            </div>
                                        </a>
                                    </div>
                                    <div className="dapp">
                                        <a href="http://www.onechain.one" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp4.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">onechain.one</h5>
                                                    <p className="card-text">
                                                        {language.OneDes}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="dapp" id="Vs1">
                                        <a href="http://see.fo" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp5.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title" id="BLExp">{language.BLExp}</h5>
                                                    <p className="card-text" id="BrowserDes">
                                                        {language.BrowserDes}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dapp">
                                        <a href="http://foironman.com" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp6.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{language.Ironman}</h5>
                                                    <p className="card-text">
                                                        {language.IronmanDes}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dapp">
                                        <a href="https://h5.tomatowallet.cn/fibos/fo-market.html" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp7.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{language.Tomato}</h5>
                                                    <p className="card-text" id="TomatoDes">
                                                        {language.TomatoDes}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dapp">
                                        <a href="https://fotoolkit.com" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dappweb.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Fotoolkit</h5>
                                                    <p className="card-text">
                                                        {language.FoWebDes}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="bannercontent">
                                <div className="row">
                                    <div className="dapp"><a href="https://www.fibos123.com/" target="_blank" className="link">
                                        <div className="card">
                                            <div className="card-img-top"><img src="/imgs/dapp11.png" alt="" /></div>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {language.FIBOSLo}
                                                </h5>
                                                <p className="card-text">
                                                    {language.FIBOSLoDes}
                                                </p>
                                            </div>
                                        </div>
                                    </a></div>
                                    <div className="dapp"><a href="https://fibos.slowmist.io/" target="_blank" className="link">
                                        <div className="card">
                                            <div className="card-img-top"><img src="/imgs/dapp12.png" alt="" /></div>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {language.Slow}
                                                </h5>
                                                <p className="card-text">
                                                    {language.SlowDes}
                                                </p>
                                            </div>
                                        </div>
                                    </a></div>
                                    <div className="dapp"><a href="http://www.fotoken.io" target="_blank" className="link">
                                        <div className="card">
                                            <div className="card-img-top"><img src="/imgs/dapp14.png" alt="" /></div>
                                            <div className="card-body">
                                                <h5 className="card-title">FoToken</h5>
                                                <p className="card-text">
                                                    {language.FoTokenDes}
                                                </p>
                                            </div>
                                        </div>
                                    </a></div>
                                    <div className="dapp lastVas">
                                        <div className="card">
                                            <div className="card-img-top"><img src="/imgs/vasimg.png" alt="" /></div>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {language.VacantSeat}
                                                </h5>
                                                <p className="card-text"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="dapp lastVas" id="Vs2">
                                        <div className="card">
                                            <div className="card-img-top"><img src="/imgs/vasimg.png" alt="" /></div>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {language.VacantSeat}
                                                </h5>
                                                <p className="card-text"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dapp lastVas" id="Vs3">
                                        <div className="card">
                                            <div className="card-img-top"><img src="/imgs/vasimg.png" alt="" /></div>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {language.VacantSeat}
                                                </h5>
                                                <p className="card-text"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dapp lastVas" id="Vs4">
                                        <div className="card">
                                            <div className="card-img-top"><img src="/imgs/vasimg.png" alt="" /></div>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {language.VacantSeat}
                                                </h5>
                                                <p className="card-text"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dapp lastVas" id="Vs5">
                                        <div className="card">
                                            <div className="card-img-top"><img src="/imgs/vasimg.png" alt="" /></div>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {language.VacantSeat}
                                                </h5>
                                                <p className="card-text"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                        <a className="dapp-control left"
                            onClick={() => {
                                this.setState(
                                    {
                                        index: index === 0 ? 1 : 0
                                    }
                                )
                            }}
                        >
                            <img src="../imgs/arrow-partner.png" />
                        </a>
                        <a className="dapp-control right"
                            onClick={() => {
                                this.setState(
                                    {
                                        index: index === 0 ? 1 : 0
                                    }
                                )
                            }}
                        >
                            <img src="../imgs/arrow-partner.png" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default DappsComponent

