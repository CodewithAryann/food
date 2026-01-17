// Recipe data with 20 recipes across all categories
const recipes = [
    // Healthy (4 recipes)
    {id: 1, title: "Mediterranean Quinoa Bowl", author: "Sarah Chen", time: "25 min", servings: 4, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80", category: "Healthy", description: "A vibrant, nutritious bowl packed with fresh vegetables, herbs, and protein-rich quinoa.", ingredients: ["2 cups quinoa", "1 cucumber, diced", "2 tomatoes, diced", "1/2 red onion", "1/4 cup feta cheese", "1/4 cup olives", "3 tbsp olive oil", "2 tbsp lemon juice", "Salt and pepper"], instructions: ["Cook quinoa according to package directions", "Dice all vegetables", "Mix quinoa with vegetables", "Drizzle with olive oil and lemon juice", "Top with feta and olives", "Season with salt and pepper"]},
    {id: 6, title: "Fresh Garden Salad", author: "Emily Green", time: "15 min", servings: 2, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80", category: "Healthy", description: "Crisp mixed greens with seasonal vegetables and homemade vinaigrette.", ingredients: ["Mixed greens", "Cherry tomatoes", "Cucumber", "Carrots", "Red onion", "3 tbsp olive oil", "1 tbsp vinegar", "Dijon mustard", "Honey"], instructions: ["Wash and dry all greens", "Chop vegetables", "Make vinaigrette with oil, vinegar, mustard, and honey", "Toss salad with dressing", "Serve immediately"]},
    {id: 7, title: "Avocado Toast with Poached Egg", author: "Lisa Martinez", time: "10 min", servings: 1, image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80", category: "Healthy", description: "Simple yet delicious breakfast with creamy avocado and perfectly poached egg.", ingredients: ["2 slices whole grain bread", "1 ripe avocado", "2 eggs", "Lemon juice", "Red pepper flakes", "Salt and pepper", "Cherry tomatoes"], instructions: ["Toast bread until golden", "Mash avocado with lemon juice", "Poach eggs in simmering water", "Spread avocado on toast", "Top with poached egg", "Season and garnish"]},
    {id: 8, title: "Green Smoothie Bowl", author: "Sophie Anderson", time: "5 min", servings: 1, image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80", category: "Healthy", description: "Refreshing and nutritious smoothie bowl topped with fresh fruits and granola.", ingredients: ["2 cups spinach", "1 banana", "1/2 cup mango", "1/2 cup almond milk", "Granola", "Chia seeds", "Fresh berries", "Coconut flakes"], instructions: ["Blend spinach, banana, mango, and almond milk", "Pour into bowl", "Top with granola, berries, and chia seeds", "Add coconut flakes", "Serve immediately"]},
    // Dessert (4 recipes)
    {id: 2, title: "Chocolate Lava Cake", author: "James Wilson", time: "30 min", servings: 2, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80", category: "Dessert", description: "Decadent molten chocolate cake with a gooey center that melts in your mouth.", ingredients: ["4 oz dark chocolate", "1/2 cup butter", "2 eggs", "2 egg yolks", "1/4 cup sugar", "2 tbsp flour", "Powdered sugar for dusting"], instructions: ["Preheat oven to 425°F", "Melt chocolate and butter together", "Whisk eggs, yolks, and sugar", "Combine with chocolate mixture", "Fold in flour", "Pour into greased ramekins", "Bake for 12-14 minutes", "Dust with powdered sugar"]},
    {id: 9, title: "Classic Tiramisu", author: "Antonio Greco", time: "40 min", servings: 8, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80", category: "Dessert", description: "Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.", ingredients: ["6 egg yolks", "3/4 cup sugar", "16 oz mascarpone", "2 cups espresso", "3 tbsp rum", "Ladyfinger cookies", "Cocoa powder"], instructions: ["Whisk egg yolks and sugar", "Fold in mascarpone", "Mix espresso and rum", "Dip ladyfingers in coffee", "Layer in dish", "Refrigerate 4 hours", "Dust with cocoa before serving"]},
    {id: 10, title: "New York Cheesecake", author: "Rachel Stevens", time: "90 min", servings: 12, image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&q=80", category: "Dessert", description: "Rich and creamy cheesecake with a graham cracker crust and smooth texture.", ingredients: ["2 cups graham crackers", "1/2 cup butter", "32 oz cream cheese", "1 cup sugar", "4 eggs", "1 tsp vanilla", "Sour cream"], instructions: ["Make crust with crackers and butter", "Beat cream cheese and sugar", "Add eggs one at a time", "Mix in vanilla", "Pour into pan", "Bake at 325°F for 55 minutes", "Cool and refrigerate"]},
    {id: 11, title: "French Macarons", author: "Pierre Dubois", time: "60 min", servings: 24, image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80", category: "Dessert", description: "Delicate almond meringue cookies with a creamy filling, perfect for special occasions.", ingredients: ["1 3/4 cups powdered sugar", "1 cup almond flour", "3 egg whites", "1/4 cup sugar", "Food coloring", "Buttercream filling"], instructions: ["Sift almond flour and powdered sugar", "Beat egg whites to stiff peaks", "Fold dry ingredients into meringue", "Pipe circles on baking sheet", "Let rest 30 minutes", "Bake at 300°F for 15 minutes", "Fill with buttercream"]},
    // Italian (4 recipes)
    {id: 3, title: "Homemade Margherita Pizza", author: "Maria Rossi", time: "45 min", servings: 3, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80", category: "Italian", description: "Classic Italian pizza with fresh mozzarella, basil, and San Marzano tomatoes.", ingredients: ["Pizza dough", "1 can San Marzano tomatoes", "8 oz fresh mozzarella", "Fresh basil leaves", "2 tbsp olive oil", "2 garlic cloves", "Salt"], instructions: ["Prepare pizza dough", "Make sauce with crushed tomatoes and garlic", "Roll out dough", "Spread sauce on dough", "Add mozzarella slices", "Bake at 475°F for 12-15 minutes", "Top with fresh basil"]},
    {id: 12, title: "Fettuccine Alfredo", author: "Giovanni Bianchi", time: "25 min", servings: 4, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800&q=80", category: "Italian", description: "Creamy pasta dish with butter, parmesan, and a touch of garlic.", ingredients: ["1 lb fettuccine", "1 cup heavy cream", "1/2 cup butter", "1 1/2 cups parmesan", "3 garlic cloves", "Salt and pepper", "Fresh parsley"], instructions: ["Cook pasta al dente", "Melt butter with garlic", "Add heavy cream", "Stir in parmesan", "Toss with pasta", "Season to taste", "Garnish with parsley"]},
    {id: 13, title: "Chicken Parmigiana", author: "Lucia Ferrari", time: "50 min", servings: 4, image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80", category: "Italian", description: "Breaded chicken cutlets topped with marinara sauce and melted mozzarella.", ingredients: ["4 chicken breasts", "2 cups breadcrumbs", "2 eggs", "2 cups marinara sauce", "2 cups mozzarella", "1/2 cup parmesan", "Basil"], instructions: ["Pound chicken thin", "Dip in egg then breadcrumbs", "Pan fry until golden", "Top with marinara and cheese", "Bake at 375°F for 20 minutes", "Garnish with basil"]},
    {id: 14, title: "Lasagna Bolognese", author: "Marco Conti", time: "120 min", servings: 8, image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&q=80", category: "Italian", description: "Layered pasta with rich meat sauce, creamy béchamel, and melted cheese.", ingredients: ["Lasagna noodles", "2 lbs ground beef", "Onion", "Carrots", "Celery", "Tomato sauce", "Béchamel sauce", "Parmesan", "Mozzarella"], instructions: ["Make bolognese sauce", "Prepare béchamel", "Cook lasagna noodles", "Layer noodles, sauce, and cheese", "Repeat layers", "Top with cheese", "Bake at 375°F for 45 minutes"]},
    // Asian (4 recipes)
    {id: 4, title: "Thai Green Curry", author: "David Park", time: "35 min", servings: 4, image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80", category: "Asian", description: "Aromatic green curry with coconut milk, vegetables, and fragrant Thai herbs.", ingredients: ["2 tbsp green curry paste", "1 can coconut milk", "1 lb chicken", "1 bell pepper", "1 cup bamboo shoots", "Thai basil", "Fish sauce", "Palm sugar"], instructions: ["Heat curry paste in pan", "Add coconut milk", "Add chicken and cook", "Add vegetables", "Season with fish sauce and sugar", "Simmer until done", "Garnish with Thai basil"]},
    {id: 15, title: "Pad Thai", author: "Mei Lin", time: "30 min", servings: 3, image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80", category: "Asian", description: "Classic Thai stir-fried noodles with shrimp, tofu, and tangy tamarind sauce.", ingredients: ["8 oz rice noodles", "1/2 lb shrimp", "3 eggs", "Bean sprouts", "Peanuts", "Green onions", "Tamarind paste", "Fish sauce", "Palm sugar"], instructions: ["Soak noodles in warm water", "Scramble eggs", "Stir-fry shrimp", "Add noodles and sauce", "Toss with vegetables", "Top with peanuts and lime"]},
    {id: 16, title: "Japanese Ramen", author: "Takeshi Yamamoto", time: "45 min", servings: 4, image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&q=80", category: "Asian", description: "Rich and flavorful ramen with tender pork, soft-boiled egg, and fresh toppings.", ingredients: ["Ramen noodles", "Pork belly", "4 eggs", "Chicken broth", "Soy sauce", "Miso paste", "Green onions", "Nori", "Corn"], instructions: ["Make broth with chicken stock and miso", "Cook pork belly until tender", "Soft boil eggs", "Cook ramen noodles", "Assemble bowl with broth", "Top with pork, egg, and garnishes"]},
    {id: 17, title: "Korean Bibimbap", author: "Ji-Woo Kim", time: "40 min", servings: 4, image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800&q=80", category: "Asian", description: "Colorful rice bowl with seasoned vegetables, beef, and spicy gochujang sauce.", ingredients: ["4 cups rice", "1 lb beef", "Spinach", "Bean sprouts", "Carrots", "Mushrooms", "4 eggs", "Gochujang", "Sesame oil", "Sesame seeds"], instructions: ["Cook rice", "Marinate and cook beef", "Sauté vegetables separately", "Fry eggs sunny side up", "Arrange ingredients on rice", "Top with egg and sauce", "Mix before eating"]},
    // American (4 recipes)
    {id: 5, title: "Classic Beef Burger", author: "Mike Thompson", time: "20 min", servings: 4, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80", category: "American", description: "Juicy beef patty with all the fixings on a toasted brioche bun.", ingredients: ["1 lb ground beef", "4 brioche buns", "Lettuce", "Tomato", "Onion", "Cheese slices", "Pickles", "Condiments"], instructions: ["Form beef into 4 patties", "Season with salt and pepper", "Grill or pan-fry for 4-5 minutes per side", "Add cheese in last minute", "Toast buns", "Assemble with toppings"]},
    {id: 18, title: "BBQ Pulled Pork Sandwich", author: "Jake Morrison", time: "240 min", servings: 8, image: "https://images.unsplash.com/photo-1619221882114-62d1f5b4fe95?w=800&q=80", category: "American", description: "Slow-cooked pork shoulder with smoky BBQ sauce served on soft buns.", ingredients: ["4 lb pork shoulder", "BBQ rub", "2 cups BBQ sauce", "8 hamburger buns", "Coleslaw", "Onion", "Pickles"], instructions: ["Rub pork with spices", "Slow cook at 275°F for 4 hours", "Shred pork with forks", "Mix with BBQ sauce", "Toast buns", "Pile pork on buns", "Top with coleslaw"]},
    {id: 19, title: "Mac and Cheese", author: "Betty Johnson", time: "35 min", servings: 6, image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=800&q=80", category: "American", description: "Creamy, cheesy pasta baked to perfection with a golden breadcrumb topping.", ingredients: ["1 lb elbow macaroni", "4 cups cheddar cheese", "2 cups milk", "1/4 cup butter", "1/4 cup flour", "Breadcrumbs", "Salt and pepper"], instructions: ["Cook macaroni", "Make cheese sauce with butter, flour, milk", "Stir in cheese until melted", "Mix pasta with sauce", "Top with breadcrumbs", "Bake at 350°F for 20 minutes"]},
    {id: 20, title: "Southern Fried Chicken", author: "Martha Williams", time: "60 min", servings: 6, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80", category: "American", description: "Crispy, golden fried chicken with a perfectly seasoned coating.", ingredients: ["3 lbs chicken pieces", "2 cups buttermilk", "3 cups flour", "2 tsp paprika", "Cayenne pepper", "Salt and pepper", "Vegetable oil for frying"], instructions: ["Marinate chicken in buttermilk overnight", "Mix flour with spices", "Coat chicken in seasoned flour", "Heat oil to 350°F", "Fry chicken until golden", "Drain on paper towels", "Serve hot"]}
];


// State management
const state = {
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    likedRecipes: JSON.parse(localStorage.getItem('likedRecipes')) || [],
    theme: localStorage.getItem('theme') || 'light',
    userRecipes: JSON.parse(localStorage.getItem('userRecipes')) || [],
    notifications: JSON.parse(localStorage.getItem('notifications')) !== false,
    currentCategory: 'all'
};

// App controller
const app = {
    currentSearchTerm: '',
    init() {
        this.setTheme(state.theme);
        this.updateAuthUI();
        this.setupEventListeners();
        this.navigate(window.location.hash.slice(1) || 'home');
    },
    setupEventListeners() {
        document.getElementById('mobileToggle')?.addEventListener('click', () => {
            const menu = document.getElementById('navMenu');
            const toggle = document.getElementById('mobileToggle');
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                this.navigate(page);
                document.getElementById('navMenu')?.classList.remove('active');
                document.getElementById('mobileToggle')?.classList.remove('active');
            });
        });
        window.addEventListener('hashchange', () => {
            this.navigate(window.location.hash.slice(1) || 'home');
        });
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal();
            }
        });
    },
    navigate(page) {
        window.location.hash = page;
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.dataset.page === page);
        });
        const appElement = document.getElementById('app');
        appElement.innerHTML = this.renderPage(page);
        appElement.classList.add('fade-in');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.setupPageListeners(page);
    },
    renderPage(page) {
        const pages = {
            home: this.renderHome,
            recipes: this.renderRecipes,
            add: this.renderAddRecipe,
            profile: this.renderProfile,
            settings: this.renderSettings,
            signin: this.renderSignIn,
            signup: this.renderSignUp
        };
        if (['add', 'profile', 'settings'].includes(page) && !state.isAuthenticated) {
            return this.renderSignIn();
        }
        if (page.startsWith('recipe-')) {
            const id = parseInt(page.split('-')[1]);
            return this.renderRecipeDetail(id);
        }
        return pages[page] ? pages[page].call(this) : pages.home.call(this);
    },
    setupPageListeners(page) {
        document.querySelectorAll('.category-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const category = tab.dataset.category;
                state.currentCategory = category;
                if (page === 'home') {
                    const grid = document.getElementById('featuredGrid');
                    if (grid) {
                        grid.innerHTML = this.renderFeaturedRecipes(category);
                        this.setupPageListeners('home');
                    }
                } else if (page === 'recipes') {
                    this.filterRecipesByCategory(category);
                }
            });
        });
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!state.isAuthenticated) {
                    alert('Please sign in to like recipes');
                    this.navigate('signin');
                    return;
                }
                const id = parseInt(btn.dataset.id);
                this.toggleLike(id);
                btn.classList.toggle('liked', state.likedRecipes.includes(id));
                const svg = btn.querySelector('svg');
                if (state.likedRecipes.includes(id)) {
                    svg.setAttribute('fill', 'currentColor');
                } else {
                    svg.setAttribute('fill', 'none');
                }
            });
        });
        document.querySelectorAll('.recipe-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.like-btn')) {
                    const id = parseInt(card.dataset.id);
                    this.openRecipeModal(id);
                }
            });
        });
        document.querySelectorAll('.featured-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const id = parseInt(card.dataset.id);
                this.openRecipeModal(id);
            });
        });
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentSearchTerm = e.target.value.toLowerCase();
                this.filterRecipes();
            });
        }
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.checked = state.theme === 'dark';
            themeToggle.addEventListener('change', (e) => {
                this.setTheme(e.target.checked ? 'dark' : 'light');
            });
        }
        const imageInput = document.getElementById('recipeImage');
        if (imageInput) {
            imageInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const preview = document.getElementById('imagePreview');
                        preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
                        preview.classList.remove('hidden');
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
        document.querySelectorAll('.profile-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.profile-tab').forEach(t => {
                    t.classList.remove('active');
                    t.style.borderBottomColor = 'transparent';
                    t.style.color = 'var(--text-light)';
                });
                this.classList.add('active');
                this.style.borderBottomColor = 'var(--primary)';
                this.style.color = 'var(--primary)';
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.style.display = 'none';
                });
                const tabName = this.dataset.tab;
                document.getElementById(tabName).style.display = 'block';
                app.setupPageListeners('profile');
            });
        });
    },
    openRecipeModal(id) {
        const allRecipes = [...recipes, ...state.userRecipes];
        const recipe = allRecipes.find(r => r.id === id);
        if (!recipe) return;
        const isOwner = state.userRecipes.some(r => r.id === id);
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `<div class="modal-content"><div class="modal-header"><h2>${recipe.title}</h2><button class="modal-close" onclick="app.closeModal()"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div><div class="modal-body"><div class="recipe-detail-image"><img src="${recipe.image}" alt="${recipe.title}" /></div><div style="text-align: center; margin: 1.5rem 0;"><span class="recipe-category">${recipe.category}</span><p style="color: var(--text-light); margin-top: 0.5rem;">by ${recipe.author}</p></div><div class="recipe-info"><div class="info-item"><strong>${recipe.time}</strong><span>Prep Time</span></div><div class="info-item"><strong>${recipe.servings}</strong><span>Servings</span></div><div class="info-item"><strong>${recipe.category}</strong><span>Category</span></div></div><p style="margin: 1.5rem 0; line-height: 1.6;">${recipe.description}</p><div class="recipe-section"><h2>Ingredients</h2><ul class="ingredients-list">${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul></div><div class="recipe-section"><h2>Instructions</h2><ol class="instructions-list">${recipe.instructions.map(i => `<li>${i}</li>`).join('')}</ol></div>${isOwner ? `<div class="modal-actions"><button class="btn-primary" onclick="app.editRecipe(${recipe.id})">Edit Recipe</button><button class="btn-secondary" style="color: var(--accent); border-color: var(--accent);" onclick="app.deleteRecipe(${recipe.id})">Delete</button></div>` : ''}</div></div>`;
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('active'), 10);
    },
    closeModal() {
        const modal = document.querySelector('.modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    },
    filterRecipes() {
        const allRecipes = [...recipes, ...state.userRecipes];
        let filtered = allRecipes;
        if (this.currentSearchTerm) {
            filtered = filtered.filter(r => 
                r.title.toLowerCase().includes(this.currentSearchTerm) ||
                r.description.toLowerCase().includes(this.currentSearchTerm) ||
                r.category.toLowerCase().includes(this.currentSearchTerm) ||
                r.author.toLowerCase().includes(this.currentSearchTerm)
            );
        }
        if (state.currentCategory !== 'all') {
            filtered = filtered.filter(r => r.category === state.currentCategory);
        }
        const grid = document.querySelector('.recipe-grid');
        if (grid) {
            grid.innerHTML = filtered.length > 0 
                ? filtered.map(r => this.renderRecipeCard(r)).join('')
                : '<p style="text-align: center; color: var(--text-light); grid-column: 1/-1;">No recipes found</p>';
            this.setupPageListeners('recipes');
        }
    },
    filterRecipesByCategory(category) {
        state.currentCategory = category;
        this.filterRecipes();
    },
    editRecipe(id) {
        const recipe = state.userRecipes.find(r => r.id === id);
        if (!recipe) return;
        this.closeModal();
        sessionStorage.setItem('editingRecipe', JSON.stringify(recipe));
        this.navigate('add');
    },
    deleteRecipe(id) {
        if (!confirm('Are you sure you want to delete this recipe?')) return;
        state.userRecipes = state.userRecipes.filter(r => r.id !== id);
        localStorage.setItem('userRecipes', JSON.stringify(state.userRecipes));
        this.closeModal();
        const currentPage = window.location.hash.slice(1) || 'home';
        this.navigate(currentPage);
        alert('Recipe deleted successfully!');
    },
    toggleLike(id) {
        const index = state.likedRecipes.indexOf(id);
        if (index > -1) {
            state.likedRecipes.splice(index, 1);
        } else {
            state.likedRecipes.push(id);
        }
        localStorage.setItem('likedRecipes', JSON.stringify(state.likedRecipes));
    },
    setTheme(theme) {
        state.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    },
    updateAuthUI() {
        const guestElements = document.querySelectorAll('.guest-only');
        const authElements = document.querySelectorAll('.auth-only');
        if (state.isAuthenticated) {
            guestElements.forEach(el => el.style.display = 'none');
            authElements.forEach(el => el.style.display = 'flex');
        } else {
            guestElements.forEach(el => el.style.display = 'flex');
            authElements.forEach(el => el.style.display = 'none');
        }
    },
    signIn(email, password) {
        state.isAuthenticated = true;
        state.currentUser = { name: "John Doe", email };
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
        this.updateAuthUI();
        this.navigate('home');
    },
    signUp(name, email, password) {
        state.isAuthenticated = true;
        state.currentUser = { name, email };
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
        this.updateAuthUI();
        this.navigate('home');
    },
    signOut() {
        state.isAuthenticated = false;
        state.currentUser = null;
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('currentUser');
        this.updateAuthUI();
        this.navigate('home');
    },
    cancelEdit() {
        sessionStorage.removeItem('editingRecipe');
        this.navigate('profile');
    },
    updateProfile(field, value) {
        if (!state.currentUser) return;
        state.currentUser[field] = value;
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
        const currentPage = window.location.hash.slice(1) || 'home';
        this.navigate(currentPage);
    },
    openEditModal(type) {
        let modalContent = '';
        switch(type) {
            case 'name':
                modalContent = `<div class="modal-header"><h2>Edit Name</h2><button class="modal-close" onclick="app.closeModal()">×</button></div><div class="modal-body"><form id="editNameForm"><div class="form-group"><label>Full Name</label><input type="text" name="name" value="${state.currentUser?.name || ''}" required /></div><div class="form-actions"><button type="button" class="btn-secondary" onclick="app.closeModal()">Cancel</button><button type="submit" class="btn-primary">Save Changes</button></div></form></div>`;
                break;
            case 'email':
                modalContent = `<div class="modal-header"><h2>Edit Email</h2><button class="modal-close" onclick="app.closeModal()">×</button></div><div class="modal-body"><form id="editEmailForm"><div class="form-group"><label>Email Address</label><input type="email" name="email" value="${state.currentUser?.email || ''}" required /></div><div class="form-actions"><button type="button" class="btn-secondary" onclick="app.closeModal()">Cancel</button><button type="submit" class="btn-primary">Save Changes</button></div></form></div>`;
                break;
            case 'bio':
                modalContent = `<div class="modal-header"><h2>Edit Bio</h2><button class="modal-close" onclick="app.closeModal()">×</button></div><div class="modal-body"><form id="editBioForm"><div class="form-group"><label>Bio</label><textarea name="bio" rows="4" placeholder="Tell us about yourself">${state.currentUser?.bio || ''}</textarea></div><div class="form-actions"><button type="button" class="btn-secondary" onclick="app.closeModal()">Cancel</button><button type="submit" class="btn-primary">Save Changes</button></div></form></div>`;
                break;
            case 'photo':
                modalContent = `<div class="modal-header"><h2>Upload Profile Photo</h2><button class="modal-close" onclick="app.closeModal()">×</button></div><div class="modal-body"><form id="editPhotoForm"><div class="form-group"><input type="file" id="profilePhoto" name="photo" accept="image/*" required style="display: none;" /><label for="profilePhoto" class="file-upload-label"><span>Choose Photo</span></label><div id="photoPreview" class="file-preview" style="margin-top: 1rem;">${state.currentUser?.photo ? `<img src="${state.currentUser.photo}" alt="Current photo" style="max-width: 200px; border-radius: 12px;">` : ''}</div></div><div class="form-actions"><button type="button" class="btn-secondary" onclick="app.closeModal()">Cancel</button><button type="submit" class="btn-primary">Save Photo</button></div></form></div>`;
                break;
        }
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `<div class="modal-content">${modalContent}</div>`;
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('active'), 10);
        if (type === 'photo') {
            document.getElementById('profilePhoto')?.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        document.getElementById('photoPreview').innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 200px; border-radius: 12px;">`;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    },
    renderHome() {
        return `<div class="page"><div class="container"><section class="hero"><div><h1 class="hero-title">Discover & Share<span class="highlight">Delicious Recipes</span></h1><p class="hero-subtitle">Join our community of food lovers. Explore thousands of recipes, share your culinary creations, and find inspiration for your next meal.</p><div class="hero-actions"><button class="btn-primary" onclick="app.navigate('recipes')">Explore Recipes</button><button class="btn-secondary" onclick="app.navigate('signup')">Get Started Free</button></div></div><div class="hero-image"><img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80" alt="Delicious food" /></div></section><section class="features"><div class="features-grid">${this.renderFeatureCard('search', 'Discover Recipes', 'Browse thousands of recipes from around the world.')}${this.renderFeatureCard('plus', 'Share Creations', 'Upload your own recipes with photos and instructions.')}${this.renderFeatureCard('users', 'Join Community', 'Connect with fellow food enthusiasts.')}</div></section><section class="featured-section"><h2 class="section-title">Featured Recipes</h2><div class="featured-grid-four" id="featuredGrid">${this.renderFeaturedRecipes('all')}</div></section><section class="about-home-section"><div class="about-home-content"><div class="about-home-text"><h2 class="section-title">About Food Hunger</h2><p>Food Hunger is a vibrant community platform where food lovers come together to share, discover, and celebrate the joy of cooking. Our mission is to make cooking accessible and enjoyable for everyone, whether you're a seasoned chef or just starting your culinary journey.</p><p>We believe that great recipes should be shared, and that everyone has something unique to contribute to the world of food. Built with passion by food enthusiasts, for food enthusiasts, Food Hunger provides a simple yet powerful platform to organize your recipes, discover new dishes, and connect with a community that shares your love for cooking.</p><div class="about-stats"><div class="stat-item"><strong>${recipes.length + state.userRecipes.length}</strong><span>Recipes</span></div><div class="stat-item"><strong>${new Set(recipes.map(r => r.category)).size}</strong><span>Categories</span></div><div class="stat-item"><strong>100+</strong><span>Food Lovers</span></div></div></div><div class="about-home-image"><img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" alt="About Food Hunger" /></div></div></section></div></div>`;
    },
    renderFeaturedRecipes(category) {
        const featuredRecipes = [recipes[0], recipes[1], recipes[2], recipes[3]];
        return featuredRecipes.map(recipe => `<div class="featured-card" data-id="${recipe.id}"><div class="featured-image"><img src="${recipe.image}" alt="${recipe.title}" /><div class="featured-category">${recipe.category.toUpperCase()}</div></div><div class="featured-content"><h3>${recipe.title}</h3><p class="featured-description">${recipe.description}</p><div class="featured-meta"><span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>${recipe.time}</span><span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>${recipe.servings} servings</span></div></div></div>`).join('');
    },
    renderFeatureCard(icon, title, desc) {
        const icons = {search: '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>'};
        return `<div class="feature-card"><div class="feature-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icons[icon]}</svg></div><h3>${title}</h3><p>${desc}</p></div>`;
    },
    renderRecipes() {
        const allRecipes = [...recipes, ...state.userRecipes];
        const categories = ['all', ...new Set(recipes.map(r => r.category))];
        return `<div class="page"><div class="container"><div class="page-header"><h1>All Recipes</h1><div class="search-bar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg><input type="text" placeholder="Search recipes..." id="searchInput" /></div></div><div class="category-filter"><div class="category-tabs">${categories.map(cat => `<button class="category-tab ${cat === 'all' ? 'active' : ''}" data-category="${cat}">${cat === 'all' ? 'All' : cat}</button>`).join('')}</div></div><div class="recipe-grid">${allRecipes.map(r => this.renderRecipeCard(r)).join('')}</div></div></div>`;
    },
    renderRecipeCard(recipe) {
        const isLiked = state.likedRecipes.includes(recipe.id);
        const isAuthenticated = state.isAuthenticated;
        return `<div class="recipe-card" data-id="${recipe.id}"><div class="recipe-image"><img src="${recipe.image}" alt="${recipe.title}" /><button class="like-btn ${isLiked ? 'liked' : ''} ${!isAuthenticated ? 'disabled' : ''}" data-id="${recipe.id}" ${!isAuthenticated ? 'title="Sign in to like recipes"' : ''}><svg width="20" height="20" viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button></div><div class="recipe-content"><span class="recipe-category">${recipe.category}</span><h3>${recipe.title}</h3><p>${recipe.description}</p><div class="recipe-meta"><span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>${recipe.time}</span><span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>${recipe.servings} servings</span></div></div></div>`;
    },
    renderAddRecipe() {
        const editingRecipe = sessionStorage.getItem('editingRecipe');
        const recipe = editingRecipe ? JSON.parse(editingRecipe) : null;
        const isEditing = !!recipe;
        return `<div class="page"><div class="container"><div class="form-container"><h1>${isEditing ? 'Edit Recipe' : 'Share Your Recipe'}</h1><p style="text-align: center; color: var(--text-light); margin-bottom: 2rem;">${isEditing ? 'Update your recipe details' : 'Share your culinary creation with the community'}</p><form id="recipeForm"><input type="hidden" name="recipeId" value="${isEditing ? recipe.id : ''}" /><div class="form-group"><label>Recipe Title *</label><input type="text" name="title" required placeholder="Enter recipe name" value="${isEditing ? recipe.title : ''}" /></div><div class="form-group"><label>Category *</label><select name="category" required><option value="">Select category</option><option ${isEditing && recipe.category === 'Healthy' ? 'selected' : ''}>Healthy</option><option ${isEditing && recipe.category === 'Dessert' ? 'selected' : ''}>Dessert</option><option ${isEditing && recipe.category === 'Italian' ? 'selected' : ''}>Italian</option><option ${isEditing && recipe.category === 'Asian' ? 'selected' : ''}>Asian</option><option ${isEditing && recipe.category === 'American' ? 'selected' : ''}>American</option></select></div><div class="form-group"><label>Prep Time *</label><input type="text" name="time" required placeholder="e.g., 30 min" value="${isEditing ? recipe.time : ''}" /></div><div class="form-group"><label>Servings *</label><input type="number" name="servings" required placeholder="e.g., 4" value="${isEditing ? recipe.servings : ''}" /></div><div class="form-group"><label>Description *</label><textarea name="description" rows="3" required placeholder="Brief description">${isEditing ? recipe.description : ''}</textarea></div><div class="form-group"><label>Ingredients * (one per line)</label><textarea name="ingredients" rows="6" required placeholder="2 cups flour\n1 cup sugar\n3 eggs">${isEditing ? recipe.ingredients.join('\n') : ''}</textarea></div><div class="form-group"><label>Instructions * (one per line)</label><textarea name="instructions" rows="8" required placeholder="Preheat oven to 350°F\nMix dry ingredients\nAdd wet ingredients">${isEditing ? recipe.instructions.join('\n') : ''}</textarea></div><div class="form-group"><label>Recipe Image *</label><input type="file" id="recipeImage" name="image" accept="image/*" ${isEditing ? '' : 'required'} style="display: none;" /><label for="recipeImage" class="file-upload-label"><span>${isEditing ? 'Change Image (optional)' : 'Upload Image'}</span></label><div id="imagePreview" class="file-preview ${isEditing ? '' : 'hidden'}">${isEditing ? `<img src="${recipe.image}" alt="Current image">` : ''}</div><input type="hidden" name="existingImage" value="${isEditing ? recipe.image : ''}" /></div><div class="form-actions"><button type="button" class="btn-secondary" onclick="app.cancelEdit()">Cancel</button><button type="submit" class="btn-primary">${isEditing ? 'Update Recipe' : 'Publish Recipe'}</button></div></form></div></div></div>`;
    },
    renderProfile() {
        const userRecipesList = state.userRecipes.length > 0 ? state.userRecipes.map(r => this.renderRecipeCard(r)).join('') : '<p style="text-align: center; color: var(--text-light); grid-column: 1/-1;">No recipes yet. Start sharing your creations!</p>';
        const allRecipes = [...recipes, ...state.userRecipes];
        const likedRecipesList = state.likedRecipes.map(id => allRecipes.find(r => r.id === id)).filter(r => r).map(r => this.renderRecipeCard(r)).join('');
        const likedContent = likedRecipesList || '<p style="text-align: center; color: var(--text-light); grid-column: 1/-1;">No saved recipes yet. Start liking recipes to see them here!</p>';
        const userPhoto = state.currentUser?.photo || null;
        const userBio = state.currentUser?.bio || 'Food enthusiast & home chef';
        return `<div class="page"><div class="container"><div style="max-width: 900px; margin: 0 auto;"><div style="text-align: center; padding: 2rem; background: var(--surface); border-radius: 16px; margin-bottom: 2rem;"><div style="width: 100px; height: 100px; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; overflow: hidden;">${userPhoto ? `<img src="${userPhoto}" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;">` : '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="7" r="4"></circle><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path></svg>'}</div><h1>${state.currentUser?.name || 'John Doe'}</h1><p style="color: var(--text-light);">${userBio}</p><div style="display: flex; justify-content: center; gap: 2rem; margin-top: 1.5rem;"><div><strong>${state.userRecipes.length}</strong><br><span style="color: var(--text-light);">Recipes</span></div><div><strong>${state.likedRecipes.length}</strong><br><span style="color: var(--text-light);">Saved</span></div></div><button class="btn-primary" onclick="app.navigate('settings')" style="margin-top: 1.5rem;">Settings</button></div><div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 2px solid var(--border);"><button class="profile-tab active" data-tab="my-recipes" style="padding: 1rem 1.5rem; background: none; border: none; border-bottom: 3px solid var(--primary); font-weight: 600; color: var(--primary); cursor: pointer;">My Recipes</button><button class="profile-tab" data-tab="saved-recipes" style="padding: 1rem 1.5rem; background: none; border: none; border-bottom: 3px solid transparent; font-weight: 600; color: var(--text-light); cursor: pointer;">Saved Recipes</button></div><div id="my-recipes" class="tab-content"><div class="recipe-grid">${userRecipesList}</div></div><div id="saved-recipes" class="tab-content" style="display: none;"><div class="recipe-grid">${likedContent}</div></div></div></div></div>`;
    },
    renderSettings() {
        return `<div class="page"><div class="container"><div class="settings-container"><h1 style="margin-bottom: 2rem;">Settings</h1><div class="settings-section"><h3>Profile Settings</h3><div class="setting-item"><div><strong>Name</strong><p style="color: var(--text-light); font-size: 0.9rem;">${state.currentUser?.name || 'John Doe'}</p></div><button class="btn-text" onclick="app.openEditModal('name')">Edit</button></div><div class="setting-item"><div><strong>Email</strong><p style="color: var(--text-light); font-size: 0.9rem;">${state.currentUser?.email || 'john@example.com'}</p></div><button class="btn-text" onclick="app.openEditModal('email')">Edit</button></div><div class="setting-item"><div><strong>Profile Photo</strong><p style="color: var(--text-light); font-size: 0.9rem;">${state.currentUser?.photo ? 'Photo uploaded' : 'Upload your photo'}</p></div><button class="btn-text" onclick="app.openEditModal('photo')">Upload</button></div><div class="setting-item"><div><strong>Bio</strong><p style="color: var(--text-light); font-size: 0.9rem;">${state.currentUser?.bio || 'Tell us about yourself'}</p></div><button class="btn-text" onclick="app.openEditModal('bio')">Edit</button></div></div><div class="settings-section"><h3>Preferences</h3><div class="setting-item"><div><strong>Dark Mode</strong><p style="color: var(--text-light); font-size: 0.9rem;">Switch to dark theme</p></div><label class="toggle-switch"><input type="checkbox" id="themeToggle"><span class="toggle-slider"></span></label></div></div><div class="settings-section"><h3>Account</h3><div class="setting-item"><button class="btn-secondary" onclick="app.signOut()">Logout</button></div></div></div></div></div>`;
    },
    renderSignIn() {
        return `<div class="page"><div class="container"><div class="auth-container"><div class="auth-box"><h1>Welcome Back</h1><p class="auth-subtitle">Sign in to access your recipes</p><form id="signinForm"><div class="form-group"><label>Email Address</label><input type="email" name="email" required placeholder="your@email.com" /></div><div class="form-group"><label>Password</label><input type="password" name="password" required placeholder="Enter your password" /></div><button type="submit" class="btn-primary" style="width: 100%; justify-content: center; margin-top: 1rem;">Sign In</button></form><div class="auth-footer">Don't have an account? <a onclick="app.navigate('signup')">Sign up</a></div></div></div></div></div>`;
    },
    renderSignUp() {
        return `<div class="page"><div class="container"><div class="auth-container"><div class="auth-box"><h1>Join Food Hunger</h1><p class="auth-subtitle">Create your free account today</p><form id="signupForm"><div class="form-group"><label>Full Name</label><input type="text" name="name" required placeholder="John Doe" /></div><div class="form-group"><label>Email Address</label><input type="email" name="email" required placeholder="your@email.com" /></div><div class="form-group"><label>Password</label><input type="password" name="password" required placeholder="Create a password" /></div><button type="submit" class="btn-primary" style="width: 100%; justify-content: center; margin-top: 1rem;">Create Account</button></form><div class="auth-footer">Already have an account? <a onclick="app.navigate('signin')">Sign in</a></div></div></div></div></div>`;
    }
};

document.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id === 'signinForm') {
        const formData = new FormData(e.target);
        app.signIn(formData.get('email'), formData.get('password'));
    }
    if (e.target.id === 'signupForm') {
        const formData = new FormData(e.target);
        app.signUp(formData.get('name'), formData.get('email'), formData.get('password'));
    }
    if (e.target.id === 'editNameForm') {
        const formData = new FormData(e.target);
        app.updateProfile('name', formData.get('name'));
        app.closeModal();
        alert('Name updated successfully!');
    }
    if (e.target.id === 'editEmailForm') {
        const formData = new FormData(e.target);
        app.updateProfile('email', formData.get('email'));
        app.closeModal();
        alert('Email updated successfully!');
    }
    if (e.target.id === 'editBioForm') {
        const formData = new FormData(e.target);
        app.updateProfile('bio', formData.get('bio'));
        app.closeModal();
        alert('Bio updated successfully!');
    }
    if (e.target.id === 'editPhotoForm') {
        const formData = new FormData(e.target);
        const photoFile = formData.get('photo');
        if (photoFile && photoFile.size > 0) {
            const reader = new FileReader();
            reader.onload = (e) => {
                app.updateProfile('photo', e.target.result);
                app.closeModal();
                alert('Profile photo updated successfully!');
            };
            reader.readAsDataURL(photoFile);
        }
    }
    if (e.target.id === 'recipeForm') {
        const formData = new FormData(e.target);
        const imageFile = formData.get('image');
        const recipeId = formData.get('recipeId');
        const isEditing = recipeId && recipeId !== '';
        const processRecipe = (imageData) => {
            const recipeData = {
                id: isEditing ? parseInt(recipeId) : Date.now(),
                title: formData.get('title'),
                author: state.currentUser?.name || 'Anonymous',
                time: formData.get('time'),
                servings: parseInt(formData.get('servings')),
                category: formData.get('category'),
                description: formData.get('description'),
                image: imageData,
                ingredients: formData.get('ingredients').split('\n').filter(i => i.trim()),
                instructions: formData.get('instructions').split('\n').filter(i => i.trim())
            };
            if (isEditing) {
                const index = state.userRecipes.findIndex(r => r.id === recipeData.id);
                if (index !== -1) {
                    state.userRecipes[index] = recipeData;
                }
                sessionStorage.removeItem('editingRecipe');
                alert('Recipe updated successfully!');
            } else {
                state.userRecipes.push(recipeData);
                alert('Recipe published successfully!');
            }
            localStorage.setItem('userRecipes', JSON.stringify(state.userRecipes));
            app.navigate('profile');
        };
        if (imageFile && imageFile.size > 0) {
            const reader = new FileReader();
            reader.onload = (e) => processRecipe(e.target.result);
            reader.readAsDataURL(imageFile);
        } else {
            processRecipe(formData.get('existingImage'));
        }
    }
    
});

document.addEventListener('DOMContentLoaded', () => app.init());