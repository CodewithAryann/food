const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: function() {
            return !this.googleId; // Password required only if not using Google OAuth
        },
        minlength: [6, "Password must be at least 6 characters"]
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    photo: {
        type: String,
        default: null
    },
    bio: {
        type: String,
        default: "Food enthusiast & home chef",
        maxlength: 500
    },
    likedRecipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    }],
    notifications: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Hash password before saving
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    
    if (this.password) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Remove password from JSON output
userSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.password;
    delete obj.googleId;
    return obj;
};

module.exports = mongoose.model("User", userSchema);