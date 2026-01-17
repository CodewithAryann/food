const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Recipe title is required"],
        trim: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: [true, "Preparation time is required"]
    },
    servings: {
        type: Number,
        required: [true, "Number of servings is required"],
        min: 1
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: ["Healthy", "Dessert", "Italian", "Asian", "American"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        maxlength: 500
    },
    image: {
        type: String,
        required: [true, "Recipe image is required"]
    },
    ingredients: [{
        type: String,
        required: true
    }],
    instructions: [{
        type: String,
        required: true
    }],
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the updatedAt field before saving
recipeSchema.pre("save", function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model("Recipe", recipeSchema);