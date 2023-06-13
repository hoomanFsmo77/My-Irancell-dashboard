require('dotenv').config()
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
app.use(bodyParser.json())
app.use(cors())


//// db
const database=require('./database/database.js')

app.get('/api/user',(req,res)=>{
    const token=req.headers.authorization
    if(token===process.env.API_KEY){
        database('users').
        select('*').
        where({token:token}).
        then(response=>{
            res.status(200).send(JSON.stringify(response[0]))
        }).
        catch(err=>{
            res.status(401).send('user not found')
        })
    }else{
        res.status(401).send('missing required token')
    }
})

app.get('/api/services/:isActive',(req,res)=>{
    const isActive=req.params.isActive
    if(isActive){
        database('services').
        select('*').
        where({isActive:isActive}).
        then(response=>{
            res.status(200).send(JSON.stringify(response))
        }).catch(err=>{
            res.status(401).send('error in db')
        })
    }else{
        res.status(401).send('missing required params')
    }
})

app.get('/api/recommend-packs/:id',(req,res)=>{
    const id=req.params.id;
    database('recommend_packet').
    select('*').
    where({userID:id}).
    then(response=>{
        res.status(200).send(JSON.stringify(response))
    }).catch(err=>{
        res.status(401).send('error in db')
    })
})

app.get('/api/user-buy/:id',(req,res)=>{
    const id=req.params.id;
    database('sales').
    select('*').
    where({userID:id}).
    then(response=>{
        res.status(200).send(JSON.stringify(response))
    }).catch(err=>{
        res.status(401).send('error in db')
    })
})

app.get('/api/chart/:id',(req,res)=>{
    const id=req.params.id;
    database('chart').
    select('*').
   where({userID:1}).
    then(response=>{
        res.status(200).send(JSON.stringify(response))
    }).catch(err=>{
        res.status(401).send('error in db')
    })
})

app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`))
