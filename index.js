const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('I love you!'))

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${port}!`))


