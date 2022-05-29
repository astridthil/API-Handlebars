require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const api = require('./api.js')
const app = express()

app.use(express.static('public'));

app.engine('hbs', exphbs.engine ({
    extname: '.hbs',
    defaultLayout: 'main'
}))

app.set('view engine', 'hbs')

app.get('/', async (req, res) => {
    const siteInfo = await api.getSiteInfo()

    res.render('home', {
        siteInfo,
        style: 'home.css',
        title: 'Home'
    })

})

app.get('/posts', async (req, res) => {
    const siteInfo = await api.getSiteInfo()

    let page = parseInt(req.query.page)
    console.log({page})

    if(isNaN(page)){
        page = 1
    }
    const getPostsResponse = await api.getPosts(page)
    console.log(getPostsResponse.headers['x-wp-total'])
    const posts = getPostsResponse.data

    const nextPageNumber = page+1
    const prevPageNumber = page-1

    res.render('posts',
    {posts, nextPageNumber, prevPageNumber, page, siteInfo,
        title: 'Posts',
        style: 'posts.css'})
})

app.get('/posts/:id', async (req, res) => {
    const siteInfo = await api.getSiteInfo()
    const postId = req.params.id
    const getPostByIdResponse = await api.getPostById(postId)
    const post = getPostByIdResponse.data

    res.render('post', {post, siteInfo,
        title: 'Post',
        style: 'post.css'})
})

app.get('/pages', async (req,res) => {
    const siteInfo = await api.getSiteInfo()

    let page = parseInt(req.query.page)
    console.log({page})

    if(isNaN(page)){
        page = 1
    }

    const getPagesResponse = await api.getPages(page)
    const pages = getPagesResponse.data

    const nextPageNumber = page+1
    const prevPageNumber = page-1

    res.render('pages', {pages, nextPageNumber, prevPageNumber, page, siteInfo,
        title: 'Pages',
        style: 'pages.css'
    })
})

app.get('/pages/:id', async (req, res) => {
    const siteInfo = await api.getSiteInfo()
    const pageId = req.params.id
    const getPageByIdResponse = await api.getPageById(pageId)
    const page = getPageByIdResponse.data

    res.render('page', {page, siteInfo,
        title: 'Page',
        style: 'page.css'})
})

app.listen(8000, () => {
    console.log('http://localhost:8000')
})