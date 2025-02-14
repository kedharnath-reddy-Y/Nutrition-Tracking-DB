document.addEventListener("DOMContentLoaded", () => {
    fetchFoods();
});

async function fetchFoods() {
    try {
        const response = await fetch("http://localhost:3000/api/foods");
        const responseData = await response.json();

        if (responseData.success && Array.isArray(responseData.data)) {
            renderFoodItems(responseData.data);
        } else {
            showError("Failed to load menu items");
        }
    } catch (error) {
        console.error("Error fetching food data:", error);
        showError("Failed to load menu items");
    }
}

function renderFoodItems(foods) {
    const foodList = document.getElementById("food-list");
    foodList.innerHTML = "";

    foods.forEach(food => {
        const card = createFoodCard(food);
        foodList.appendChild(card);
    });
}

function createFoodCard(food) {
    // Create card container
    const card = document.createElement("div");
    card.className = "card";

    // Create card image section with dynamic image URL
    const imageDiv = document.createElement("div");
    imageDiv.className = "card-image";
    const img = document.createElement("img");
    img.src = food.image_url || "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29va2VkJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D"; // Use dynamic image URL or fallback image
    img.alt = food.name;
    imageDiv.appendChild(img);

    // Create card text section
    const textDiv = document.createElement("div");
    textDiv.className = "card-text";

    // Add nutrition information at the top
    const nutritionInfo = document.createElement("div");
    nutritionInfo.className = "nutrition-info";
    
    const nutritionItems = [
        { label: "Calories", value: food.calories },
        { label: "Protein", value: `${food.protein}g` },
        { label: "Carbs", value: `${food.carbs}g` },
        { label: "Fats", value: `${food.fats}g` },
        { label: "Sugar", value: `${food.sugar}g` },
        { label: "Fiber", value: `${food.fiber}g` }
    ];

    nutritionItems.forEach(item => {
        const nutritionItem = document.createElement("div");
        nutritionItem.className = "nutrition-item";
        nutritionItem.innerHTML = `<strong>${item.label}:</strong> ${item.value}`;
        nutritionInfo.appendChild(nutritionItem);
    });

    // Add main content
    const mealType = document.createElement("p");
    mealType.className = "card-meal-type";
    mealType.textContent = `${food.category}/${food.cuisine}`;

    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = food.name;

    // Add additional details
    const details = document.createElement("div");
    details.className = "card-details";
    details.innerHTML = `
        <p><strong>Serving Size:</strong> ${food.serving_size}</p>
        <p><strong>Source:</strong> ${food.source_name || "N/A"} (${food.source_type || "N/A"})</p>
        <p><strong>Location:</strong> ${food.location || "N/A"}</p>
        <p><strong>Contact:</strong> ${food.contact || "N/A"}</p>
        <p><strong>Available On:</strong> ${food.available_on || "N/A"}</p>
    `;

    // Assemble the text section
    textDiv.appendChild(nutritionInfo);
    textDiv.appendChild(mealType);
    textDiv.appendChild(title);
    textDiv.appendChild(details);

    // Create price section
    const priceDiv = document.createElement("div");
    priceDiv.className = "card-price";
    priceDiv.innerHTML = `<strong>₹${food.price ? food.price.toFixed(2) : "N/A"}</strong>`;

    // Assemble the card
    card.appendChild(imageDiv);
    card.appendChild(textDiv);
    card.appendChild(priceDiv);

    return card;
}

function showError(message) {
    const container = document.getElementById("food-list");
    const errorDiv = document.createElement("div");
    errorDiv.className = "error";
    errorDiv.textContent = message;
    container.innerHTML = '';
    container.appendChild(errorDiv);
}
