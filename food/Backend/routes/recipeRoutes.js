const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");
const authMiddleware = require("../middleware/auth");

// @route   GET /api/recipes
// @desc    Get all recipes with optional filters
// @access  Public
router.get("/", async (req, res) => {
    try {
        const { category, search, sort = "-createdAt" } = req.query;
        
        let filter = {};
        
        // Category filter
        if (category && category !== "all") {
            filter.category = category;
        }
        
        // Search filter
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
                { authorName: { $regex: search, $options: "i" } }
            ];
        }

        const recipes = await Recipe.find(filter)
            .populate("author", "name photo")
            .sort(sort);

        res.status(200).json({
            success: true,
            count: recipes.length,
            recipes
        });
    } catch (error) {
        console.error("Get recipes error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Server error" 
        });
    }
});

// @route   GET /api/recipes/:id
// @desc    Get single recipe by ID
// @access  Public
router.get("/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id)
            .populate("author", "name photo bio");

        if (!recipe) {
            return res.status(404).json({ 
                success: false, 
                message: "Recipe not found" 
            });
        }

        res.status(200).json({
            success: true,
            recipe
        });
    } catch (error) {
        console.error("Get recipe error:", error);
        if (error.kind === "ObjectId") {
            return res.status(404).json({ 
                success: false, 
                message: "Recipe not found" 
            });
        }
        res.status(500).json({ 
            success: false, 
            message: "Server error" 
        });
    }
});

// @route   POST /api/recipes
// @desc    Create a new recipe
// @access  Private
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { title, time, servings, category, description, image, ingredients, instructions } = req.body;

        // Validation
        if (!title || !time || !servings || !category || !description || !image || !ingredients || !instructions) {
            return res.status(400).json({ 
                success: false, 
                message: "Please provide all required fields" 
            });
        }

        // Create recipe
        const recipe = await Recipe.create({
            title,
            author: req.userId,
            authorName: req.user.name,
            time,
            servings,
            category,
            description,
            image,
            ingredients: Array.isArray(ingredients) ? ingredients : ingredients.split('\n').filter(i => i.trim()),
            instructions: Array.isArray(instructions) ? instructions : instructions.split('\n').filter(i => i.trim())
        });

        const populatedRecipe = await Recipe.findById(recipe._id)
            .populate("author", "name photo");

        res.status(201).json({
            success: true,
            message: "Recipe created successfully",
            recipe: populatedRecipe
        });
    } catch (error) {
        console.error("Create recipe error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Server error during recipe creation" 
        });
    }
});

// @route   PUT /api/recipes/:id
// @desc    Update a recipe
// @access  Private (owner only)
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({ 
                success: false, 
                message: "Recipe not found" 
            });
        }

        // Check if user is the owner
        if (recipe.author.toString() !== req.userId.toString()) {
            return res.status(403).json({ 
                success: false, 
                message: "Not authorized to update this recipe" 
            });
        }

        const { title, time, servings, category, description, image, ingredients, instructions } = req.body;

        // Update fields
        if (title) recipe.title = title;
        if (time) recipe.time = time;
        if (servings) recipe.servings = servings;
        if (category) recipe.category = category;
        if (description) recipe.description = description;
        if (image) recipe.image = image;
        if (ingredients) {
            recipe.ingredients = Array.isArray(ingredients) 
                ? ingredients 
                : ingredients.split('\n').filter(i => i.trim());
        }
        if (instructions) {
            recipe.instructions = Array.isArray(instructions) 
                ? instructions 
                : instructions.split('\n').filter(i => i.trim());
        }

        await recipe.save();

        const updatedRecipe = await Recipe.findById(recipe._id)
            .populate("author", "name photo");

        res.status(200).json({
            success: true,
            message: "Recipe updated successfully",
            recipe: updatedRecipe
        });
    } catch (error) {
        console.error("Update recipe error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Server error during update" 
        });
    }
});

// @route   DELETE /api/recipes/:id
// @desc    Delete a recipe
// @access  Private (owner only)
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({ 
                success: false, 
                message: "Recipe not found" 
            });
        }

        // Check if user is the owner
        if (recipe.author.toString() !== req.userId.toString()) {
            return res.status(403).json({ 
                success: false, 
                message: "Not authorized to delete this recipe" 
            });
        }

        await Recipe.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Recipe deleted successfully"
        });
    } catch (error) {
        console.error("Delete recipe error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Server error during deletion" 
        });
    }
});

// @route   GET /api/recipes/user/:userId
// @desc    Get all recipes by a specific user
// @access  Public
router.get("/user/:userId", async (req, res) => {
    try {
        const recipes = await Recipe.find({ author: req.params.userId })
            .populate("author", "name photo")
            .sort("-createdAt");

        res.status(200).json({
            success: true,
            count: recipes.length,
            recipes
        });
    } catch (error) {
        console.error("Get user recipes error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Server error" 
        });
    }
});

module.exports = router;