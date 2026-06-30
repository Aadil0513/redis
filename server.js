import express from 'express'
import axios from 'axios'

import client from './client.js'


const app = express()
const PORT = 5000
app.get('/', async(req , res)=>{

    const cacheValue = await client.get('todos')

    if(cacheValue) return res.json(JSON.parse(cacheValue))


    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')


    await client.set("todos",JSON.stringify(data))
    await client.expire("todos", 30)

    // console.log("response",data)
    return res.json(data)
})

console.log("PORT",PORT)



app.listen(PORT, ()=>console.log(`app is running on localhost:${PORT}`))