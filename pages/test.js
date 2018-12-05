import { Component } from 'react'
import axios from 'axios'

class Test extends Component {
    state = {
        status: true
    }
    componentDidMount() {
        let that = this;

        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    console.log(xhr.responseText)
                }
            }
        };
        xhr.open("get", "https://t.me/FIBOSIO", false);
        // xhr.send('');
        // const serivce = axios.create({ // 创建服务
        //     baseURL: 'https://t.me/FIBOSIO', // 基础路径
        //     timeout: 5000 // 请求延时
        // })

        // serivce.interceptors.request.use(
        //     config => {
        //         return config
        //     },
        //     error => {
        //         return Promise.reject(error)
        //     }
        // )

        // serivce().catch((err) => {
        //     console.error('err:' + JSON.stringify(err))
        // })

        // axios(
        //     {
        //         method: "GET",
        //         url: "https://t.me/FIBOSIO",
        //         timeout: 10000,
        //         // complete: function (request, status) {
        //         //     if (request.status !== 200) {
        //         //         that.setState({ status: false })
        //         //     } else {
        //         //         window.location.href = "https://t.me/FIBOSIO"
        //         //     }
        //         // }
        //     }
        // ).then((response) => {
        //     console.log(response.data);
        //     console.log(response.status);
        //     console.log(response.statusText);
        //     console.log(response.headers);
        //     console.log(response.config);
        //     // window.location.href = "https://t.me/FIBOSIO"
        // }).catch((error) => {
        //     if (error.response) {
        //         // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        //         console.error(error.response.data);
        //         console.error(error.response.status);
        //         console.error(error.response.headers);
        //     } else {
        //         // Something happened in setting up the request that triggered an Error
        //         console.error('Error', error.message);
        //     }
        //     console.error(error.config);
        //     // that.setState({ status: false })
        // })
    }
    render() {
        let status = this.state.status;
        return (
            <div id="t-title">
                {
                    !status &&
                    <div className="t-backgroud">
                        <img src="/imgs/bg.png" />
                        <div className="t-content">
                            <img src="/imgs/avtar.png " className="t-fl" />
                            <div className="t-fl t-text">
                                <h2>连接失败</h2>
                                <h5>尝试更多方法</h5>
                                <h5>加入Telegram和大神一起聊技术</h5>
                            </div>
                        </div>
                    </div>
                }
                <style jsx>{`
            .t-backgroud {
                width: 600px;
                margin: 0 auto;
                position: relative;
                padding-top: 100px;
            }
    
            .t-bg {
                width: 100%;
            }
    
            .t-content {
                position: absolute;
                top: 30%;
                width: 700px;
            }
    
            .t-fl {
                float: left;
            }
    
            .t-text {
                padding-top: 30px;
                padding-left: 20px;
            }
         `}</style>
            </div>
        )
    }
}

export default Test;