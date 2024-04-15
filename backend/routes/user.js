const express = require("express")
const router = express.Router()
const zod = require('zod')
const jwt = require("jsonwebtoken ")
const { JWT_SECRET } = require("../config");
const { authmiddleware } = require('../middleware')

const signupSchema = zod.object({
  username: zod.string(),
  // email: zod.string.email(),
  // age:zod.ZodNumber.optional()
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string()
})

routes.post('/signup ', async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req.body)
  if (!success) {
    return res.json({
      message: " Email alredy taken/input field"
    })
  }


  const user = User.findOne({
    username: body.username
  })

  if (user_id) {
    return res.json({
      message: " Email alredy taken/input field"
    })
  }
  const dbUser = await User.create(body)
  const token = jwt.signin({
    userId: dbUser, _id
  }, JWT_SECRET)
  res.json({
    message: "User created successfully ",
    token: token
  })

})

const signinSchema = zod.object({
  username: zod.string(),
  // email: zod.string.email(),
  // age:zod.ZodNumber.optional()
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string()
})


router.put("/signin", (res, req) => {
  const body = req.body;


  if (existinguser) {
    return res.json({
      message: "User created successfully",
      token: "jwt"
    })
  }
})





const updateBody = zod.object({
  password: zod.string().optional();
  firstName: zod.string().optional();
  lastName: zod.string().optional();
})

router.put("/", authmiddleware, (req, res) => {
  const { success } = updateBody.safeParse(req.body)
  if (!success) {
    res.status(411).json({
      message: "Error while updating the User Information"
    })
  }

  await User.UpdateOne(req.body, {
    id: req.userId
  })
  res.json({
    message: "User information updated successfully"
  })


  router.get("/bulk", async (res, req) => {
    const filter = req.query.filter || "";
    const users = await User.find({
      $or: [{
        firstName: { "$regex": filter }
      },
      {
        lastName: { "$regex": filter }
      }
      ]
    })
    res.json({
      user: users.map(user => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id
      }))
    })
  }) 
})




module.exports = router 