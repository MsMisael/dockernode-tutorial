const express = require('express')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express();

app.get('/', (req, res) => {
    return res.json({ msg: 'Hello Word novo' })
})


app.listen(PORT, () => {
    console.log('meu ovo 3')
})