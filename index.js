const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.use('/public', express.static(path.join(__dirname, './public')))

app.use('/', (req, res) => {
    const duongdan = path.join(__dirname, 'git.html')
    res.sendFile(duongdan)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})