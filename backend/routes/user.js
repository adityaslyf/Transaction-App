const express = require("express")
const router = express.Router()
const zod = require('zod')
const jwt = require("jsonwebtoken ")
const { JWT_SECRET } = require("../config");
const signupSchema =zod.object({
  username: zod.string(),
  // email: zod.string.email(),
  // age:zod.ZodNumber.optional()
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string()
})

routes.post('/signup ', async (req,res)=> {
   const body = req.body;
   const {success} = signupSchema.safeParse(req.body)
   if(!success){
    return res.json({
      message: " Email alredy taken/input field"
    })
   }
    

const user = User.findOne({
  username: body.username
})

if(user_id){
  return res.json({
    message: " Email alredy taken/input field"
  })
}
const dbUser = await User.create(body)
const token = jwt.signin({
  userId: dbUser,_id
} , JWT_SECRET )
res.json({
  message:"User created successfully ",
  token:token
})

})
 

module.exports = router 