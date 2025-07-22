import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { createUserSchema } from '@repo/common/types'

const app = express();

app.post('/signup', async (req,res)=>{

  const data = createUserSchema.safeParse(req.body)
  if(!data.success){
    return res.json({
      message:"Incorrect Inputs"
    })
  }

  res.json({
    userId:123
  })
  // const { username, password} = req.body

  // const User = Users.find(u=>u.username == username)

  // if(User) res.status(404).json({message:"User already exists"})

  // Users.create({
  //   data:{
  //     username,
  //     password
  //   }
  // })

  // res.status(200).json({message:"Signup sucessful"})
})

app.post('/signin', async (req,res)=>{

  const {username, password} = req.body

  const userId = 1

  const token = jwt.sign({
    userId
  },JWT_SECRET_KEY)
  res.json({token,message:'Signin Sucessful'}).status(200)
})
app.post('/room',middleware, async (req,res)=>{

  //DB call

  res.json({
    roomId:123
  })
})

app.listen(3001)