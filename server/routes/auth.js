import express from "express"
import Caller from "../models/Caller.js"

const router = express.Router()

// Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body

    // Try to find by username or email
    const caller = await Caller.findOne({
      $or: [{ username }, { email: username }],
    })

    if (!caller) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    // Simple password check (in production, use bcrypt)
    if (caller.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    res.json({
      id: caller._id,
      username: caller.username,
      name: caller.name,
      email: caller.email,
      phone: caller.phone,
      role: caller.role,
      status: caller.status,
    })
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
})

export default router
