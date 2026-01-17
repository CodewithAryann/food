const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/auth");

// Generate JWT Token
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
};

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({ 
                success: false, 
                message: "Please provide all required fields" 
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ 
                success: false, 
                message: "Email already registered" 
            });
        }

        // Create user
        const user = await User.create({
            name,
            email,
            password
        });

        // Generate token
        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            message: "Registration successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                photo: user.photo,
                bio: user.bio
            }
        });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Server error during registration" 
        });
    }
});

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ 
                success: false, 
                message: "Please provide email and password" 
            });
        }

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: "Invalid credentials" 
            });
        }

        // Check if user registered with Google
        if (user.googleId && !user.password) {
            return res.status(401).json({ 
                success: false, 
                message: "Please sign in with Google" 
            });
        }

        // Compare password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ 
                success: false, 
                message: "Invalid credentials" 
            });
        }

        // Generate token
        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                photo: user.photo,
                bio: user.bio,
                likedRecipes: user.likedRecipes
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Server error during login" 
        });
    }
});

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get("/me", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId)
            .populate("likedRecipes");

        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                photo: user.photo,
                bio: user.bio,
                likedRecipes: user.likedRecipes,
                notifications: user.notifications
            }
        });
    } catch (error) {
        console.error("Get user error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Server error" 
        });
    }
});

// @route   PUT /api/auth/update-profile
// @desc    Update user profile
// @access  Private
router.put("/update-profile", authMiddleware, async (req, res) => {
    try {
        const { name, email, bio, photo, notifications } = req.body;

        const updateFields = {};
        if (name) updateFields.name = name;
        if (email) updateFields.email = email;
        if (bio !== undefined) updateFields.bio = bio;
        if (photo !== undefined) updateFields.photo = photo;
        if (notifications !== undefined) updateFields.notifications = notifications;

        // Check if email is already taken by another user
        if (email) {
            const existingUser = await User.findOne({ 
                email, 
                _id: { $ne: req.userId } 
            });
            if (existingUser) {
                return res.status(400).json({ 
                    success: false, 
                    message: "Email already in use" 
                });
            }
        }

        const user = await User.findByIdAndUpdate(
            req.userId,
            updateFields,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                photo: user.photo,
                bio: user.bio,
                notifications: user.notifications
            }
        });
    } catch (error) {
        console.error("Update profile error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Server error during update" 
        });
    }
});

// @route   POST /api/auth/toggle-like/:recipeId
// @desc    Like/Unlike a recipe
// @access  Private
router.post("/toggle-like/:recipeId", authMiddleware, async (req, res) => {
    try {
        const { recipeId } = req.params;
        const user = await User.findById(req.userId);

        const index = user.likedRecipes.indexOf(recipeId);
        
        if (index > -1) {
            // Unlike
            user.likedRecipes.splice(index, 1);
        } else {
            // Like
            user.likedRecipes.push(recipeId);
        }

        await user.save();

        res.status(200).json({
            success: true,
            message: index > -1 ? "Recipe unliked" : "Recipe liked",
            likedRecipes: user.likedRecipes
        });
    } catch (error) {
        console.error("Toggle like error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Server error" 
        });
    }
});

module.exports = router;