const axios = require('axios').default
const fs = require('fs')

function api() {
    return axios.create({
        baseURL: process.env.BASE_URL + '/wp/v2'
    })
}

module.exports.getPosts = async function(pageNumber) {
    const cacheFilename = 'cache/getPosts'

    let content = undefined

    if(fs.existsSync(cacheFilename)) {
        const fileContent = fs.readFileSync(cacheFilename)
        const fileData = JSON.parse(fileContent)

        const oneHrAgo = Date.now() - (60*60*1000)

        if(oneHrAgo < fileData.time) {
            content = fileData.content
        }

    } if(!content) {
        const response = await axios.get(process.env.BASE_URL)

    const time = Date.now()
    const data = JSON.stringify({time: time, content: response.data})
    fs.writeFileSync(cacheFilename, data)

    content = response.data
    }
    return await content, api().get('/posts', {
        params: {
            per_page: 3,
            page: pageNumber
        }
    })
}

module.exports.getPostById = async function(id) {
    const cacheFilename = 'cache/getPostById'

    let content = undefined

    if(fs.existsSync(cacheFilename)) {
        const fileContent = fs.readFileSync(cacheFilename)
        const fileData = JSON.parse(fileContent)

        const oneHrAgo = Date.now() - (60*60*1000)

        if(oneHrAgo < fileData.time) {
            content = fileData.content
        }

    } if(!content) {
        const response = await axios.get(process.env.BASE_URL)

    const time = Date.now()
    const data = JSON.stringify({time: time, content: response.data})
    fs.writeFileSync(cacheFilename, data)

    content = response.data
    }
    return await content, api().get('/posts/' + id)
}

module.exports.getPages = async function(pageNumber) {
    const cacheFilename = 'cache/getPages'

    let content = undefined

    if(fs.existsSync(cacheFilename)) {
        const fileContent = fs.readFileSync(cacheFilename)
        const fileData = JSON.parse(fileContent)

        const oneHrAgo = Date.now() - (60*60*1000)

        if(oneHrAgo < fileData.time) {
            content = fileData.content
        }

    } if(!content) {
        const response = await axios.get(process.env.BASE_URL)

    const time = Date.now()
    const data = JSON.stringify({time: time, content: response.data})
    fs.writeFileSync(cacheFilename, data)

    content = response.data
    }
    return await content, api().get('/pages', {
        params: {
            per_page: 3,
            page: pageNumber
        }
    })
}

module.exports.getPageById = async function(id) {
    const cacheFilename = 'cache/getPageById'

    let content = undefined

    if(fs.existsSync(cacheFilename)) {
        const fileContent = fs.readFileSync(cacheFilename)
        const fileData = JSON.parse(fileContent)

        const oneHrAgo = Date.now() - (60*60*1000)

        if(oneHrAgo < fileData.time) {
            content = fileData.content
        }

    } if(!content) {
        const response = await axios.get(process.env.BASE_URL)

    const time = Date.now()
    const data = JSON.stringify({time: time, content: response.data})
    fs.writeFileSync(cacheFilename, data)

    content = response.data
    }
    return await content, api().get('/pages/' + id)
}

module.exports.getSiteInfo = async function() {
    const cacheFilename = 'cache/getSiteInfo'

    let content = undefined

    if(fs.existsSync(cacheFilename)) {
        const fileContent = fs.readFileSync(cacheFilename)
        const fileData = JSON.parse(fileContent)

        const oneHrAgo = Date.now() - (60*60*1000)

        if(oneHrAgo < fileData.time) {
            content = fileData.content
        }

    } if(!content) {
        const response = await axios.get(process.env.BASE_URL)

    const time = Date.now()
    const data = JSON.stringify({time: time, content: response.data})
    fs.writeFileSync(cacheFilename, data)

    content = response.data
    }
    return content
}
