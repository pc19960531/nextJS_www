const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get('/zh-cn/newsdetail/:id', (req, res) => {
            const actualPage = '/newsdetail'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('/en-us/newsdetail/:id', (req, res) => {
            const actualPage = '/newsdetail'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })

        // server.get('^/zh-cn||/(*)', (req, res) => {
        //     let url = req.url;
        //     let urls = url.split('/')
        //     let currentPage = urls[2];
        //     const actualPage = '/' + (currentPage || 'index');
        //     app.render(req, res, actualPage)
        // })

        // server.get(/^\/(zh-cn|en-us)\/|''/, (req, res) => {
        //     let url = req.url;
        //     let urls = url.split('/')
        //     let currentPage = urls[2];
        //     console.log('currentPage:' + currentPage)
        //     const actualPage = '/' + (currentPage || 'index');
        //     app.render(req, res, actualPage)
        // })


        server.get(['/zh-cn(/*)?', '/en-us(/*)?'], (req, res) => {
            let url = req.url;
            let urls = url.split('/')
            let currentPage = urls[2];
            console.log('currentPage:' + currentPage)
            const actualPage = '/' + (currentPage || 'index');
            app.render(req, res, actualPage)
        })

        server.get('*/imgs/*', (req, res) => {
            res.sendFile(__dirname + req.url);
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })


        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })