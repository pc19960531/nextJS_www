export default () => (
    <div className="index-fodata">
        <div className="fodata-wrap">
            <div className="earthpic">
                <img src="../imgs/data-picture.png" />
                <div className="data1 dataposition">
                    <div className="left">
                        <img src="../imgs/icon-data1.png" />
                    </div>
                    <div className="right">
                        <div id="Block">
                            区块数
                    </div>
                        <div id="BlockNumber" className="number">

                        </div>
                    </div>
                </div>
                <div className="data2 dataposition">
                    <div className="left">
                        <img src="../imgs/icon-data2.png" />
                    </div>
                    <div className="right">
                        <div id="Smarttoken">
                            智能通证数
                    </div>
                        <div id="smartTokens" className="number">

                        </div>
                    </div>
                </div>
                <div className="data3 dataposition">
                    <div className="left">
                        <img src="../imgs/icon-data3.png" />
                    </div>
                    <div className="right">
                        <div id="Deals">
                            交易数
                    </div>
                        <div id="TransactionNumber" className="number">

                        </div>
                    </div>
                </div>
                <div className="data4 dataposition">
                    <div className="left">
                        <img src="../imgs/icon-data4.png" />
                    </div>
                    <div className="right">
                        <div id="Users">
                            注册用户数
                    </div>
                        <div id="NumberOfUsers" className="number">

                        </div>
                    </div>
                </div>
                <div className="data5 dataposition">
                    <div className="left">
                        <img src="../imgs/icon-data5.png" />
                    </div>
                    <div className="right">
                        <div id="FoNum">
                            FO流通量
                    </div>
                        <div className="number">
                            <span id="FOCirculation"></span>
                            &nbsp;FO
                    </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

)