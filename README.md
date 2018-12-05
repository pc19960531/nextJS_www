# nextJS_www
next.js框架下的fibos.io

- #### 由于性能问题以及中英文SSR需求，将原来的纯HTML的fibos.io网站改版为以next.js为技术框架的SSR架构,用服务端渲染的方式解决了中英文直接渲染的问题。

- #### 项目采用scss，react-bootstrap等辅助框架

- #### 因为项目逻辑以及业务简单，所以为了简化项目结构，并未引入任何状态管理框架，子父组件间通信通过props以及context传递数据，跨页面通信通过路由传递数据。

开发环境项目启动

```
npm install
npm run dev
```

生产环境项目部署


```
npm install
npm run build
npm run start
```


## 中英文对照的解决方案

#### 1. 中英文对照数据采用了json数据的格式，在locales文件夹中。
#### 2. 具体思路是：在所有的子组件中包一层高阶组件layout，在next.js特有的getInitialProps的生命周期中判断当前路由，如果路由中包含有zh-cn或者en-us的字符的，在最组件的外层返回不同的json文件，然后将对应语言的json数据依次向子组件传递。
#### 3. 由于所有页面初始化时都是服务端渲染的，所以直接在服务端渲染好对应的文字后返回html（无需引入任何框架的最简单的方法，不知道有无性能问题），并不像react的国际化组件那样通过前端动态改变文字。

```jsx
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
            let path = req.url;
            let language = path.indexOf('en-us') === -1 ? zh_cn : en_us;
            let isNews = path.indexOf('newsDetail') !== -1 ? true : false;
            return { language, agent, isNews }
        }
        render() {
            let { isNews, language, agent } = this.props;
            return (<div>
                <Head isNews={isNews} />
                <Header isIndex={isIndex} language={language} />
                <Component agent={agent} language={language} />
                <Footer language={language} />
            </div>)
        }
    }
}
```
#### 4. 路由交给node控制（由于在项目初创时对next.js的路由机制不是很了解，所以套用了next.js的子路由模板渲染的方式，将所有的页面都作为模板渲染）。

```js
server.get(['/zh-cn(/*)?', '/en-us(/*)?'], (req, res) => {
            let url = req.url;
            let urls = url.split('/')
            let currentPage = urls[2];
            const actualPage = '/' + (currentPage || 'index');
            app.render(req, res, actualPage)
        })
```





