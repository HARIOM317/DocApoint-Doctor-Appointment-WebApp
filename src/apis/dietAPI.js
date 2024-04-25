const dietAPI = [
  {
    id: 1,
    goal_name: "Weight Loss",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Overnight Oats",
        quantity:
          "1/2 cup rolled oats, 1 cup almond milk, 1 tablespoon chia seeds, 1/2 cup berries, 1 tablespoon nuts/seeds",
        availableNutrition: "Rich in fiber, protein, and healthy fats",
        benefits: "It helps keep you full and satisfied.",
        img:
          "https://img.freepik.com/free-photo/top-view-plate-with-keto-diet-food-golden-fork-knife_23-2149260372.jpg?t=st=1713980293~exp=1713983893~hmac=1d0851b34571a876626b7b0aec0c91ce772673d2a50918630796cd819c909b6f&w=996",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Fresh Fruit",
        quantity: "1 medium-sized fruit (e.g., apple, pear, banana)",
        availableNutrition: "Provides vitamins, minerals, and antioxidants",
        benefits: "It helps curb sweet cravings",
        img:
          "https://img.freepik.com/free-photo/top-view-plate-with-keto-diet-food-golden-fork-knife_23-2149260372.jpg?t=st=1713980293~exp=1713983893~hmac=1d0851b34571a876626b7b0aec0c91ce772673d2a50918630796cd819c909b6f&w=996",
        type: "vegetarian",
      },

      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa Salad",
        quantity:
          "1/2 cup cooked quinoa, mixed vegetables, lemon-tahini dressing",
        availableNutrition: "High in protein, fiber, and antioxidants",
        benefits: "It helps maintain energy levels",
        img:
          "https://img.freepik.com/free-photo/top-view-plate-with-keto-diet-food-golden-fork-knife_23-2149260372.jpg?t=st=1713980293~exp=1713983893~hmac=1d0851b34571a876626b7b0aec0c91ce772673d2a50918630796cd819c909b6f&w=996",
        type: "vegetarian",
      },

      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Greek Yogurt with Honey",
        quantity:
          "1/2 cup Greek yogurt, 1 teaspoon honey, sprinkle of cinnamon",
        availableNutrition: "Rich in protein and probiotics",
        benefits: "It supports gut health and satiety",
        img:
          "https://img.freepik.com/free-photo/top-view-plate-with-keto-diet-food-golden-fork-knife_23-2149260372.jpg?t=st=1713980293~exp=1713983893~hmac=1d0851b34571a876626b7b0aec0c91ce772673d2a50918630796cd819c909b6f&w=996",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Air-Popped Popcorn with Nutritional Yeast",
        quantity: "1 cup air-popped popcorn, sprinkle of nutritional yeast",
        availableNutrition: "Low in calories and high in fiber",
        benefits: "A light and satisfying snack",
        img:
          "https://img.freepik.com/free-photo/top-view-plate-with-keto-diet-food-golden-fork-knife_23-2149260372.jpg?t=st=1713980293~exp=1713983893~hmac=1d0851b34571a876626b7b0aec0c91ce772673d2a50918630796cd819c909b6f&w=996",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Lentil Soup with Roasted Vegetables",
        quantity: "1 cup lentil soup, side of roasted vegetables",
        availableNutrition: "High in fiber and protein",
        benefits: "It helps keep you full and aids in digestion",
        img:
          "https://img.freepik.com/free-photo/top-view-plate-with-keto-diet-food-golden-fork-knife_23-2149260372.jpg?t=st=1713980293~exp=1713983893~hmac=1d0851b34571a876626b7b0aec0c91ce772673d2a50918630796cd819c909b6f&w=996",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Scrambled Eggs with Spinach and Tomatoes",
        quantity: "2 eggs, 1 cup spinach, 1/2 cup diced tomatoes",
        availableNutrition: "High in protein and vitamins",
        benefits: "Promotes satiety and muscle repair",
        img:
          "https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34691.jpg?t=st=1713980532~exp=1713984132~hmac=f2652d274bcedb49dc2e4a56202a9daaec0bfa617e47406e0797e1139b343462&w=996",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Chia Seeds",
        quantity: "1/2 cup Greek yogurt, 1 tablespoon chia seeds",
        availableNutrition: "Provides probiotics and omega-3s",
        benefits: "Supports gut health and reduces inflammation",
        img:
          "https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34691.jpg?t=st=1713980532~exp=1713984132~hmac=f2652d274bcedb49dc2e4a56202a9daaec0bfa617e47406e0797e1139b343462&w=996",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Breast with Quinoa and Vegetables",
        quantity:
          "4 oz chicken breast, 1/2 cup cooked quinoa, mixed vegetables",
        availableNutrition: "High in protein and fiber",
        benefits: "Aids in muscle repair and promotes fullness",
        img:
          "https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34691.jpg?t=st=1713980532~exp=1713984132~hmac=f2652d274bcedb49dc2e4a56202a9daaec0bfa617e47406e0797e1139b343462&w=996",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Turkey Breast with Whole Grain Crackers",
        quantity: "2 oz turkey breast, 4 whole grain crackers",
        availableNutrition: "Lean protein and complex carbs",
        benefits: "Supports muscle growth and energy levels",
        img:
          "https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34691.jpg?t=st=1713980532~exp=1713984132~hmac=f2652d274bcedb49dc2e4a56202a9daaec0bfa617e47406e0797e1139b343462&w=996",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Mixed Nuts",
        quantity: "1/4 cup mixed nuts",
        availableNutrition: "Provides healthy fats and protein",
        benefits: "Promotes satiety and provides energy",
        img:
          "https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34691.jpg?t=st=1713980532~exp=1713984132~hmac=f2652d274bcedb49dc2e4a56202a9daaec0bfa617e47406e0797e1139b343462&w=996",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Baked Salmon with Brown Rice and Mixed Vegetables",
        quantity: "4 oz salmon, 1/2 cup brown rice, mixed vegetables",
        availableNutrition: "Rich in omega-3 fatty acids",
        benefits: "Reduces inflammation and supports heart health",
        img:
          "https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34691.jpg?t=st=1713980532~exp=1713984132~hmac=f2652d274bcedb49dc2e4a56202a9daaec0bfa617e47406e0797e1139b343462&w=996",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Avocado Toast",
        quantity:
          "1 slice whole grain bread, 1/2 avocado, sprinkle of sea salt and black pepper",
        availableNutrition: "Provides healthy fats and fiber",
        benefits: "Promotes satiety and supports heart health",
        img:
          "https://img.freepik.com/free-photo/flat-lay-plate-with-beans-rice_23-2148487809.jpg?t=st=1713980421~exp=1713984021~hmac=329c9000bd752d8712a7678ac6ddb0e798570964f21ec0ad230a937ec99090b1&w=996",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Berries",
        quantity: "1/2 cup Greek yogurt, 1/2 cup mixed berries",
        availableNutrition: "Rich in protein and antioxidants",
        benefits: "Supports gut health and reduces inflammation",
        img:
          "https://img.freepik.com/free-photo/flat-lay-plate-with-beans-rice_23-2148487809.jpg?t=st=1713980421~exp=1713984021~hmac=329c9000bd752d8712a7678ac6ddb0e798570964f21ec0ad230a937ec99090b1&w=996",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Black Bean Salad",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup black beans, mixed vegetables, lime-cilantro dressing",
        availableNutrition: "High in protein and fiber",
        benefits: "Aids in muscle repair and promotes fullness",
        img:
          "https://img.freepik.com/free-photo/flat-lay-plate-with-beans-rice_23-2148487809.jpg?t=st=1713980421~exp=1713984021~hmac=329c9000bd752d8712a7678ac6ddb0e798570964f21ec0ad230a937ec99090b1&w=996",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Almonds",
        quantity: "1/4 cup almonds",
        availableNutrition: "Provides healthy fats and protein",
        benefits: "Promotes satiety and provides energy",
        img:
          "https://img.freepik.com/free-photo/flat-lay-plate-with-beans-rice_23-2148487809.jpg?t=st=1713980421~exp=1713984021~hmac=329c9000bd752d8712a7678ac6ddb0e798570964f21ec0ad230a937ec99090b1&w=996",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Dark Chocolate",
        quantity: "1 oz dark chocolate",
        availableNutrition: "Provides antioxidants",
        benefits: "Help curb sweet cravings",
        img:
          "https://img.freepik.com/free-photo/flat-lay-plate-with-beans-rice_23-2148487809.jpg?t=st=1713980421~exp=1713984021~hmac=329c9000bd752d8712a7678ac6ddb0e798570964f21ec0ad230a937ec99090b1&w=996",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Grilled Salmon with Steamed Vegetables",
        quantity: "4 oz salmon, mixed vegetables",
        availableNutrition: "Rich in omega-3 fatty acids",
        benefits: "Reduces inflammation and supports heart health",
        img:
          "https://img.freepik.com/free-photo/flat-lay-plate-with-beans-rice_23-2148487809.jpg?t=st=1713980421~exp=1713984021~hmac=329c9000bd752d8712a7678ac6ddb0e798570964f21ec0ad230a937ec99090b1&w=996",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Junk Food",
        disadvantage:
          "High in unhealthy fats, sugars, and calories, leading to weight gain and increased risk of chronic diseases",
        img:
          "https://img.freepik.com/free-photo/sad-woman-with-apple-one-hand-cake-other_1163-1044.jpg?t=st=1713980642~exp=1713984242~hmac=264e7b185627786fe5caa44c3a4a953edef1f715dcd0dba70917d5013a195cdf&w=996",
      },
      {
        id: 2,
        dietName: "Sugary Drinks",
        disadvantage:
          "Sugary Drinks (e.g., Soda, Sweetened Beverages) Disadvantages to Weight Loss: High in empty calories, leading to weight gain and increased risk of obesity-related diseases",
        img:
          "https://img.freepik.com/free-photo/sad-woman-with-apple-one-hand-cake-other_1163-1044.jpg?t=st=1713980642~exp=1713984242~hmac=264e7b185627786fe5caa44c3a4a953edef1f715dcd0dba70917d5013a195cdf&w=996",
      },
      {
        id: 3,
        dietName: "Fast Food",
        disadvantage:
          "High in unhealthy fats, sugars, and sodium, leading to weight gain and increased risk of heart disease",
        img:
          "https://img.freepik.com/free-photo/sad-woman-with-apple-one-hand-cake-other_1163-1044.jpg?t=st=1713980642~exp=1713984242~hmac=264e7b185627786fe5caa44c3a4a953edef1f715dcd0dba70917d5013a195cdf&w=996",
      },
      {
        id: 4,
        dietName: "Processed Foods",
        disadvantage:
          "Often high in calories, unhealthy fats, sugars, and additives, leading to weight gain and increased risk of chronic diseases",
        img:
          "https://img.freepik.com/free-photo/sad-woman-with-apple-one-hand-cake-other_1163-1044.jpg?t=st=1713980642~exp=1713984242~hmac=264e7b185627786fe5caa44c3a4a953edef1f715dcd0dba70917d5013a195cdf&w=996",
      },
      {
        id: 5,
        dietName: "Fried Foods",
        disadvantage:
          "High in unhealthy fats and calories, leading to weight gain and increased risk of heart disease",
        img:
          "https://img.freepik.com/free-photo/sad-woman-with-apple-one-hand-cake-other_1163-1044.jpg?t=st=1713980642~exp=1713984242~hmac=264e7b185627786fe5caa44c3a4a953edef1f715dcd0dba70917d5013a195cdf&w=996",
      },
      {
        id: 6,
        dietName: "High-Calorie Snacks (e.g., Chips, Cookies)",
        disadvantage:
          "High in calories, sugars, and unhealthy fats, leading to weight gain and increased risk of chronic diseases",
        img:
          "https://img.freepik.com/free-photo/sad-woman-with-apple-one-hand-cake-other_1163-1044.jpg?t=st=1713980642~exp=1713984242~hmac=264e7b185627786fe5caa44c3a4a953edef1f715dcd0dba70917d5013a195cdf&w=996",
      },
      {
        id: 7,
        dietName: "Alcohol",
        disadvantage:
          "High in calories and sugars, leading to weight gain and increased risk of liver disease",
        img:
          "https://img.freepik.com/free-photo/sad-woman-with-apple-one-hand-cake-other_1163-1044.jpg?t=st=1713980642~exp=1713984242~hmac=264e7b185627786fe5caa44c3a4a953edef1f715dcd0dba70917d5013a195cdf&w=996",
      },
      {
        id: 8,
        dietName: "Highly Sweetened Breakfast Cereals",
        disadvantage:
          "High in sugars and calories, leading to weight gain and increased risk of obesity-related diseases",
        img:
          "https://img.freepik.com/free-photo/sad-woman-with-apple-one-hand-cake-other_1163-1044.jpg?t=st=1713980642~exp=1713984242~hmac=264e7b185627786fe5caa44c3a4a953edef1f715dcd0dba70917d5013a195cdf&w=996",
      },
      {
        id: 9,
        dietName: "High-Calorie Coffee Drinks",
        disadvantage:
          "High in calories, sugars, and unhealthy fats, leading to weight gain and increased risk of chronic diseases",
        img:
          "https://img.freepik.com/free-photo/sad-woman-with-apple-one-hand-cake-other_1163-1044.jpg?t=st=1713980642~exp=1713984242~hmac=264e7b185627786fe5caa44c3a4a953edef1f715dcd0dba70917d5013a195cdf&w=996",
      },
      {
        id: 10,
        dietName: "Sweets and Desserts",
        disadvantage:
          "High in sugars, unhealthy fats, and calories, leading to weight gain and increased risk of chronic diseases",
        img:
          "https://img.freepik.com/free-photo/sad-woman-with-apple-one-hand-cake-other_1163-1044.jpg?t=st=1713980642~exp=1713984242~hmac=264e7b185627786fe5caa44c3a4a953edef1f715dcd0dba70917d5013a195cdf&w=996",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Walking",
        time: "30-60 minutes",
        repetition: "Daily",
        benefits:
          "Burns calories, improves cardiovascular health, and boosts metabolism.",
        img:
          "https://img.freepik.com/free-photo/young-woman-gymnastic-pose_186202-2220.jpg?t=st=1713980764~exp=1713984364~hmac=d0a706b7f08d9da7df05096d5047ab614fed33cf20f4d5d522cf631f438a6110&w=996",
      },
      {
        id: 2,
        exerciseName: "Running",
        time: "20-30 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Burns more calories per minute than walking, improves cardiovascular health, and tones muscles.",
        img:
          "https://img.freepik.com/free-photo/young-woman-gymnastic-pose_186202-2220.jpg?t=st=1713980764~exp=1713984364~hmac=d0a706b7f08d9da7df05096d5047ab614fed33cf20f4d5d522cf631f438a6110&w=996",
      },

      {
        id: 3,
        exerciseName: "Cycling",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Burns calories, strengthens legs and core muscles, and improves cardiovascular health.",
        img:
          "https://img.freepik.com/free-photo/young-woman-gymnastic-pose_186202-2220.jpg?t=st=1713980764~exp=1713984364~hmac=d0a706b7f08d9da7df05096d5047ab614fed33cf20f4d5d522cf631f438a6110&w=996",
      },

      {
        id: 4,
        exerciseName: "Swimming",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Burns calories, tones muscles, and improves cardiovascular health with low impact on joints.",
        img:
          "https://img.freepik.com/free-photo/young-woman-gymnastic-pose_186202-2220.jpg?t=st=1713980764~exp=1713984364~hmac=d0a706b7f08d9da7df05096d5047ab614fed33cf20f4d5d522cf631f438a6110&w=996",
      },

      {
        id: 5,
        exerciseName: "Jumping Rope",
        time: "15-30 minutes",
        repetition: "Daily",
        benefits:
          "Burns calories, improves coordination, and strengthens lower body muscles.",
        img:
          "https://img.freepik.com/free-photo/young-woman-gymnastic-pose_186202-2220.jpg?t=st=1713980764~exp=1713984364~hmac=d0a706b7f08d9da7df05096d5047ab614fed33cf20f4d5d522cf631f438a6110&w=996",
      },

      {
        id: 6,
        exerciseName: "Weightlifting",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Builds muscle mass, increases metabolism, and improves overall body composition.",
        img:
          "https://img.freepik.com/free-photo/young-woman-gymnastic-pose_186202-2220.jpg?t=st=1713980764~exp=1713984364~hmac=d0a706b7f08d9da7df05096d5047ab614fed33cf20f4d5d522cf631f438a6110&w=996",
      },

      {
        id: 7,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Improves flexibility, reduces stress, and promotes mindfulness, which can help with weight management.",
        img:
          "https://img.freepik.com/free-photo/young-woman-gymnastic-pose_186202-2220.jpg?t=st=1713980764~exp=1713984364~hmac=d0a706b7f08d9da7df05096d5047ab614fed33cf20f4d5d522cf631f438a6110&w=996",
      },

      {
        id: 8,
        exerciseName: "Pilates",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles, improves posture, and enhances overall body strength and flexibility.",
        img:
          "https://img.freepik.com/free-photo/young-woman-gymnastic-pose_186202-2220.jpg?t=st=1713980764~exp=1713984364~hmac=d0a706b7f08d9da7df05096d5047ab614fed33cf20f4d5d522cf631f438a6110&w=996",
      },

      {
        id: 9,
        exerciseName: "Dancing",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits: "Burns calories, improves coordination, and boosts mood.",
        img:
          "https://img.freepik.com/free-photo/young-woman-gymnastic-pose_186202-2220.jpg?t=st=1713980764~exp=1713984364~hmac=d0a706b7f08d9da7df05096d5047ab614fed33cf20f4d5d522cf631f438a6110&w=996",
      },

      {
        id: 10,
        exerciseName: "HIIT",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Burns calories effectively, improves cardiovascular health, and boosts metabolism",
        img:
          "https://img.freepik.com/free-photo/young-woman-gymnastic-pose_186202-2220.jpg?t=st=1713980764~exp=1713984364~hmac=d0a706b7f08d9da7df05096d5047ab614fed33cf20f4d5d522cf631f438a6110&w=996",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/middle-aged-man-looking-front-while-holding-hands-back-blue-t-shirt-looking-confident_176474-61528.jpg?t=st=1713979732~exp=1713983332~hmac=c336a60e44899468a1530978008f71616feba041ac1be44e98416e9b48bf0e36&w=996",
    description:
      "Weight loss is a journey that requires patience, consistency, and dedication. By following a well-balanced vegetarian diet, staying active, practicing mindful eating, and some exercises you can achieve your weight loss goals and embrace a healthier lifestyle.",
    path: "/health/diets/weight-loss",
  },
  {
    id: 2,
    goal_name: "Weight Gain",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Avocado Toast with Eggs",
        quantity: "1 slice whole grain bread, 1/2 avocado, 2 scrambled eggs",
        availableNutrition: "Provides healthy fats, protein, and carbohydrates",
        benefits: "Supports muscle growth and provides sustained energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Granola",
        quantity: "1/2 cup Greek yogurt, 1/4 cup granola, mixed berries",
        availableNutrition: "High in protein, calcium, and antioxidants",
        benefits: "Promotes muscle repair and provides a healthy snack option",
        img: "",
        type: "vegetarian",
      },

      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Chickpea Salad",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup chickpeas, mixed vegetables, olive oil dressing",
        availableNutrition: "Rich in protein, fiber, and essential nutrients",
        benefits: "Promotes muscle repair and aids in weight gain",
        img: "",
        type: "vegetarian",
      },

      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Banana Peanut Butter Smoothie",
        quantity:
          "1 banana, 2 tablespoons peanut butter, 1 cup almond milk, handful of spinach",
        availableNutrition: "Provides protein, healthy fats, and vitamins",
        benefits: "Supports muscle growth and provides a quick snack option",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Vegetable Stir-Fry with Tofu",
        quantity:
          "1 cup mixed vegetables, 4 oz tofu, soy sauce, ginger, garlic",
        availableNutrition: "Rich in protein, fiber, and vitamins",
        benefits: "Promotes muscle repair and provides a satisfying snack",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Chickpea Curry with Brown Rice",
        quantity: "1/2 cup chickpeas, curry sauce, 1/2 cup brown rice",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "Supports muscle recovery and provides a hearty meal",
        img: "",
        type: "vegetarian",
      },
    ],

    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Scrambled Eggs with Avocado",
        quantity: "2 eggs, 1/2 avocado, handful of spinach",
        availableNutrition: "High in protein, healthy fats, and vitamins",
        benefits: "Promotes muscle growth and provides sustained energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Chicken and Vegetable Wrap",
        quantity: "Grilled chicken breast, whole wheat wrap, mixed vegetables",
        availableNutrition: "Rich in protein, fiber, and essential nutrients",
        benefits: "Promotes muscle repair and aids in weight gain",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Salmon and Quinoa Salad",
        quantity:
          "4 oz grilled salmon fillet, 1/2 cup cooked quinoa, mixed greens, lemon-tahini dressing",
        availableNutrition: "High in omega-3 fatty acids, protein, and fiber",
        benefits: "Supports muscle recovery and provides essential nutrients",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Turkey and Cheese Roll-Ups",
        quantity: "Sliced turkey breast, cheese, whole grain tortilla",
        availableNutrition:
          "Provides protein, calcium, and complex carbohydrates",
        benefits: "Promotes muscle repair and provides a quick snack option",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Greek Yogurt with Mixed Nuts",
        quantity:
          "1/2 cup Greek yogurt, handful of mixed nuts (almonds, walnuts, pistachios)",
        availableNutrition: "Rich in protein, healthy fats, and vitamins",
        benefits: "Supports muscle recovery and provides a satisfying snack",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Beef Stir-Fry with Brown Rice",
        quantity:
          "Lean beef strips, mixed vegetables, soy sauce, ginger, brown rice",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "Supports muscle recovery and provides a hearty meal",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Quinoa Breakfast Bowl",
        quantity:
          "1/2 cup cooked quinoa, 1/2 avocado, fried egg, mixed vegetables",
        availableNutrition: "High in protein, healthy fats, and fiber",
        benefits: "Promotes muscle growth and provides sustained energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Berries and Almonds",
        quantity:
          "1/2 cup Greek yogurt, handful of mixed berries, handful of almonds",
        availableNutrition: "Rich in protein, antioxidants, and healthy fats",
        benefits: "Supports muscle repair and provides a satisfying snack",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Black Bean and Sweet Potato Quesadilla",
        quantity:
          "Whole wheat tortilla, black beans, sweet potato slices, cheese",
        availableNutrition: "High in fiber, protein, and essential nutrients",
        benefits: "Promotes muscle recovery and aids in weight gain",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Hummus with Whole Grain Crackers",
        quantity: "1/4 cup hummus, whole grain crackers",
        availableNutrition: "Rich in protein, fiber, and healthy fats",
        benefits: "Supports muscle repair and provides a quick snack option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Trail Mix",
        quantity:
          "1/4 cup mixed nuts, 1/4 cup dried fruits, dark chocolate chunks",
        availableNutrition: "Provides protein, healthy fats, and antioxidants",
        benefits: "Supports muscle recovery and provides a satisfying snack",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Grilled Vegetable and Tofu Skewers",
        quantity:
          "Assorted vegetables (bell peppers, zucchini, mushrooms), tofu cubes, marinade",
        availableNutrition: "Rich in protein, fiber, and vitamins",
        benefits: "Supports muscle repair and provides a hearty meal",
        img: "",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Processed Foods",
        disadvantage:
          "Often high in calories, unhealthy fats, sugars, and additives, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 2,
        dietName: "Sugary Drinks",
        disadvantage:
          "High in empty calories, leading to weight gain and increased risk of obesity-related diseases",
        img: "",
      },
      {
        id: 3,
        dietName: "High-Calorie Snacks (e.g., Chips, Cookies, Pastries)",
        disadvantage:
          "High in calories, sugars, and unhealthy fats, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 4,
        dietName: "Alcohol",
        disadvantage:
          "High in calories and sugars, leading to weight gain and increased risk of liver disease",
        img: "",
      },
      {
        id: 5,
        dietName: "Highly Sweetened Breakfast Cereals",
        disadvantage:
          "High in sugars and calories, leading to weight gain and increased risk of obesity-related diseases",
        img: "",
      },
      {
        id: 6,
        dietName: "High-Calorie Coffee Drinks",
        disadvantage:
          "High in calories, sugars, and unhealthy fats, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 7,
        dietName: "Sweets and Desserts",
        disadvantage:
          "High in sugars, unhealthy fats, and calories, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 8,
        dietName: "Fast Food",
        disadvantage:
          "High in unhealthy fats, sugars, and sodium, leading to weight gain and increased risk of heart disease",
        img: "",
      },
      {
        id: 9,
        dietName: "Fried Foods",
        disadvantage:
          "High in unhealthy fats and calories, leading to weight gain and increased risk of heart disease",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Strength Training",
        time: "30-45 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Builds muscle mass, increases metabolism, and improves overall body composition.",
        img: "",
      },
      {
        id: 2,
        exerciseName:
          "Compound Exercises (e.g., Squats, Deadlifts, Bench Press)",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Engages multiple muscle groups, promotes muscle growth and strength.",
        img: "",
      },

      {
        id: 3,
        exerciseName: "Weightlifting",
        time: "30-45 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Increases muscle mass, improves strength, and supports weight gain.",
        img: "",
      },

      {
        id: 4,
        exerciseName:
          "Calisthenics (e.g., Push-ups, Pull-ups, Bodyweight Squats)",
        time: "20-30 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Improves muscle endurance, strength, and flexibility without equipment.",
        img: "",
      },

      {
        id: 5,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Improves flexibility, reduces stress, and promotes relaxation.",
        img: "",
      },

      {
        id: 6,
        exerciseName: "Pilates",
        time: "30-45 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles, improves posture, and enhances overall body strength.",
        img: "",
      },

      {
        id: 7,
        exerciseName: "Swimming",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Engages full body muscles, improves cardiovascular health, and supports weight gain.",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/front-view-young-man-with-measure-tape-white-background-health-muscle-weight-waist-slimming-human-measuring-losing-body-torso_140725-155360.jpg?t=st=1713979954~exp=1713983554~hmac=2d56c781e1a5cd4125ab1555d497d26ecab3e993e60bff0bebb03749742b127f&w=996",
    description:
      "Weight gain is a process of intentionally increasing body weight, typically through muscle or fat gain. It involves consuming a surplus of calories and engaging in strength training exercises to build muscle mass.",
    path: "/health/diets/weight-gain",
  },
  {
    id: 3,
    goal_name: "Muscle Building",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Protein-Packed Smoothie Bowl",
        quantity:
          "1 scoop plant-based protein powder, 1/2 cup mixed berries, 1/2 banana, 1/4 cup almond milk, handful of spinach",
        availableNutrition: "High in protein, vitamins, and antioxidants",
        benefits:
          "Supports muscle recovery and growth, provides sustained energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Almonds and Honey",
        quantity: "1/2 cup Greek yogurt, 1/4 cup almonds, 1 tablespoon honey",
        availableNutrition:
          "Rich in protein, healthy fats, and natural sweetness",
        benefits: "Promotes muscle repair and provides a satisfying snack",
        img: "",
        type: "vegetarian",
      },

      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Black Bean Salad",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup black beans, mixed vegetables, lime-cilantro dressing",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "Aids in muscle repair and provides lasting energy",
        img: "",
        type: "vegetarian",
      },

      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Apple Slices with Peanut Butter",
        quantity: "1 medium apple, 2 tablespoons peanut butter",
        availableNutrition:
          "Provides protein, healthy fats, and natural sugars",
        benefits: "Promotes muscle recovery and satisfies cravings",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Cottage Cheese with Pineapple",
        quantity: "1/2 cup cottage cheese, 1/2 cup diced pineapple",
        availableNutrition: "High in protein and vitamin C",
        benefits: "Supports muscle growth and aids in digestion",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Lentil and Vegetable Stir-Fry",
        quantity:
          "1 cup cooked lentils, mixed vegetables, soy sauce, ginger, garlic",
        availableNutrition: "Rich in protein, fiber, and vitamins",
        benefits: "Promotes muscle repair and provides essential nutrients",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Egg and Spinach Omelette",
        quantity: "2 eggs, handful of spinach, diced tomatoes, shredded cheese",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "Supports muscle growth and provides essential nutrients",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Berries and Almonds",
        quantity: "1/2 cup Greek yogurt, mixed berries, handful of almonds",
        availableNutrition: "Rich in protein, antioxidants, and healthy fats",
        benefits: "Promotes muscle repair and provides a satisfying snack",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Salad",
        quantity:
          "Grilled chicken breast, mixed greens, cherry tomatoes, cucumbers, balsamic vinaigrette",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "Supports muscle recovery and provides a nutritious meal",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Turkey and Avocado Wrap",
        quantity:
          "Sliced turkey breast, avocado, whole wheat wrap, lettuce, tomato",
        availableNutrition:
          "Provides protein, healthy fats, and complex carbohydrates",
        benefits: "Promotes muscle repair and provides energy for workouts",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Cottage Cheese with Pineapple",
        quantity: "1/2 cup cottage cheese, fresh pineapple chunks",
        availableNutrition: "Rich in protein, calcium, and vitamins",
        benefits: "Promotes muscle repair and provides a satisfying snack",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Salmon and Asparagus",
        quantity: "Grilled salmon fillet, roasted asparagus spears",
        availableNutrition:
          "High in protein, omega-3 fatty acids, and antioxidants",
        benefits: "Supports muscle recovery and provides essential nutrients",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Protein-Packed Oatmeal",
        quantity:
          "1/2 cup rolled oats, 1 cup milk (or plant-based milk), 1 scoop protein powder, 1 tablespoon almond butter, 1/2 banana",
        availableNutrition:
          "High in protein, complex carbohydrates, and healthy fats",
        benefits:
          "Supports muscle repair and growth, provides sustained energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt Parfait",
        quantity: "1/2 cup Greek yogurt, 1/4 cup granola, mixed berries",
        availableNutrition: "Rich in protein, calcium, and antioxidants",
        benefits:
          "Promotes muscle recovery, provides probiotics, and satisfies hunger",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Salad",
        quantity:
          "4 oz grilled chicken breast, mixed greens, cherry tomatoes, cucumber, avocado, balsamic vinaigrette",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits:
          "Supports muscle growth, provides essential nutrients, and aids in weight management",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Cottage Cheese with Pineapple",
        quantity: "1/2 cup cottage cheese, fresh pineapple chunks",
        vailableNutrition: "Rich in protein, calcium, and vitamins",
        benefits:
          "Promotes muscle repair, aids in recovery, and provides a satisfying snack",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Protein Smoothie",
        quantity:
          "1 scoop protein powder, 1 cup milk (or plant-based milk), 1/2 banana, handful of spinach, 1 tablespoon almond butter",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits:
          "Supports muscle repair and growth, provides essential nutrients, and aids in recovery",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Salmon with Quinoa and Steamed Broccoli",
        quantity:
          "4 oz grilled salmon fillet, 1/2 cup cooked quinoa, steamed broccoli",
        availableNutrition: "Rich in protein, omega-3 fatty acids, and fiber",
        benefits:
          "Supports muscle recovery, provides essential nutrients, and aids in weight management",
        img: "",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Sugary Drinks",
        disadvantage:
          "High in empty calories, leading to weight gain and increased risk of obesity-related diseases",
        img: "",
      },
      {
        id: 2,
        dietName: "Processed Foods",
        disadvantage:
          "Often high in calories, unhealthy fats, sugars, and additives, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 3,
        dietName: "High-Calorie Snacks (e.g., Chips, Cookies, Pastries)",
        disadvantage:
          "High in calories, sugars, and unhealthy fats, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 4,
        dietName: "Alcohol",
        disadvantage:
          "High in calories and sugars, leading to weight gain and increased risk of liver disease",
        img: "",
      },
      {
        id: 5,
        dietName: "Highly Sweetened Breakfast Cereals",
        disadvantage:
          "High in sugars and calories, leading to weight gain and increased risk of obesity-related diseases",
        img: "",
      },
      {
        id: 6,
        dietName: "High-Calorie Coffee Drinks",
        disadvantage:
          "High in calories, sugars, and unhealthy fats, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 7,
        dietName: "Sweets and Desserts",
        disadvantage:
          "High in sugars, unhealthy fats, and calories, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Weightlifting",
        time: "45-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Builds muscle mass, increases strength, and improves overall body composition",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Bodyweight Exercises",
        time: "30-45 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Strengthens muscles, improves flexibility, and enhances functional movement",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Resistance Band Training",
        time: "30-45 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Builds muscle strength, improves range of motion, and provides versatile workout options",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Dumbbell Exercises",
        time: "30-45 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Targets specific muscle groups, improves coordination, and enhances muscular endurance",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Barbell Exercises",
        time: "45-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Builds overall strength, promotes muscle growth, and enhances functional fitness",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Compound Exercises",
        time: "45-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Targets multiple muscle groups simultaneously, improves muscle coordination, and increases overall strength",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Plyometric Training",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Improves power, speed, and agility, enhances athletic performance, and boosts cardiovascular fitness",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/handsome-athlete-looking-strong-flexing-biceps-showing-his-strong-muscles-arms-smiling-pleased-workout-doing-fitness-exercises-white-background_176420-49924.jpg?t=st=1713980062~exp=1713983662~hmac=a3eedcd6ee252ef746121c4bed54e98e63fedb1c45ebbf97d05d42a56e5876cd&w=996",
    description:
      "Muscle building is a fitness regimen aimed at increasing muscle mass, strength, and definition. Through targeted exercises and proper nutrition, individuals enhance their physique, improve overall health, and achieve their desired muscular development and athletic performance.",
    path: "/health/diets/muscle-building",
  },
  {
    id: 4,
    goal_name: "Increased Energy Levels",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Green Smoothie",
        quantity:
          "1 cup spinach, 1/2 banana, 1/2 cup frozen mixed berries, 1 tablespoon almond butter, 1 cup almond milk",
        availableNutrition: "Rich in vitamins, minerals, and antioxidants",
        benefits: "Provides a quick energy boost and supports overall health",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Honey and Almonds",
        quantity: "1/2 cup Greek yogurt, 1 teaspoon honey, handful of almonds",
        availableNutrition: "High in protein, calcium, and healthy fats",
        benefits: "Sustains energy levels and supports muscle repair",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa Salad with Avocado",
        quantity:
          "1/2 cup cooked quinoa, mixed greens, 1/4 avocado, cherry tomatoes, cucumber slices, balsamic vinaigrette",
        availableNutrition: "Rich in protein, fiber, and healthy fats",
        benefits: "Provides sustained energy and supports satiety",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Apple with Peanut Butter",
        quantity: "1 medium apple, 2 tablespoons peanut butter",
        availableNutrition: "Provides carbohydrates, protein, and healthy fats",
        benefits: "Offers a quick energy boost and satisfies hunger",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Trail Mix",
        quantity: "1/4 cup mixed nuts and dried fruits",
        availableNutrition: "Provides energy-dense nutrients and antioxidants",
        benefits: "Offers a convenient and nutritious snack option",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Vegetable Stir-Fry with Tofu",
        quantity:
          "1 cup mixed vegetables, 4 oz tofu, soy sauce, ginger, garlic",
        availableNutrition: "Rich in protein, fiber, and essential nutrients",
        benefits: "Provides sustained energy and supports muscle repair",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Egg and Avocado Breakfast Sandwich",
        quantity:
          "2 slices whole grain bread, 2 eggs, 1/2 avocado, spinach leaves, tomato slices",
        availableNutrition: "Provides protein, healthy fats, and vitamins",
        benefits: "Boosts energy levels and supports mental clarity",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Mixed Berries",
        quantity:
          "1/2 cup Greek yogurt, mixed berries (e.g., strawberries, blueberries)",
        availableNutrition: "Rich in protein, antioxidants, and probiotics",
        benefits: "Sustains energy levels and supports digestive health",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Salad",
        quantity:
          "Grilled chicken breast, mixed greens, cherry tomatoes, cucumbers, balsamic vinaigrette",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "Provides sustained energy and promotes muscle repair",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Turkey and Cheese Roll-Ups",
        quantity: "Sliced turkey breast, cheese slices, whole grain tortillas",
        availableNutrition: "Offers protein, calcium, and whole grains",
        benefits: "Provides a quick energy boost and satisfies hunger",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Tuna Salad on Crackers",
        quantity: "Canned tuna, mayonnaise, celery, whole grain crackers",
        availableNutrition: "Rich in protein, omega-3 fatty acids, and fiber",
        benefits: "Sustains energy levels and supports heart health",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Salmon with Roasted Vegetables",
        quantity:
          "Grilled or baked salmon fillet, roasted vegetables (e.g., broccoli, carrots, bell peppers)",
        availableNutrition:
          "High in omega-3 fatty acids, vitamins, and antioxidants",
        benefits: "Boosts energy and supports overall health",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Berry Smoothie Bowl",
        quantity:
          "1 cup mixed berries, 1 banana, 1/2 cup Greek yogurt, 1 tablespoon honey, 1/4 cup granola",
        availableNutrition: "Rich in antioxidants, vitamins, and probiotics",
        benefits: "Provides sustained energy and supports immune health",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Energy Bites",
        quantity:
          "1/2 cup rolled oats, 1/4 cup almond butter, 1/4 cup honey, 1/4 cup dark chocolate chips, 1 tablespoon chia seeds",
        availableNutrition: "High in fiber, protein, and healthy fats",
        benefits: "Provides a quick energy boost and satisfies sweet cravings",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Avocado Salad",
        quantity:
          "1/2 cup cooked quinoa, mixed greens, 1/2 avocado, cherry tomatoes, balsamic vinaigrette",
        availableNutrition:
          "Provides protein, healthy fats, and essential nutrients",
        benefits: "Supports sustained energy levels and promotes heart health",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Hummus with Carrot Sticks",
        quantity: "1/2 cup hummus, carrot sticks",
        availableNutrition: "Rich in protein, fiber, and vitamins",
        benefits: "Provides energy and satisfies hunger between meals",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Trail Mix",
        quantity:
          "1/4 cup mixed nuts, 1/4 cup dried fruits, 1 tablespoon dark chocolate chips",
        availableNutrition:
          "Provides a mix of healthy fats, carbohydrates, and antioxidants",
        benefits: "Offers a convenient and energizing snack option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Grilled Salmon with Quinoa and Steamed Vegetables",
        quantity:
          "4 oz grilled salmon, 1/2 cup cooked quinoa, mixed vegetables",
        availableNutrition: "Rich in omega-3 fatty acids, protein, and fiber",
        benefits: "Supports energy production and overall health",
        img: "",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Sugary Drinks",
        disadvantage:
          "High in empty calories, leading to energy crashes and fatigue",
        img: "",
      },
      {
        id: 2,
        dietName: "Processed Foods",
        disadvantage:
          "Often high in refined sugars and unhealthy fats, leading to energy spikes and crashes",
        img: "",
      },
      {
        id: 3,
        dietName: "Fast Food",
        disadvantage:
          "High in unhealthy fats and sodium, contributing to sluggishness and fatigue",
        img: "",
      },
      {
        id: 4,
        dietName: "Highly Sweetened Breakfast Cereals",
        disadvantage:
          "High in sugars and low in nutrients, causing energy fluctuations throughout the day",
        img: "",
      },
      {
        id: 5,
        dietName: "Junk Food",
        disadvantage:
          "High in refined sugars, unhealthy fats, and additives, leading to energy crashes and lethargy",
        img: "",
      },
      {
        id: 6,
        dietName: "Alcohol",
        disadvantage:
          "Disrupts sleep patterns and dehydrates the body, leading to decreased energy levels",
        img: "",
      },
      {
        id: 7,
        dietName: "High-Calorie Coffee Drinks",
        disadvantage:
          "Contain excessive sugars and unhealthy fats, leading to energy crashes and dependency on caffeine",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Strength Training",
        time: "30-45 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Promotes muscle growth and weight gain by stimulating muscle hypertrophy",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Compound Exercises",
        time: "30-45 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Targets multiple muscle groups, aiding in overall muscle development and weight gain",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Weighted Squats",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens lower body muscles including quads, hamstrings, and glutes, contributing to weight gain",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Deadlifts",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Targets multiple muscle groups including back, legs, and core, promoting overall strength and weight gain",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Bench Press",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens chest, shoulders, and triceps, contributing to upper body muscle mass and weight gain",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Barbell Rows",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Targets upper back and biceps, promoting muscle growth and weight gain in the back",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Dumbbell Lunges",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens legs and improves balance, aiding in lower body muscle development and weight gain",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/happy-man-celebrating-having-fun-dancing-from-success-satisfaction-standing-satisfied-against-white-background_176420-45191.jpg?t=st=1713976583~exp=1713980183~hmac=48b6cd48010125cd2e3ee869d749a81b3aefd25003d81a8adba5f3149464b59b&w=996",
    description:
      "Increased Energy Levels: Revitalize your day with these diet and lifestyle adjustments. Fuel your body with nutrient-rich foods, avoid energy-draining choices, and engage in invigorating exercises to maintain vitality and focus",
    path: "/health/diets/increase-energy-level",
  },
  {
    id: 5,
    goal_name: "Hair and Skin Health",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Avocado and Spinach Smoothie",
        quantity:
          "1 ripe avocado, 1 cup spinach, 1/2 cup almond milk, 1 tablespoon honey",
        availableNutrition:
          "Rich in healthy fats, vitamins E and C, and antioxidants",
        benefits: "Promotes hair and skin health, boosts collagen production",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Mixed Berries Bowl",
        quantity:
          "1 cup mixed berries (strawberries, blueberries, raspberries)",
        availableNutrition: "High in vitamins, antioxidants, and fiber",
        benefits: "Supports skin health, fights free radicals",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa Salad with Avocado",
        quantity:
          "1/2 cup cooked quinoa, mixed vegetables, 1/4 avocado, lemon-tahini dressing",
        availableNutrition:
          "Provides protein, healthy fats, and essential nutrients",
        benefits: "Nourishes hair follicles, hydrates skin",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Greek Yogurt with Almonds",
        quantity: "1/2 cup Greek yogurt, handful of almonds",
        availableNutrition: "High in protein, calcium, and healthy fats",
        benefits: "Strengthens hair and nails, promotes skin elasticity",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Carrot Sticks with Hummus",
        quantity: "1 cup carrot sticks, 2 tablespoons hummus",
        availableNutrition: "Rich in beta-carotene, fiber, and protein",
        benefits: "Improves skin complexion, supports hair growth",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Spinach and Mushroom Stir-Fry",
        quantity: "1 cup spinach, 1 cup mushrooms, garlic, soy sauce",
        availableNutrition: "Packed with vitamins, minerals, and antioxidants",
        benefits: "Promotes hair strength, rejuvenates skin cells",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Salmon Omelette",
        quantity: "2 eggs, 50g smoked salmon, chopped chives",
        availableNutrition: "High in omega-3 fatty acids, protein, and biotin",
        benefits: "Promotes healthy hair and skin, supports brain function",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Almonds",
        quantity: "1/2 cup Greek yogurt, handful of almonds",
        availableNutrition: "Provides protein, calcium, and vitamin E",
        benefits: "Supports skin health and provides satiety",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Salad",
        quantity:
          "4 oz grilled chicken breast, mixed greens, tomatoes, cucumber",
        availableNutrition: "Rich in protein, vitamins, and minerals",
        benefits: "Promotes collagen production for skin elasticity",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Tuna Salad Stuffed Avocado",
        quantity: "1 ripe avocado, 1 can tuna, diced red onion, lemon juice",
        availableNutrition:
          "High in omega-3 fatty acids, protein, and vitamin E",
        benefits: "Nourishes hair follicles and moisturizes skin",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Boiled Eggs with Hummus",
        quantity: "2 boiled eggs, 2 tablespoons hummus",
        availableNutrition: "Provides protein, healthy fats, and vitamins",
        benefits: "Supports hair growth and repairs skin tissues",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Beef Stir-Fry with Vegetables",
        quantity: "4 oz lean beef strips, mixed vegetables, soy sauce",
        availableNutrition: "Rich in protein, iron, and zinc",
        benefits: "Strengthens hair follicles and promotes skin regeneration",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Berry Smoothie Bowl",
        quantity:
          "1 cup mixed berries, 1 banana, 1/2 cup Greek yogurt, 1 tablespoon honey, 1/4 cup granola",
        availableNutrition: "Rich in antioxidants, vitamins, and probiotics",
        benefits:
          "Promotes healthy skin and hair, boosts immunity, and provides energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Almond Butter and Apple Slices",
        quantity: "2 tablespoons almond butter, 1 apple (sliced)",
        availableNutrition: "Provides healthy fats, vitamins, and minerals",
        benefits: "Supports skin hydration and provides a satisfying snack",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Salmon Salad",
        quantity:
          "4 oz grilled salmon, mixed greens, cherry tomatoes, cucumber, avocado, balsamic vinaigrette",
        availableNutrition:
          "High in omega-3 fatty acids, protein, and vitamins",
        benefits:
          "Promotes skin elasticity, reduces inflammation, and supports hair health",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Greek Yogurt with Mixed Nuts",
        quantity:
          "1/2 cup Greek yogurt, 1/4 cup mixed nuts (almonds, walnuts, cashews)",
        availableNutrition: "Rich in protein, healthy fats, and antioxidants",
        benefits:
          "Supports skin health, provides essential nutrients, and helps curb cravings",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Carrot Sticks with Hummus",
        quantity: "1 cup carrot sticks, 2 tablespoons hummus",
        availableNutrition: "Provides beta-carotene, fiber, and protein",
        benefits:
          "Promotes skin radiance, aids in digestion, and provides a light snack option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Quinoa and Vegetable Stir-Fry",
        quantity:
          "1/2 cup cooked quinoa, mixed vegetables (bell peppers, broccoli, snap peas) stir-fried with tofu or tempeh",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits:
          "Supports skin regeneration, aids in detoxification, and provides a wholesome meal",
        img: "img/quinoa_stir_fry.jpg",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Processed Foods",
        disadvantage:
          "Often high in calories, unhealthy fats, sugars, and additives, leading to skin inflammation and hair loss",
        img: "",
      },
      {
        id: 2,
        dietName: "Sugary Drinks",
        disadvantage:
          "High sugar content can contribute to skin aging, acne, and hair damage",
        img: "",
      },
      {
        id: 3,
        dietName: "Junk Food",
        disadvantage:
          "High in unhealthy fats, sugars, and calories, leading to skin breakouts and dull hair",
        img: "",
      },
      {
        id: 4,
        dietName: "Alcohol",
        disadvantage:
          "Dehydrates the skin and scalp, leading to dryness, inflammation, and hair loss",
        img: "",
      },
      {
        id: 5,
        dietName: "High-Carb Diets",
        disadvantage:
          "High glycemic index foods can trigger acne breakouts and contribute to skin inflammation",
        img: "",
      },
      {
        id: 6,
        dietName: "Fried Foods",
        disadvantage:
          "High in unhealthy fats and can lead to excess oil production in the skin and scalp",
        img: "",
      },
      {
        id: 7,
        dietName: "Dairy Products",
        disadvantage:
          "May contribute to acne breakouts and skin inflammation in some individuals",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Improves blood circulation, reduces stress, and promotes overall well-being. Enhances skin health by promoting detoxification and reducing inflammation.",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Pilates",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles, improves flexibility, and promotes better posture. Helps in toning muscles and improving skin tone.",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Cardiovascular Exercises (e.g., Running, Cycling)",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Increases heart rate, burns calories, and improves cardiovascular health. Enhances blood flow, promoting nutrient delivery to the skin and hair follicles.",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Strength Training",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Builds muscle mass, boosts metabolism, and improves overall strength. Helps in maintaining a youthful appearance and supports healthy hair growth.",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Swimming",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Provides a full-body workout, strengthens muscles, and improves cardiovascular health. The water's buoyancy reduces impact on joints, promoting exercise sustainability.",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Hiking",
        time: "1-2 hours",
        repetition: "Once or twice a week",
        benefits:
          "Combines cardiovascular exercise with nature immersion, reducing stress and promoting mental well-being. Enhances circulation and skin rejuvenation.",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Tai Chi",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Improves balance, flexibility, and mental clarity. Reduces stress and promotes relaxation, which can have positive effects on skin health and hair growth.",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/worried-pensive-woman-scratching-head_74855-3352.jpg?t=st=1713977325~exp=1713980925~hmac=1572ddd560b5b70c61b6b4e0d4365b0bfb4ba3eed565ca58892137a4fd471deb&w=996",
    description:
      "Maintain vibrant hair and skin health with a balanced lifestyle. Nourish your body with nutrient-rich foods, avoid harmful dietary choices, engage in regular exercise, and prioritize relaxation. Consistency and care foster a radiant appearance and promote overall well-being.",
    path: "/health/diets/hair-and-skin-health",
  },
  {
    id: 6,
    goal_name: "Bone Health",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Spinach and Mushroom Omelette",
        quantity:
          "2 eggs, 1 cup spinach, 1/2 cup mushrooms, 1/4 cup shredded cheese",
        availableNutrition: "High in calcium, vitamin D, and protein",
        benefits: "Supports bone health and provides essential nutrients",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Almonds",
        quantity: "1/2 cup Greek yogurt, 1/4 cup almonds",
        availableNutrition: "Rich in calcium, protein, and healthy fats",
        benefits: "Promotes bone strength and provides energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Tofu and Broccoli Stir-Fry",
        quantity: "4 oz tofu, 1 cup broccoli, soy sauce, garlic, ginger",
        availableNutrition: "High in calcium, vitamin K, and protein",
        benefits: "Supports bone density and provides antioxidants",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Cheese and Whole Grain Crackers",
        quantity: "1 oz cheese, 4 whole grain crackers",
        availableNutrition: "Provides calcium and fiber",
        benefits: "Promotes bone health and satiety",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Kale Chips",
        quantity: "1 cup kale, olive oil, sea salt",
        availableNutrition: "High in calcium, vitamin K, and antioxidants",
        benefits: "Supports bone density and provides a crunchy snack",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Salmon and Quinoa Salad",
        quantity: "4 oz grilled salmon, 1/2 cup cooked quinoa, mixed greens",
        availableNutrition: "Rich in omega-3 fatty acids, protein, and fiber",
        benefits: "Supports bone health and overall well-being",
        image: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Salmon Omelette",
        quantity:
          "2 eggs, 3 oz cooked salmon, vegetables (such as spinach, tomatoes, onions)",
        availableNutrition:
          "High in protein, omega-3 fatty acids, and vitamin D",
        benefits: "Supports bone strength and density",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Almonds",
        quantity: "1/2 cup Greek yogurt, handful of almonds",
        availableNutrition: "Provides calcium, protein, and vitamin D",
        benefits: "Promotes bone health and provides energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Chicken and Broccoli Stir-Fry",
        quantity:
          "4 oz chicken breast, 1 cup broccoli, soy sauce, garlic, ginger",
        availableNutrition: "Rich in protein, calcium, and vitamin K",
        benefits: "Supports bone density and muscle health",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Cottage Cheese with Pineapple",
        quantity: "1/2 cup cottage cheese, 1/2 cup diced pineapple",
        availableNutrition: "High in calcium, protein, and vitamin D",
        benefits: "Promotes bone strength and aids in muscle repair",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Sardines on Whole Grain Crackers",
        quantity: "2 oz canned sardines, 4 whole grain crackers",
        availableNutrition:
          "Rich in calcium, omega-3 fatty acids, and vitamin D",
        benefits: "Supports bone density and heart health",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Beef and Vegetable Stir-Fry",
        quantity: "4 oz lean beef, mixed vegetables, soy sauce, garlic, ginger",
        availableNutrition: "High in protein, iron, and vitamin B12",
        benefits: "Supports bone health and muscle function",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Greek Yogurt with Mixed Berries and Almonds",
        quantity:
          "1/2 cup Greek yogurt, 1/2 cup mixed berries, handful of almonds",
        availableNutrition:
          "High in calcium, vitamin D, protein, and antioxidants",
        benefits: "Supports bone health and provides essential nutrients",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Cheese and Whole Grain Crackers",
        quantity: "1 oz cheese, 4 whole grain crackers",
        availableNutrition: "Rich in calcium, protein, and fiber",
        benefits: "Promotes bone strength and provides energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Salmon Salad with Avocado",
        quantity:
          "4 oz grilled salmon, mixed greens, 1/2 avocado, balsamic vinaigrette",
        availableNutrition:
          "High in omega-3 fatty acids, vitamin D, protein, and healthy fats",
        benefits: "Supports bone density and overall health",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Almond Butter on Whole Wheat Toast",
        quantity: "1 tablespoon almond butter, 1 slice whole wheat toast",
        availableNutrition: "Rich in calcium, magnesium, protein, and fiber",
        benefits: "Promotes bone health and provides sustained energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Yogurt and Fruit Smoothie",
        quantity:
          "1 cup yogurt, 1/2 cup mixed fruit (banana, berries), 1 tablespoon honey",
        availableNutrition:
          "High in calcium, vitamin D, protein, and antioxidants",
        benefits: "Supports bone health and provides a refreshing snack",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Tofu and Vegetable Stir-Fry with Brown Rice",
        quantity: "4 oz tofu, mixed vegetables, 1/2 cup brown rice, soy sauce",
        availableNutrition:
          "Rich in calcium, protein, fiber, and essential nutrients",
        benefits: "Promotes bone strength and provides a nutritious meal",
        img: "",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Carbonated Beverages",
        disadvantage:
          "High in phosphoric acid, which can leach calcium from bones, leading to weakened bones and increased risk of fractures",
        img: "",
      },
      {
        id: 2,
        dietName: "Sugary Snacks",
        disadvantage:
          "High in refined sugars, which can interfere with calcium absorption and contribute to bone loss",
        img: "",
      },
      {
        id: 3,
        dietName: "Excessive Salt",
        disadvantage:
          "High salt intake can increase calcium excretion through urine, leading to reduced bone density over time",
        img: "",
      },
      {
        id: 4,
        dietName: "Alcohol",
        disadvantage:
          "Excessive alcohol consumption can interfere with calcium absorption and increase the risk of osteoporosis",
        img: "",
      },
      {
        id: 5,
        dietName: "Caffeine",
        disadvantage:
          "High caffeine intake can interfere with calcium absorption and increase calcium excretion, potentially leading to weakened bones",
        img: "",
      },
      {
        id: 6,
        dietName: "Processed Foods",
        disadvantage:
          "Often high in sodium, unhealthy fats, and additives, which can negatively impact bone health",
        img: "",
      },
      {
        id: 7,
        dietName: "High-Protein Diets",
        disadvantage:
          "Excessive protein intake, especially from animal sources, can increase calcium excretion and may lead to bone loss over time",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Weight-Bearing Exercises (e.g., Walking)",
        time: "30-60 minutes",
        repetition: "Daily",
        benefits:
          "Helps maintain bone density and strength by stimulating bone growth and remodeling",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Strength Training (e.g., Weightlifting)",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Builds muscle mass, which in turn supports bone health and reduces the risk of osteoporosis",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Improves balance, flexibility, and posture, reducing the risk of falls and fractures",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Pilates",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles and improves posture, contributing to better bone health and reduced risk of injury",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Tai Chi",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Improves balance, flexibility, and muscle strength, reducing the risk of falls and fractures",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Dancing",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Offers weight-bearing activity, improves balance and coordination, and supports bone health",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/young-male-t-shirt-holding-hand-shoulder-looking-tired-front-view_176474-54718.jpg?t=st=1713977493~exp=1713981093~hmac=bdbe6e69b49d040e51d809d42b5d9864f1c63b979600fe8d9af50dc5d3db2e26&w=996",
    description:
      "Bone health is vital for overall well-being. Strong bones support mobility and protect against fractures. A balanced diet rich in calcium and vitamin D, combined with regular weight-bearing exercises, fosters optimal bone density and reduces the risk of osteoporosis.",
    path: "/health/diets/bone-health",
  },

  {
    id: 7,
    goal_name: "Improved Health",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Avocado Toast with Poached Eggs",
        quantity: "1 slice whole grain bread, 1/2 avocado, 2 poached eggs",
        availableNutrition: "Provides healthy fats, protein, and fiber",
        benefits:
          "Promotes satiety and provides essential nutrients for the day",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Mixed Berries",
        quantity: "1/2 cup Greek yogurt, 1/2 cup mixed berries",
        availableNutrition: "Rich in protein, probiotics, and antioxidants",
        benefits: "Supports gut health and provides energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa Salad with Roasted Vegetables",
        quantity:
          "1/2 cup cooked quinoa, mixed vegetables, balsamic vinaigrette",
        availableNutrition: "High in protein, fiber, and vitamins",
        benefits: "Supports muscle repair and provides sustained energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Homemade Trail Mix",
        quantity: "1/4 cup mixed nuts and seeds, dried fruits",
        availableNutrition: "Provides healthy fats, protein, and energy",
        benefits: "A satisfying and nutritious snack option",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Vegetable Sticks with Hummus",
        quantity:
          "Assorted vegetable sticks (carrots, celery, bell peppers) with 2 tablespoons hummus",
        availableNutrition: "Rich in vitamins, fiber, and healthy fats",
        benefits:
          "Provides a crunchy and satisfying snack with essential nutrients",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Spinach and Mushroom Stuffed Bell Peppers",
        quantity:
          "Bell peppers stuffed with spinach, mushrooms, quinoa, and cheese",
        availableNutrition: "High in vitamins, minerals, and antioxidants",
        benefits: "A nutritious and flavorful dinner option",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Smoked Salmon Bagel",
        quantity:
          "1 whole grain bagel, 2 oz smoked salmon, cream cheese, sliced cucumber and tomato",
        availableNutrition:
          "Rich in omega-3 fatty acids, protein, and vitamins",
        benefits: "Supports heart health and provides sustained energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Chicken and Hummus Wrap",
        quantity:
          "1 whole wheat tortilla, 3 oz grilled chicken breast, hummus, lettuce, tomato",
        availableNutrition: "High in protein, fiber, and healthy fats",
        benefits: "Promotes muscle repair and satisfies hunger cravings",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Caesar Salad",
        quantity:
          "4 oz grilled chicken breast, romaine lettuce, Parmesan cheese, Caesar dressing",
        availableNutrition: "Rich in protein, calcium, and vitamins",
        benefits: "Supports muscle growth and bone health",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Turkey and Cheese Roll-Ups",
        quantity: "4 slices turkey breast, 2 slices cheese, lettuce leaves",
        availableNutrition:
          "Provides protein, calcium, and essential nutrients",
        benefits: "Satisfies hunger and provides a quick energy boost",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Tuna Salad Stuffed Avocado",
        quantity: "1 avocado, 1 can tuna, diced vegetables, Greek yogurt",
        availableNutrition: "Rich in omega-3 fatty acids, protein, and fiber",
        benefits: "Supports brain health and promotes satiety",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Grilled Steak with Roasted Vegetables",
        quantity:
          "6 oz steak, assorted vegetables (bell peppers, zucchini, onions), olive oil",
        availableNutrition: "High in protein, vitamins, and antioxidants",
        benefits: "Supports muscle repair and provides essential nutrients",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Avocado and Spinach Omelette",
        quantity: "2 eggs, 1/2 avocado, handful of spinach",
        availableNutrition: "Provides protein, healthy fats, and vitamins",
        benefits: "Supports muscle repair and provides sustained energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Mixed Berries",
        quantity: "1/2 cup Greek yogurt, 1/2 cup mixed berries",
        availableNutrition: "High in protein, calcium, and antioxidants",
        benefits: "Supports gut health and provides a nutritious snack",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa Salad with Chickpeas",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup chickpeas, mixed vegetables, lemon-tahini dressing",
        availableNutrition: "Rich in protein, fiber, and essential nutrients",
        benefits: "Promotes satiety and aids in digestion",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Almond Butter with Apple Slices",
        quantity: "1 tablespoon almond butter, 1 medium apple, sliced",
        availableNutrition: "Provides healthy fats, fiber, and vitamins",
        benefits: "Satisfies sweet cravings and provides sustained energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Mixed Nuts and Dried Fruits",
        quantity: "1/4 cup mixed nuts, 1/4 cup dried fruits",
        availableNutrition: "Provides healthy fats, protein, and antioxidants",
        benefits: "Aids in satiety and provides a nutrient-rich snack",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Grilled Tofu with Steamed Vegetables",
        quantity: "4 oz tofu, mixed vegetables",
        availableNutrition: "Rich in plant-based protein, fiber, and vitamins",
        benefits: "Supports muscle repair and aids in weight management",
        img: "",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Processed Foods",
        disadvantage:
          "Often high in calories, unhealthy fats, sugars, and additives, leading to weight gain and increased risk of chronic diseases",
        img: "",
        type: "avoiding",
      },
      {
        id: 2,
        dietName: "Sugary Drinks",
        disadvantage:
          "High in empty calories, leading to weight gain and increased risk of obesity-related diseases",
        img: "",
        type: "avoiding",
      },
      {
        id: 3,
        dietName: "Fast Food",
        disadvantage:
          "High in unhealthy fats, sugars, and sodium, leading to weight gain and increased risk of heart disease",
        img: "",
        type: "avoiding",
      },
      {
        id: 4,
        dietName: "Fried Foods",
        disadvantage:
          "High in unhealthy fats and calories, leading to weight gain and increased risk of heart disease",
        img: "",
        type: "avoiding",
      },
      {
        id: 5,
        dietName: "High-Calorie Snacks (e.g., Chips, Cookies, Pastries)",
        disadvantage:
          "High in calories, sugars, and unhealthy fats, leading to weight gain and increased risk of chronic diseases",
        img: "",
        type: "avoiding",
      },
      {
        id: 6,
        dietName: "Alcohol",
        disadvantage:
          "High in calories and sugars, leading to weight gain and increased risk of liver disease",
        img: "",
        type: "avoiding",
      },
      {
        id: 7,
        dietName: "Highly Sweetened Breakfast Cereals",
        disadvantage:
          "High in sugars and calories, leading to weight gain and increased risk of obesity-related diseases",
        img: "",
        type: "avoiding",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Walking",
        time: "30-60 minutes",
        repetition: "Daily",
        benefits:
          "Burns calories, improves cardiovascular health, and boosts metabolism.",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Running",
        time: "20-30 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Burns more calories per minute than walking,improves cardiovascular health, and tones muscles.",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Cycling",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Burns calories, strengthens legs and core muscles, and improves cardiovascular health.",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Swimming",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Burns calories, tones muscles, and improves cardiovascular health with low impact on joints.",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Jumping Rope",
        time: "15-30 minutes",
        repetition: "Daily",
        benefits:
          "Burns calories, improves coordination, and strengthens lower body muscles.",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Improves flexibility, reduces stress, and promotes mindfulness, which can help with weight management.",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Pilates",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles, improves posture, and enhances overall body strength and flexibility.",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/smiling-young-girl-model-holding-plastic-cup_144627-62422.jpg?t=st=1713977662~exp=1713981262~hmac=8bf7893ede93087c4fe09e9b75fe58e3a75e39b854894ba4a5fbb74cf66aa9c4&w=996",
    description:
      "Improved Health encompasses a holistic approach to wellness, focusing on physical, mental, and emotional well-being. Through balanced nutrition, regular exercise, and mindfulness practices, it aims to enhance vitality, resilience, and overall quality of life.",
    path: "/health/diets/improve-health",
  },
  {
    id: 8,
    goal_name: "Improved Mental Clarity and Focus",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Chia Seed Pudding",
        quantity:
          "1/4 cup chia seeds, 1 cup almond milk, 1 tablespoon honey, fresh berries",
        availableNutrition:
          "Rich in omega-3 fatty acids, fiber, and antioxidants",
        benefits: "Supports brain health and provides sustained energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Walnut and Blueberry Smoothie",
        quantity:
          "1/2 cup walnuts, 1/2 cup blueberries, 1 cup almond milk, 1 tablespoon honey",
        availableNutrition:
          "Provides brain-boosting nutrients, antioxidants, and healthy fats",
        benefits: "Enhances cognitive function and provides a refreshing snack",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Spinach and Quinoa Salad",
        quantity:
          "2 cups fresh spinach, 1/2 cup cooked quinoa, cherry tomatoes, cucumber, feta cheese, balsamic vinaigrette",
        availableNutrition:
          "High in iron, folate, and vitamins for mental alertness",
        benefits:
          "Promotes mental clarity and focus with nutrient-rich ingredients",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Homemade Energy Bars",
        quantity:
          "1/2 cup rolled oats, 1/4 cup almond butter, 1/4 cup honey, nuts, seeds, dried fruits",
        availableNutrition:
          "Provides sustained energy with a mix of carbohydrates, protein, and healthy fats",
        benefits: "Boosts focus and concentration without added sugars",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Green Tea with Almonds",
        quantity: "1 cup green tea, 1/4 cup almonds",
        availableNutrition:
          "Contains antioxidants and brain-boosting nutrients",
        benefits:
          "Improves mental alertness and provides a healthy snack option",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Stir-Fried Tofu with Vegetables",
        quantity:
          "4 oz tofu, mixed vegetables (bell peppers, broccoli, carrots), soy sauce, ginger, garlic",
        availableNutrition: "High in protein and vitamins for brain function",
        benefits:
          "Supports mental clarity and focus with a nutritious dinner option",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Smoked Salmon and Avocado Bagel",
        quantity: "1 whole grain bagel, smoked salmon slices, 1/2 avocado",
        availableNutrition:
          "Rich in omega-3 fatty acids, protein, and healthy fats",
        benefits: "Supports brain health and provides sustained energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Hard-Boiled Eggs",
        quantity: "2 hard-boiled eggs",
        availableNutrition: "High-quality protein, vitamins, and minerals",
        benefits: "Promotes satiety and supports cognitive function",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Caesar Salad",
        quantity:
          "Grilled chicken breast, romaine lettuce, Parmesan cheese, Caesar dressing",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "Provides sustained energy and supports mental focus",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Tuna Salad Stuffed Cucumber Boats",
        quantity:
          "Cucumber slices filled with tuna salad (canned tuna, Greek yogurt, diced vegetables)",
        availableNutrition:
          "Rich in protein, omega-3 fatty acids, and antioxidants",
        benefits: "A light and refreshing snack that enhances brain function",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Sardines on Whole Grain Crackers",
        quantity: "Whole grain crackers topped with canned sardines",
        availableNutrition:
          "High in omega-3 fatty acids, protein, and vitamins",
        benefits: "Supports brain health and improves cognitive function",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Beef Stir-Fry with Vegetables",
        quantity: "Lean beef strips, mixed vegetables, stir-fry sauce",
        availableNutrition:
          "High-quality protein, fiber, and essential nutrients",
        benefits: "Provides sustained energy and enhances mental clarity",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Smoothie Bowl with Mixed Berries",
        quantity:
          "1 cup mixed berries (strawberries, blueberries, raspberries), 1/2 banana, 1/2 cup Greek yogurt, 1 tablespoon honey, 1/4 cup granola",
        availableNutrition:
          "Rich in antioxidants, vitamins, protein, and fiber",
        benefits: "Supports brain health and provides sustained energy",
        img: "",
        type: "flexitarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Almond Butter and Banana Rice Cakes",
        quantity: "2 rice cakes, 2 tablespoons almond butter, 1/2 banana",
        availableNutrition: "Provides healthy fats, protein, and carbohydrates",
        benefits: "Promotes satiety and boosts cognitive function",
        img: "",
        type: "flexitarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Black Bean Stuffed Bell Peppers",
        quantity:
          "Bell peppers stuffed with quinoa, black beans, corn, tomatoes, and avocado",
        availableNutrition: "High in protein, fiber, vitamins, and minerals",
        benefits: "Supports mental clarity and provides essential nutrients",
        img: "",
        type: "flexitarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Trail Mix with Dried Fruits",
        quantity:
          "1/4 cup mixed nuts and seeds, dried fruits (raisins, apricots, cranberries)",
        availableNutrition: "Provides energy, vitamins, and antioxidants",
        benefits: "A portable and nutritious snack to boost focus",
        img: "",
        type: "flexitarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Cottage Cheese with Pineapple",
        quantity: "1/2 cup cottage cheese, 1/2 cup diced pineapple",
        availableNutrition: "High in protein, calcium, and vitamins",
        benefits: "Supports muscle recovery and aids in relaxation",
        img: "",
        type: "flexitarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Salmon and Asparagus Foil Packets",
        quantity: "Salmon fillet, asparagus spears, lemon slices, herbs",
        availableNutrition:
          "Rich in omega-3 fatty acids, protein, and vitamins",
        benefits: "Promotes brain health and reduces inflammation",
        img: "",
        type: "flexitarian",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Processed Foods",
        disadvantage:
          "Often high in refined sugars, unhealthy fats, and additives, which can impair cognitive function and lead to energy crashes.",
        img: "",
      },
      {
        id: 2,
        dietName: "Sugary Drinks",
        disadvantage:
          "High sugar content can lead to energy spikes followed by crashes, negatively impacting focus and mental clarity.",
        img: "",
      },
      {
        id: 3,
        dietName: "Junk Food",
        disadvantage:
          "High in unhealthy fats, sugars, and additives, which can lead to inflammation in the brain and hinder cognitive function.",
        img: "",
      },
      {
        id: 4,
        dietName: "Alcohol",
        disadvantage:
          "Excessive alcohol consumption can impair cognitive function, disrupt sleep patterns, and lead to decreased mental clarity and focus.",
        img: "",
      },
      {
        id: 5,
        dietName: "Highly Sweetened Breakfast Cereals",
        disadvantage:
          "High sugar content can lead to energy crashes and difficulty concentrating, negatively impacting mental clarity and focus.",
        img: "",
      },
      {
        id: 6,
        dietName: "Fried Foods",
        disadvantage:
          "High in unhealthy fats, fried foods can lead to inflammation in the body and brain, impairing cognitive function and focus.",
        img: "",
      },
      {
        id: 7,
        dietName: "High-Calorie Coffee Drinks",
        disadvantage:
          "High in sugar and unhealthy fats, these drinks can lead to energy crashes and decreased mental clarity over time.",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Walking",
        time: "30-60 minutes",
        repetition: "Daily",
        benefits:
          "Boosts circulation, reduces stress hormones, and enhances mood, leading to improved mental clarity and focus.",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Promotes relaxation, reduces stress, and increases mindfulness, which can enhance mental clarity and focus.",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Meditation",
        time: "15-30 minutes",
        repetition: "Daily",
        benefits:
          "Calms the mind, improves concentration, and enhances awareness, leading to improved mental clarity and focus.",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Pilates",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles, improves posture, and enhances body awareness, contributing to improved mental clarity and focus.",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Tai Chi",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Promotes relaxation, improves balance, and enhances focus and mental clarity through mindful movement.",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Cycling",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Boosts cardiovascular health, reduces stress, and enhances mood, leading to improved mental clarity and focus.",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Mindfulness Practices",
        time: "10-20 minutes",
        repetition: "Daily",
        benefits:
          "Encourages present-moment awareness, reduces distractions, and enhances mental clarity and focus.",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/girl-grey-sweater-showing-circle-ok-sign_144627-51460.jpg?t=st=1713977804~exp=1713981404~hmac=362d37e86a649a9841c42e95f32f9c8cdd8859ea5f41916f3c919a163e410ec7&w=996",
    description:
      "Striving for heightened mental acuity and focus involves embracing practices that enhance cognitive function and minimize distractions. Through mindful nutrition, targeted exercises, and avoiding detrimental habits, one can achieve sharper clarity and sustained concentration for improved cognitive performance.",
    path: "/health/diets/improve-mental-clarity-and-focus",
  },
  {
    id: 9,
    goal_name: "General Well-being",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Fruit and Nut Oatmeal",
        quantity:
          "1/2 cup rolled oats, 1 cup almond milk, mixed fruits (banana, berries), nuts, honey",
        availableNutrition:
          "Provides fiber, vitamins, minerals, and healthy fats",
        benefits:
          "Supports digestion, provides sustained energy, and boosts mood",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Green Smoothie",
        quantity: "Spinach, kale, banana, almond milk, chia seeds",
        availableNutrition:
          "Rich in vitamins, minerals, antioxidants, and fiber",
        benefits:
          "Promotes detoxification, boosts immunity, and provides hydration",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Mediterranean Chickpea Salad",
        quantity:
          "Chickpeas, cucumber, tomatoes, olives, feta cheese, olive oil, lemon juice",
        availableNutrition:
          "High in protein, fiber, healthy fats, and antioxidants",
        benefits:
          "Supports heart health, promotes satiety, and aids in weight management",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Vegetable Sushi Rolls",
        quantity:
          "Nori sheets, sushi rice, avocado, cucumber, carrots, bell peppers",
        availableNutrition:
          "Provides vitamins, minerals, fiber, and healthy fats",
        benefits:
          "Low in calories, promotes satiety, and supports healthy digestion",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Greek Yogurt Parfait",
        quantity: "Greek yogurt, granola, mixed berries, honey",
        availableNutrition:
          "Rich in protein, probiotics, antioxidants, and fiber",
        benefits:
          "Supports gut health, provides sustained energy, and satisfies sweet cravings",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Vegetable Stir-Fry with Tofu",
        quantity:
          "Assorted vegetables (bell peppers, broccoli, carrots) stir-fried with tofu in soy sauce",
        availableNutrition:
          "High in protein, vitamins, minerals, and antioxidants",
        benefits:
          "Supports muscle repair, aids in weight management, and promotes overall health",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Scrambled Eggs with Spinach and Tomatoes",
        quantity: "2 eggs, 1 cup spinach, 1/2 cup diced tomatoes",
        availableNutrition: "High in protein and vitamins",
        benefits:
          "Promotes satiety and provides essential nutrients for the day",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Chia Seeds",
        quantity: "1/2 cup Greek yogurt, 1 tablespoon chia seeds",
        availableNutrition: "Provides probiotics and omega-3s",
        benefits: "Supports gut health and reduces inflammation",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Breast with Quinoa and Vegetables",
        quantity:
          "4 oz chicken breast, 1/2 cup cooked quinoa, mixed vegetables",
        availableNutrition: "High in protein and fiber",
        benefits: "Aids in muscle repair and promotes fullness",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Turkey Breast with Whole Grain Crackers",
        quantity: "2 oz turkey breast, 4 whole grain crackers",
        availableNutrition: "Lean protein and complex carbs",
        benefits: "Supports muscle growth and energy levels",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Mixed Nuts",
        quantity: "1/4 cup mixed nuts",
        availableNutrition: "Provides healthy fats and protein",
        benefits: "Promotes satiety and provides energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Baked Salmon with Brown Rice and Mixed Vegetables",
        quantity: "4 oz salmon, 1/2 cup brown rice, mixed vegetables",
        availableNutrition: "Rich in omega-3 fatty acids",
        benefits: "Reduces inflammation and supports heart health",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Smoothie Bowl",
        quantity:
          "1 frozen banana, 1/2 cup mixed berries, 1/2 cup spinach, 1/4 cup almond milk, toppings (granola, sliced fruits, nuts)",
        availableNutrition:
          "Rich in vitamins, minerals, antioxidants, and fiber",
        benefits: "Provides a refreshing and nutritious start to the day",
        img: "",
        type: "flexitarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Mixed Nuts and Dried Fruits",
        quantity:
          "1/4 cup mixed nuts (almonds, walnuts, cashews) and dried fruits (raisins, apricots)",
        availableNutrition:
          "Provides healthy fats, protein, and natural sugars",
        benefits: "A convenient and energy-boosting snack",
        img: "",
        type: "flexitarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Black Bean Burrito Bowl",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup black beans, mixed vegetables, salsa, avocado slices",
        availableNutrition: "High in protein, fiber, vitamins, and minerals",
        benefits: "Promotes satiety and provides essential nutrients",
        img: "",
        type: "flexitarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Greek Yogurt with Honey and Chia Seeds",
        quantity:
          "1/2 cup Greek yogurt, 1 tablespoon honey, 1 tablespoon chia seeds",
        availableNutrition:
          "Rich in protein, probiotics, omega-3 fatty acids, and antioxidants",
        benefits: "Supports gut health and provides sustained energy",
        img: "",
        type: "flexitarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Hummus and Veggie Platter",
        quantity:
          "Assorted vegetable sticks (carrots, cucumbers, bell peppers) with 2 tablespoons hummus",
        availableNutrition:
          "Provides vitamins, minerals, fiber, and healthy fats",
        benefits: "A satisfying and nutritious snack option",
        img: "",
        type: "flexitarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Stir-Fried Tofu with Mixed Vegetables",
        quantity:
          "4 oz tofu, mixed vegetables (bell peppers, broccoli, carrots), soy sauce, garlic, ginger",
        availableNutrition:
          "High in plant-based protein, fiber, vitamins, and minerals",
        benefits: "Promotes muscle repair and overall well-being",
        img: "",
        type: "flexitarian",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Processed Foods",
        disadvantage:
          "Often high in calories, unhealthy fats, sugars, and additives, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 2,
        dietName: "Sugary Drinks",
        disadvantage:
          "High in empty calories, leading to weight gain and increased risk of obesity-related diseases",
        img: "",
      },
      {
        id: 3,
        dietName: "Fast Food",
        disadvantage:
          "High in unhealthy fats, sugars, and sodium, leading to weight gain and increased risk of heart disease",
        img: "",
      },
      {
        id: 4,
        dietName: "High-Calorie Snacks (e.g., Chips, Cookies, Pastries)",
        disadvantage:
          "High in calories, sugars, and unhealthy fats, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 5,
        dietName: "Fried Foods",
        disadvantage:
          "High in unhealthy fats and calories, leading to weight gain and increased risk of heart disease",
        img: "",
      },
      {
        id: 6,
        dietName: "Junk Food",
        disadvantage:
          "High in unhealthy fats, sugars, and calories, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 7,
        dietName: "Alcohol",
        disadvantage:
          "High in calories and sugars, leading to weight gain and increased risk of liver disease",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Walking",
        time: "30-60 minutes",
        repetition: "Daily",
        benefits:
          "Burns calories, improves cardiovascular health, and boosts mood.",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Improves flexibility, reduces stress, and promotes relaxation.",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Strength Training",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Builds muscle mass, improves metabolism, and enhances overall strength.",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Cycling",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Burns calories, strengthens leg muscles, and improves cardiovascular health.",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Meditation",
        time: "10-20 minutes",
        repetition: "Daily",
        benefits:
          "Reduces stress, promotes mental clarity, and enhances overall well-being.",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Pilates",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles, improves flexibility, and enhances body awareness.",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Swimming",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Provides full-body workout, improves cardiovascular health, and reduces stress on joints.",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/happy-positive-female-woman-making-zen-gesture_74855-2920.jpg?t=st=1713977895~exp=1713981495~hmac=2b91915748217283ade65f5d6bae6903834e3e4a57b1631d84f691a73fd081fa&w=996",
    description:
      "General Well-being encompasses holistic health, balance, and happiness. It involves nurturing physical, mental, and emotional wellness through healthy lifestyle choices, meaningful connections, and self-care practices, ultimately leading to a fulfilling and contented life.",
    path: "/health/diets/general-well-being",
  },
  {
    id: 10,
    goal_name: "Pregnancy and Postpartum",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Whole Grain Pancakes with Mixed Berries",
        quantity:
          "2 whole grain pancakes, 1/2 cup mixed berries, 1 tablespoon maple syrup",
        availableNutrition: "Rich in fiber, vitamins, and antioxidants",
        benefits:
          "Provides sustained energy and essential nutrients for pregnancy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Yogurt Parfait with Granola and Fruit",
        quantity:
          "1/2 cup Greek yogurt, 1/4 cup granola, mixed fruit (e.g., berries, banana)",
        availableNutrition: "Provides probiotics, protein, and healthy carbs",
        benefits: "Supports gut health and provides energy between meals",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa Salad with Chickpeas and Avocado",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup chickpeas, mixed greens, avocado slices",
        availableNutrition: "High in protein, fiber, and healthy fats",
        benefits:
          "Supports baby's development and provides essential nutrients for mom",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Homemade Trail Mix with Dried Fruit",
        quantity:
          "1/4 cup mixed nuts and seeds, dried fruits (e.g., apricots, raisins)",
        availableNutrition: "Provides energy, protein, and vitamins",
        benefits:
          "A convenient and nutritious snack option for busy moms-to-be",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Vegetable Sticks with Hummus",
        quantity:
          "Assorted vegetable sticks (carrots, cucumber, bell peppers) with 2 tablespoons hummus",
        availableNutrition: "Rich in vitamins, fiber, and healthy fats",
        benefits: "Provides a light and satisfying snack option",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Tofu Stir-Fry with Brown Rice",
        quantity: "4 oz tofu, mixed vegetables, soy sauce, brown rice",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "Promotes healthy development for both mom and baby",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Smoked Salmon Bagel",
        quantity:
          "1 whole grain bagel, 2 oz smoked salmon, cream cheese, sliced tomatoes, red onion",
        availableNutrition:
          "Rich in omega-3 fatty acids, protein, and vitamins",
        benefits:
          "Supports fetal development and provides essential nutrients for the mother",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Hard-Boiled Eggs",
        quantity: "2 hard-boiled eggs",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits:
          "Promotes satiety and provides essential nutrients for both mother and baby",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Salad",
        quantity:
          "Grilled chicken breast, mixed greens, cherry tomatoes, cucumber, avocado, balsamic vinaigrette",
        availableNutrition: "High in protein, fiber, and vitamins",
        benefits:
          "Supports muscle repair and provides essential nutrients for pregnancy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Greek Yogurt Parfait",
        quantity: "1/2 cup Greek yogurt, mixed berries, granola",
        availableNutrition: "Rich in protein, probiotics, and antioxidants",
        benefits: "Supports gut health and provides energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Tuna Salad on Whole Grain Crackers",
        quantity:
          "Tuna salad (canned tuna, Greek yogurt, diced celery), whole grain crackers",
        availableNutrition: "High in protein, omega-3 fatty acids, and fiber",
        benefits:
          "Supports brain development in the baby and provides energy for the mother",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Baked Salmon with Roasted Vegetables",
        quantity:
          "4 oz baked salmon fillet, mixed roasted vegetables (bell peppers, zucchini, carrots)",
        availableNutrition:
          "Rich in omega-3 fatty acids, protein, and antioxidants",
        benefits:
          "Supports fetal development and provides essential nutrients for the mother",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Green Smoothie with Protein Powder",
        quantity:
          "1 cup spinach, 1/2 banana, 1/2 cup mixed berries, 1 scoop protein powder, 1 cup almond milk",
        availableNutrition: "Provides vitamins, minerals, protein, and fiber",
        benefits: "Supports overall health and provides energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt Parfait",
        quantity:
          "1/2 cup Greek yogurt, 1/4 cup granola, 1/2 cup mixed berries",
        availableNutrition: "Rich in protein, calcium, and antioxidants",
        benefits: "Supports gut health and provides energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Black Bean Bowl with Avocado",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup black beans, mixed vegetables, 1/4 avocado",
        availableNutrition:
          "High in protein, fiber, healthy fats, and vitamins",
        benefits: "Supports muscle repair and provides essential nutrients",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Mixed Nuts and Dried Fruits",
        quantity: "1/4 cup mixed nuts and seeds, 1/4 cup dried fruits",
        availableNutrition: "Provides healthy fats, protein, and energy",
        benefits: "A convenient and nutritious snack option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Hummus with Whole Grain Crackers",
        quantity: "2 tablespoons hummus, 4 whole grain crackers",
        availableNutrition: "Rich in fiber, protein, and healthy fats",
        benefits: "Supports satiety and provides essential nutrients",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Vegetable Stir-Fry with Tofu",
        quantity: "Assorted vegetables, 4 oz tofu, soy sauce, ginger, garlic",
        availableNutrition: "High in vitamins, minerals, protein, and fiber",
        benefits: "Supports overall health and provides a satisfying meal",
        img: "",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Alcohol",
        disadvantage:
          "Alcohol consumption during pregnancy can harm the developing fetus and lead to fetal alcohol spectrum disorders.",
        img: "",
      },
      {
        id: 2,
        dietName: "Caffeine",
        disadvantage:
          "Excessive caffeine intake can increase the risk of miscarriage and low birth weight. It may also interfere with sleep patterns.",
        img: "",
      },
      {
        id: 3,
        dietName: "Raw Seafood",
        disadvantage:
          "Raw seafood can contain harmful bacteria and parasites that may cause foodborne illnesses, which can be particularly dangerous during pregnancy.",
        img: "",
      },
      {
        id: 4,
        dietName: "High-Mercury Fish",
        disadvantage:
          "Fish high in mercury (such as shark, swordfish, king mackerel, and tilefish) can negatively affect fetal development and should be avoided during pregnancy.",
        img: "",
      },
      {
        id: 5,
        dietName: "Unpasteurized Dairy Products",
        disadvantage:
          "Unpasteurized dairy products may contain harmful bacteria such as Listeria, which can lead to miscarriage, stillbirth, or other serious health problems for the fetus.",
        img: "",
      },
      {
        id: 6,
        dietName: "Raw or Undercooked Meat",
        disadvantage:
          "Raw or undercooked meat may contain harmful bacteria like Salmonella, E. coli, or Toxoplasma, which can cause foodborne illnesses and pose risks to the developing fetus.",
        img: "",
      },
      {
        id: 7,
        dietName: "Highly Processed Foods",
        disadvantage:
          "Highly processed foods often contain additives, preservatives, and unhealthy fats that offer little nutritional value and may contribute to gestational diabetes and excessive weight gain.",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Prenatal Yoga",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Improves flexibility, strengthens muscles used during childbirth, reduces stress and anxiety, and promotes relaxation.",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Walking",
        time: "20-30 minutes",
        repetition: "Daily",
        benefits:
          "Promotes cardiovascular health, improves mood, helps maintain a healthy weight, and prepares the body for labor.",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Pelvic Floor Exercises (Kegels)",
        time: "5-10 minutes",
        repetition: "Daily",
        benefits:
          "Strengthens pelvic floor muscles, improves bladder control, and helps prevent pelvic floor dysfunction during and after pregnancy.",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Swimming",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Provides a full-body workout with minimal impact on joints, improves circulation, and relieves back pain and swelling.",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Light Strength Training",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Builds muscle strength to support the changing body during pregnancy and aids in postpartum recovery.",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Pilates",
        time: "30-45 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles, improves posture, and enhances stability, which are beneficial during pregnancy and postpartum.",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Low-Impact Aerobics",
        time: "30-45 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Provides cardiovascular benefits without putting stress on joints, improves mood, and boosts energy levels.",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/pregnant-woman-holding-greeting-card_58466-11218.jpg?t=st=1713978032~exp=1713981632~hmac=f1134cefbcb6e3425631fd4fbcb274d911821af3e79cb49e968b4091c78a1fc3&w=996",
    description:
      "Pregnancy and Postpartum: A transformative journey encompassing conception, growth, and nurturing of new life. From the joys of pregnancy to the challenges and triumphs of postpartum recovery, it's a sacred phase of motherhood marked by resilience and love.",
    path: "/health/diets/pregnancy-and-postpartum",
  },
  {
    id: 11,
    goal_name: "Intermittent Fasting",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Vegetable Omelette",
        quantity: "2 eggs, bell peppers, onions, spinach, tomatoes",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "Provides sustained energy and promotes fullness",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt Parfait",
        quantity: "1/2 cup Greek yogurt, mixed berries, granola",
        availableNutrition: "Rich in protein, probiotics, and antioxidants",
        benefits: "Supports gut health and provides energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Chickpea Salad",
        quantity:
          "Mixed greens, chickpeas, cucumbers, feta cheese, lemon-tahini dressing",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "Promotes satiety and aids in digestion",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Homemade Guacamole with Veggie Sticks",
        quantity: "Avocado, tomatoes, onions, lime, assorted vegetable sticks",
        availableNutrition: "Provides healthy fats, vitamins, and fiber",
        benefits: "A satisfying and nutritious snack option",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Mixed Nuts",
        quantity: "Assorted mixed nuts (almonds, walnuts, cashews)",
        availableNutrition: "Rich in healthy fats, protein, and antioxidants",
        benefits: "Promotes satiety and provides energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dieTime: "Dinner",
        dietName: "Grilled Portobello Mushroom Burger",
        quantity:
          "Grilled portobello mushroom caps, whole grain burger bun, lettuce, tomato, onion",
        availableNutrition: "High in fiber, vitamins, and minerals",
        benefits: "A delicious and filling dinner option",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Egg and Avocado Wrap",
        quantity: "2 scrambled eggs, 1/2 avocado, whole grain wrap",
        availableNutrition: "Rich in protein, healthy fats, and carbohydrates",
        benefits: "Provides sustained energy and promotes satiety",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Almonds",
        quantity: "1/2 cup Greek yogurt, handful of almonds",
        availableNutrition: "High in protein, calcium, and healthy fats",
        benefits: "Supports muscle repair and provides energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Salad",
        quantity:
          "Grilled chicken breast, mixed greens, cherry tomatoes, cucumbers, balsamic vinaigrette",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "Promotes muscle growth and aids in weight management",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Turkey and Cheese Roll-Ups",
        quantity: "Slices of turkey breast, cheese, spinach leaves",
        availableNutrition: "Provides protein, calcium, and vitamins",
        benefits: "A satisfying and nutritious snack option",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Smoked Salmon with Whole Grain Crackers",
        quantity: "Smoked salmon slices, whole grain crackers",
        availableNutrition: "Rich in omega-3 fatty acids, protein, and fiber",
        benefits: "Supports heart health and provides essential nutrients",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Grilled Steak with Steamed Vegetables",
        quantity: "Grilled steak, assorted steamed vegetables",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "Promotes muscle repair and aids in weight management",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Avocado and Egg Breakfast Bowl",
        quantity: "1/2 avocado, 2 boiled eggs, quinoa, mixed greens",
        availableNutrition: "Rich in protein, healthy fats, and fiber",
        benefits: "Provides sustained energy and promotes satiety",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Trail Mix with Dried Fruits",
        quantity: "Assorted nuts, seeds, and dried fruits",
        availableNutrition: "Provides protein, healthy fats, and antioxidants",
        benefits: "A convenient and nutritious snack option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Black Bean Burrito Bowl",
        quantity:
          "Cooked quinoa, black beans, mixed vegetables, salsa, avocado slices",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "Promotes muscle repair and aids in weight management",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Hummus and Veggie Wraps",
        quantity: "Whole grain wrap, hummus, assorted vegetable slices",
        availableNutrition: "Provides fiber, vitamins, and healthy fats",
        benefits: "A satisfying and nutritious snack option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Greek Yogurt with Honey",
        quantity: "1/2 cup Greek yogurt, drizzle of honey",
        availableNutrition: "Rich in protein, probiotics, and antioxidants",
        benefits: "Supports gut health and provides energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Salmon and Quinoa Stuffed Bell Peppers",
        quantity: "Bell peppers stuffed with salmon, quinoa, vegetables",
        availableNutrition: "High in omega-3 fatty acids, protein, and fiber",
        benefits: "Supports heart health and aids in weight management",
        img: "",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Processed Foods",
        disadvantage:
          "Often high in calories, unhealthy fats, sugars, and additives, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 2,
        dietName: "Sugary Drinks",
        disadvantage:
          "High in empty calories, leading to weight gain and increased risk of obesity-related diseases",
        img: "",
      },
      {
        id: 3,
        dietName: "Fast Food",
        disadvantage:
          "High in unhealthy fats, sugars, and sodium, leading to weight gain and increased risk of heart disease",
        img: "",
      },
      {
        id: 4,
        dietName: "High-Calorie Snacks",
        disadvantage:
          "High in calories, sugars, and unhealthy fats, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 5,
        dietName: "Alcohol",
        disadvantage:
          "High in calories and sugars, leading to weight gain and increased risk of liver disease",
        img: "",
      },
      {
        id: 6,
        dietName: "Highly Sweetened Breakfast Cereals",
        disadvantage:
          "High in sugars and calories, leading to weight gain and increased risk of obesity-related diseases",
        img: "",
      },
      {
        id: 7,
        dietName: "Fried Foods",
        disadvantage:
          "High in unhealthy fats and calories, leading to weight gain and increased risk of heart disease",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Walking",
        time: "30-60 minutes",
        repetition: "Daily",
        benefits:
          "Burns calories, improves cardiovascular health, and boosts metabolism.",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Running",
        time: "20-30 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Burns more calories per minute than walking, improves cardiovascular health, and tones muscles.",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Cycling",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Burns calories, strengthens legs and core muscles, and improves cardiovascular health.",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Swimming",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Burns calories, tones muscles, and improves cardiovascular health with low impact on joints.",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Jumping Rope",
        time: "15-30 minutes",
        repetition: "Daily",
        benefit:
          "Burns calories, improves coordination, and strengthens lower body muscles.",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Weightlifting, Bodyweight Exercises",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Builds muscle mass, increases metabolism, and improves overall body composition.",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Improves flexibility, reduces stress, and promotes mindfulness, which can help with weight management.",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/alarm-glass-water-near-fruits_171337-15377.jpg?t=st=1713978097~exp=1713981697~hmac=565abb9e21c1ef1e288a01afc305fc92304b15c333f1cf3cf8144836e264a8bb&w=996",
    description:
      "Intermittent Fasting involves cycling between periods of eating and fasting, promoting weight loss, improved metabolic health, and longevity. It restricts the time window for food consumption, leading to enhanced fat burning and cellular repair, supporting overall well-being.",
    path: "/health/diets/intermittent-fasting",
  },
  {
    id: 12,
    goal_name: "Management of Diabetes",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Oatmeal with Berries and Almonds",
        quantity:
          "1/2 cup rolled oats, 1 cup almond milk, 1/2 cup mixed berries, 1 tablespoon almonds",
        availableNutrition: "High in fiber, antioxidants, and healthy fats",
        benefits: "Stabilizes blood sugar levels and provides sustained energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Chia Seeds",
        quantity: "1/2 cup Greek yogurt, 1 tablespoon chia seeds",
        availableNutrition:
          "Rich in protein, probiotics, and omega-3 fatty acids",
        benefits: "Supports gut health and helps regulate blood sugar",
        img: "img/greek_yogurt_chia.jpg",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Mixed Vegetable Salad with Tofu",
        quantity: "Mixed vegetables, 4 oz tofu, lemon-tahini dressing",
        availableNutrition:
          "Low in carbohydrates and calories, high in fiber and protein",
        benefits:
          "Helps maintain stable blood sugar levels and promotes satiety",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Cucumber Slices with Hummus",
        quantity: "1 cucumber, 2 tablespoons hummus",
        availableNutrition:
          "Low in carbohydrates, rich in vitamins and minerals",
        benefits:
          "Provides a crunchy and hydrating snack option without spiking blood sugar",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Apple Slices with Peanut Butter",
        quantity: "1 medium apple, 2 tablespoons peanut butter",
        availableNutrition: "Provides fiber, healthy fats, and protein",
        benefits:
          "A satisfying and balanced snack that helps control blood sugar levels",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Grilled Eggplant and Zucchini with Quinoa",
        quantity: "Grilled eggplant and zucchini slices, 1/2 cup cooked quinoa",
        availableNutrition:
          "Low glycemic index, high in fiber and essential nutrients",
        benefits:
          "Promotes stable blood sugar levels and provides a nutritious meal",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Egg and Vegetable Breakfast Burrito",
        quantity:
          "2 whole eggs, bell peppers, onions, spinach, whole wheat tortilla",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits:
          "Promotes stable blood sugar levels and provides sustained energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Cottage Cheese with Pineapple",
        quantity: "1/2 cup cottage cheese, 1/2 cup diced pineapple",
        availableNutrition: "Rich in protein, calcium, and vitamins",
        benefits:
          "Supports muscle repair and provides a low glycemic index snack option",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Salad",
        quantity:
          "Grilled chicken breast, mixed greens, cucumbers, tomatoes, balsamic vinaigrette",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "Promotes satiety and aids in blood sugar management",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Turkey Roll-Ups",
        quantity: "Slices of deli turkey, lettuce, cucumber, hummus",
        availableNutrition: "Provides lean protein, vitamins, and minerals",
        benefits: "A satisfying and low-carb snack option",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Tuna Salad on Whole Grain Crackers",
        quantity:
          "Canned tuna, mixed with Greek yogurt, celery, onion, served on whole grain crackers",
        availableNutrition: "High in protein, omega-3 fatty acids, and fiber",
        benefits: "Promotes satiety and supports heart health",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Salmon with Roasted Vegetables",
        quantity:
          "Grilled salmon fillet, mixed roasted vegetables (bell peppers, zucchini, carrots)",
        availableNutrition:
          "Rich in omega-3 fatty acids, vitamins, and antioxidants",
        benefits: "Supports heart health and aids in blood sugar management",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Spinach and Mushroom Omelette",
        quantity: "2 eggs, spinach, mushrooms, onions, cheese (optional)",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "Promotes blood sugar control and supports overall health",
        img: "",
        type: "flexitarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Almond Butter",
        quantity: "1/2 cup Greek yogurt, 1 tablespoon almond butter",
        availableNutrition: "Rich in protein, healthy fats, and probiotics",
        benefits:
          "Helps stabilize blood sugar levels and provides sustained energy",
        img: "",
        type: "flexitarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Black Bean Bowl",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup black beans, mixed vegetables, avocado slices",
        availableNutrition: "High in fiber, protein, and essential nutrients",
        benefits: "Promotes satiety and helps regulate blood sugar levels",
        img: "",
        type: "flexitarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Apple Slices with Peanut Butter",
        quantity: "1 apple, 2 tablespoons peanut butter",
        availableNutrition: "Provides fiber, healthy fats, and protein",
        benefits: "A satisfying snack that helps control blood sugar levels",
        img: "",
        type: "flexitarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Mixed Nuts and Berries",
        quantity: "Assorted mixed nuts, handful of berries",
        availableNutrition: "Rich in healthy fats, antioxidants, and vitamins",
        benefits: "Helps stabilize blood sugar levels and provides nutrients",
        img: "",
        type: "flexitarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Grilled Salmon with Roasted Vegetables",
        quantity: "4 oz salmon fillet, assorted roasted vegetables",
        availableNutrition:
          "High in omega-3 fatty acids, fiber, and antioxidants",
        benefits: "Supports heart health and helps manage blood sugar levels",
        img: "",
        type: "flexitarian",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Sugary Foods",
        disadvantage:
          "High in refined sugars, which can lead to blood sugar spikes and worsen insulin resistance.",
        img: "",
      },
      {
        id: 2,
        dietName: "Processed Foods",
        disadvantage:
          "Often high in unhealthy fats, sodium, and additives, contributing to weight gain and blood sugar imbalances.",
        img: "",
      },
      {
        id: 3,
        dietName: "Sugary Drinks",
        disadvantage:
          "High in added sugars and empty calories, leading to weight gain and increased risk of diabetes complications.",
        img: "",
      },
      {
        id: 4,
        dietName: "White Bread and Pasta",
        disadvantage:
          "High glycemic index foods that can cause rapid spikes in blood sugar levels.",
        img: "",
      },
      {
        id: 5,
        dietName: "Fried Foods",
        disadvantage:
          "High in unhealthy fats and calories, which can contribute to insulin resistance and weight gain.",
        img: "",
      },
      {
        id: 6,
        dietName: "Saturated Fats",
        disadvantage:
          "Can increase inflammation and insulin resistance, raising the risk of heart disease and diabetes complications.",
        img: "",
      },
      {
        id: 7,
        dietName: "High-Sodium Foods",
        disadvantage:
          "Can increase blood pressure and lead to fluid retention, worsening diabetes-related complications.",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Brisk Walking",
        time: "30-45 minutes",
        repetition: "Daily",
        benefits:
          "Improves blood sugar control, aids weight loss, and enhances cardiovascular health.",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Cycling",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Helps reduce insulin resistance, promotes weight loss, and strengthens leg muscles.",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Swimming",
        time: "30-45 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Improves insulin sensitivity, aids weight management, and enhances overall fitness.",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Reduces stress, improves insulin sensitivity, and promotes relaxation.",
        img: "",
      },

      {
        id: 5,
        exerciseName: "Strength Training",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Increases muscle mass, improves insulin sensitivity, and enhances overall metabolic health.",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Tai Chi",
        time: "30-45 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Improves balance, reduces stress, and helps regulate blood sugar levels.",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Pilates",
        time: "30-45 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles, improves flexibility, and aids in stress management.",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/electrical-thermometer-hands_23-2147934488.jpg?t=st=1713978147~exp=1713981747~hmac=70a8b2dc43b349db1ca357bfc0e48294245eed5c7362a367cc0da8d077191d15&w=996",
    description:
      "Management of Diabetes involves careful monitoring of blood sugar levels, adopting a balanced diet, regular physical activity, and medication adherence. Lifestyle modifications are pivotal in controlling this condition and reducing the risk of complications.",
    path: "/health/diets/management-of-diabetes",
  },

  {
    id: 13,
    goal_name: "Management of Hypertension",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Oatmeal with Berries and Almonds",
        quantity:
          "1/2 cup rolled oats, 1 cup almond milk, 1/4 cup mixed berries, 1 tablespoon almonds",
        availableNutrition: "Rich in fiber, antioxidants, and healthy fats",
        benefits: "Helps lower blood pressure and cholesterol levels",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Walnuts",
        quantity: "1/2 cup Greek yogurt, 1 tablespoon chopped walnuts",
        availableNutrition:
          "Provides protein, calcium, and omega-3 fatty acids",
        benefits: "Supports heart health and helps control blood pressure",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Spinach Salad with Chickpeas and Avocado",
        quantity:
          "Fresh spinach leaves, 1/2 cup chickpeas, 1/4 avocado, lemon-tahini dressing",
        availableNutrition: "High in potassium, magnesium, and vitamins",
        benefits: "Aids in blood pressure regulation and heart health",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Carrot Sticks with Hummus",
        quantity: "Carrot sticks with 2 tablespoons hummus",
        availableNutrition: "Provides fiber, vitamins, and healthy fats",
        benefits: "Helps control blood pressure and promotes satiety",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Cucumber Slices with Cottage Cheese",
        quantity: "Cucumber slices with 1/2 cup cottage cheese",
        availableNutrition: "Rich in protein, calcium, and hydration",
        benefits:
          "Supports blood pressure management and provides a light snack option",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Grilled Vegetable Quinoa Bowl",
        quantity:
          "Grilled vegetables (bell peppers, zucchini, eggplant) served over quinoa",
        availableNutrition:
          "High in fiber, antioxidants, and essential nutrients",
        benefits: "Supports heart health and aids in blood pressure control",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Smoked Salmon and Avocado Toast",
        quantity: "1 slice whole grain bread, smoked salmon, 1/2 avocado",
        availableNutrition:
          "Rich in omega-3 fatty acids, protein, and healthy fats",
        benefits: "Supports heart health and helps lower blood pressure",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Almonds",
        quantity: "1/2 cup Greek yogurt, handful of almonds",
        availableNutrition: "Provides protein, calcium, and healthy fats",
        benefits: "Supports satiety and helps regulate blood pressure",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Salad",
        quantity:
          "Grilled chicken breast, mixed greens, tomatoes, cucumbers, olive oil dressing",
        availableNutrition: "High in lean protein, vitamins, and antioxidants",
        benefits: "Promotes heart health and aids in weight management",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Turkey and Cheese Roll-Ups",
        quantity: "Sliced turkey breast, cheese slices",
        availableNutrition: "Provides protein, calcium, and healthy fats",
        benefits: "A satisfying and nutritious snack option",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Cottage Cheese with Pineapple",
        quantity: "1/2 cup cottage cheese, pineapple chunks",
        availableNutrition: "Rich in protein, vitamins, and minerals",
        benefits: "Supports muscle health and aids in digestion",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Baked Salmon with Steamed Vegetables",
        quantity: "4 oz salmon fillet, mixed vegetables",
        availableNutrition:
          "High in omega-3 fatty acids, fiber, and antioxidants",
        benefits: "Promotes heart health and helps lower blood pressure",
        img: "",
        type: "non-vegetarian",
      },
    ],

    fltariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Oatmeal with Mixed Berries",
        quantity: "1/2 cup rolled oats, 1 cup almond milk, mixed berries",
        availableNutrition: "High in fiber, antioxidants, and vitamins",
        benefits: "Supports heart health and aids in lowering blood pressure",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Flaxseeds",
        quantity: "1/2 cup Greek yogurt, 1 tablespoon flaxseeds",
        availableNutrition:
          "Rich in probiotics, omega-3 fatty acids, and protein",
        benefits: "Supports gut health and reduces inflammation",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Black Bean Bowl",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup black beans, mixed vegetables, salsa",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "Promotes satiety and aids in weight management",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Hummus with Carrot Sticks",
        quantity: "2 tablespoons hummus, carrot sticks",
        availableNutrition: "Rich in fiber, healthy fats, and vitamins",
        benefits: "Provides a satisfying and nutritious snack option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Mixed Nuts",
        quantity: "Assorted mixed nuts (almonds, walnuts, pistachios)",
        availableNutrition: "Provides healthy fats, protein, and antioxidants",
        benefits: "Supports heart health and reduces blood pressure",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Salmon with Roasted Vegetables",
        quantity: "Grilled salmon fillet, mixed roasted vegetables",
        availableNutrition:
          "Rich in omega-3 fatty acids, vitamins, and minerals",
        benefits: "Supports cardiovascular health and lowers blood pressure",
        img: "",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "High-Sodium Foods",
        disadvantage:
          "High sodium intake can lead to increased blood pressure levels and risk of cardiovascular diseases.",
        img: "",
      },
      {
        id: 2,
        dietName: "Processed Meats",
        disadvantage:
          "Processed meats often contain high levels of sodium, saturated fats, and additives, which can contribute to hypertension and heart disease.",
        img: "",
      },
      {
        id: 3,
        dietName: "Canned Soups and Broths",
        disadvantage:
          "Canned soups and broths are often high in sodium content, which can elevate blood pressure levels and worsen hypertension.",
        img: "",
      },
      {
        id: 4,
        dietName: "Fast Food",
        disadvantage:
          "Fast food is typically high in sodium, unhealthy fats, and calories, which can contribute to hypertension and other health issues.",
        img: "",
      },
      {
        id: 5,
        dietName: "Sugary Beverages",
        disadvantage:
          "Sugary beverages such as soda and sweetened drinks can lead to weight gain and increase the risk of hypertension and other cardiovascular diseases.",
        img: "",
      },
      {
        id: 6,
        dietName: "Processed Snacks (e.g., Chips, Crackers)",
        disadvantage:
          "Processed snacks are often high in sodium, unhealthy fats, and calories, which can contribute to hypertension and weight gain.",
        img: "",
      },
      {
        id: 7,
        dietName: "Alcohol",
        disadvantage:
          "Excessive alcohol consumption can raise blood pressure levels and increase the risk of hypertension and heart disease.",
        img: "",
      },
    ],
    recomendedExercises: [
      {
        id: 1,
        exerciseName: "Brisk Walking",
        time: "30-45 minutes",
        repetition: "Daily",
        benefits:
          "Lowers blood pressure, improves cardiovascular health, and helps with weight management",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Cycling",
        time: "30-60 minutes",
        repetition: "3-5 times a week",
        benefits:
          "Improves heart health, strengthens muscles, and reduces stress",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Swimming",
        time: "20-40 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Promotes cardiovascular fitness, tones muscles, and reduces stress on joints",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Reduces stress, lowers blood pressure, and improves flexibility and balance",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Strength Training",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Builds muscle mass, improves metabolism, and helps control blood pressure",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Tai Chi",
        time: "20-40 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Reduces stress, improves balance and flexibility, and helps control blood pressure",
        img: "img/tai_chi.jpg",
      },
    ],
    img:
      "https://img.freepik.com/free-psd/patient-routine-medical-check_23-2150493268.jpg?t=st=1713978260~exp=1713981860~hmac=db994ac0fc4b0ffa80c2e18957edde53c0ab80c47db04e507486fd9ce258b853&w=996",
    description:
      "Management of Hypertension involves lifestyle changes such as dietary modifications, regular exercise, stress management, and medication adherence. Monitoring blood pressure levels regularly is crucial for maintaining optimal health and reducing the risk of cardiovascular complications.",
    path: "/health/diets/management-of-hypertension",
  },

  {
    id: 14,
    goal_name: "Management of High Cholesterol",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Oatmeal with Almonds and Berries",
        quantity:
          "1/2 cup rolled oats, 1 tablespoon almonds, 1/4 cup mixed berries",
        availableNutrition: "High in fiber, antioxidants, and healthy fats",
        benefits: "Helps lower cholesterol levels and supports heart health",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Fruit and Nut Bar",
        quantity: "1 bar (made with nuts, seeds, and dried fruits)",
        availableNutrition: "Provides fiber, healthy fats, and vitamins",
        benefits:
          "A convenient and nutritious snack option to manage cholesterol",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Chickpea and Vegetable Stir-Fry",
        quantity: "1 cup cooked chickpeas, mixed vegetables, stir-fry sauce",
        availableNutrition: "Rich in protein, fiber, and essential nutrients",
        benefits: "Supports cholesterol management and provides satiety",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Greek Yogurt with Honey",
        quantity: "1/2 cup Greek yogurt, 1 teaspoon honey",
        availableNutrition: "High in protein and probiotics",
        benefits: "Supports gut health and helps regulate cholesterol levels",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Avocado Slices on Whole Grain Crackers",
        quantity: "1/2 avocado, whole grain crackers",
        availableNutrition: "Provides healthy fats, fiber, and plant sterols",
        benefits: "Helps lower LDL (bad) cholesterol levels",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Grilled Tofu with Steamed Broccoli",
        quantity: "4 oz grilled tofu, steamed broccoli",
        availableNutrition:
          "Rich in plant-based protein, vitamins, and minerals",
        benefits: "Supports heart health and aids in cholesterol management",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Omelette with Spinach and Feta Cheese",
        quantity: "2 eggs, handful of spinach, 1/4 cup feta cheese",
        availableNutrition: "Rich in protein, vitamins, and minerals",
        benefits: "Provides essential nutrients and supports muscle repair",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Turkey and Cheese Roll-Ups",
        quantity: "4 slices turkey breast, 2 slices cheese",
        availableNutrition: "High in protein and calcium",
        benefits: "A satisfying and protein-rich snack option",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Salmon Salad",
        quantity:
          "4 oz grilled salmon fillet, mixed greens, cherry tomatoes, balsamic vinaigrette",
        availableNutrition: "Rich in omega-3 fatty acids and antioxidants",
        benefits: "Supports heart health and lowers cholesterol levels",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Cottage Cheese with Pineapple",
        quantity: "1/2 cup cottage cheese, 1/2 cup diced pineapple",
        availableNutrition: "Provides protein, calcium, and vitamin C",
        benefits: "A refreshing and protein-packed snack",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Boiled Eggs with Sriracha Sauce",
        quantity: "2 boiled eggs, sriracha sauce for dipping",
        availableNutrition: "High in protein and essential nutrients",
        benefits: "A quick and protein-rich snack option",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Baked Chicken Breast with Steamed Vegetables",
        quantity: "6 oz baked chicken breast, mixed vegetables",
        availableNutrition: "Lean protein and fiber-rich vegetables",
        benefits: "Supports muscle growth and aids in weight management",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Oatmeal with Almond Butter and Berries",
        quantity:
          "1/2 cup rolled oats, 1 tablespoon almond butter, mixed berries",
        availableNutrition:
          "Rich in soluble fiber, healthy fats, and antioxidants",
        benefits:
          "Helps lower cholesterol levels and provides sustained energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt Parfait with Nuts and Seeds",
        quantity:
          "1/2 cup Greek yogurt, 1 tablespoon nuts/seeds, drizzle of honey",
        availableNutrition: "Provides probiotics, protein, and healthy fats",
        benefits: "Supports heart health and satisfies hunger between meals",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Salmon Salad",
        quantity:
          "4 oz grilled salmon, mixed greens, cherry tomatoes, cucumber, lemon vinaigrette",
        availableNutrition:
          "High in omega-3 fatty acids, protein, and vitamins",
        benefits: "Promotes heart health and helps lower cholesterol levels",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Hummus with Whole Grain Crackers",
        quantity: "2 tablespoons hummus, 4 whole grain crackers",
        availableNutrition: "Provides fiber, protein, and healthy fats",
        benefits: "A satisfying and heart-healthy snack option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Mixed Nuts and Dried Fruits",
        quantity:
          "1/4 cup mixed nuts and dried fruits (e.g., almonds, walnuts, apricots)",
        availableNutrition: "Rich in unsaturated fats, fiber, and antioxidants",
        benefits: "Supports heart health and provides satiety",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Vegetable Stir-Fry with Tofu",
        quantity: "Assorted vegetables, tofu, soy sauce, ginger, garlic",
        availableNutrition: "High in fiber, vitamins, and plant-based protein",
        benefits: "A cholesterol-lowering and nutritious dinner option",
        img: "",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Processed Meats",
        disadvantage:
          "High in saturated fats and sodium, linked to increased cholesterol levels and heart disease risk",
        img: "",
      },
      {
        id: 2,
        dietName: "Full-Fat Dairy Products",
        disadvantage:
          "Contain high levels of saturated fats, which can raise LDL cholesterol levels",
        img: "",
      },
      {
        id: 3,
        dietName: "Trans Fats",
        disadvantage:
          "Found in partially hydrogenated oils, raise LDL cholesterol and lower HDL cholesterol levels",
        img: "",
      },
      {
        id: 4,
        dietName: "Deep-Fried Foods",
        disadvantage:
          "High in unhealthy fats and calories, contribute to high cholesterol levels and heart disease risk",
        img: "",
      },
      {
        id: 5,
        dietName: "Packaged Snacks and Baked Goods",
        disadvantage:
          "Often contain trans fats and high levels of refined carbohydrates, leading to elevated cholesterol levels",
        img: "",
      },
      {
        id: 6,
        dietName: "Sugary Drinks",
        disadvantage:
          "High in added sugars, contribute to weight gain and increased cholesterol levels",
        img: "",
      },
      {
        id: 7,
        dietName: "Processed Foods",
        disadvantage:
          "High in unhealthy fats, sugars, and additives, can raise cholesterol levels and increase heart disease risk",
        img: "",
      },
      {
        id: 8,
        dietName: "Excessive Alcohol Consumption",
        disadvantage:
          "Can raise triglyceride levels and contribute to higher cholesterol levels",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Brisk Walking",
        time: "30-45 minutes",
        repetition: "5 times a week",
        benefits:
          "Improves cardiovascular health, lowers LDL (bad) cholesterol, and raises HDL (good) cholesterol levels",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Cycling",
        time: "45-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Strengthens the heart and lungs, helps in weight management, and reduces LDL cholesterol levels",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Swimming",
        time: "30-45 minutes",
        repetition: "3 times a week",
        benefits:
          "Aerobic exercise that improves cardiovascular health and helps in weight management",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "3-5 times a week",
        benefits:
          "Reduces stress, improves flexibility, and promotes overall well-being",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Resistance Training",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Builds muscle mass, boosts metabolism, and aids in weight management",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Tai Chi",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits: "Improves balance, flexibility, and reduces stress levels",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Pilates",
        time: "30-45 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles, improves flexibility, and enhances posture",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/red-abstract-background-oil-bubble-water-wallpaper_53876-142979.jpg?t=st=1713978531~exp=1713982131~hmac=27b64c6517395309e850025d6a93faa8ef80276f873fccd3de8a2c061c60f899&w=996",
    description:
      "Management of High Cholesterol involves adopting a balanced diet, regular exercise, and lifestyle changes to reduce LDL (bad) cholesterol levels and promote heart health. With a focus on healthy habits, individuals can mitigate the risks associated with high cholesterol.",
    path: "/health/diets/management-of-high-cholesterol",
  },
  {
    id: 15,
    goal_name: "Management of Digestive Issues",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Oatmeal with Banana and Almond Butter",
        quantity:
          "1/2 cup rolled oats, 1 sliced banana, 1 tablespoon almond butter",
        availableNutrition:
          "Rich in soluble fiber, potassium, and healthy fats",
        benefits: "Promotes digestive health and provides sustained energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Yogurt with Chia Seeds and Honey",
        quantity: "1/2 cup yogurt, 1 tablespoon chia seeds, 1 teaspoon honey",
        availableNutrition:
          "Provides probiotics, omega-3 fatty acids, and natural sweeteners",
        benefits: "Supports gut health and aids in digestion",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Vegetable Soup with Whole Grain Bread",
        quantity: "1 cup vegetable soup, 1 slice whole grain bread",
        availableNutrition: "High in fiber, vitamins, and minerals",
        benefits:
          "Easy to digest and provides essential nutrients for gut health",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Fruit Smoothie with Flaxseeds",
        quantity:
          "1 cup mixed fruits, 1 tablespoon ground flaxseeds, 1/2 cup almond milk",
        availableNutrition:
          "Provides fiber, antioxidants, and omega-3 fatty acids",
        benefits:
          "Supports digestive regularity and provides essential nutrients",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Rice Cakes with Avocado",
        quantity: "2 rice cakes, 1/2 avocado, sprinkle of sea salt",
        availableNutrition:
          "Provides carbohydrates, healthy fats, and minerals",
        benefits: "Easy to digest and provides satiety",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Steamed Vegetables with Quinoa",
        quantity: "Assorted steamed vegetables, 1/2 cup cooked quinoa",
        availableNutrition: "High in fiber, protein, and antioxidants",
        benefits: "Gentle on the stomach and provides essential nutrients",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Scrambled Eggs with Spinach",
        quantity: "2 eggs, 1 cup spinach",
        availableNutrition: "High in protein, iron, and vitamins",
        benefits:
          "Easy-to-digest protein with added fiber for digestive health",
        img: "img/scrambled_eggs_spinach.jpg",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Almonds",
        quantity: "1/2 cup Greek yogurt, 1/4 cup almonds",
        availableNutrition: "Rich in probiotics, protein, and healthy fats",
        benefits: "Supports gut health and provides sustained energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Salad",
        quantity:
          "4 oz grilled chicken breast, mixed greens, vegetables, vinaigrette dressing",
        availableNutrition: "High in lean protein, vitamins, and antioxidants",
        benefits:
          "Easy-to-digest protein with fiber-rich vegetables for digestive health",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Turkey and Cheese Roll-Ups",
        quantity: "2 slices turkey breast, 2 slices cheese",
        availableNutrition: "Provides protein, calcium, and healthy fats",
        benefits: "A light and portable snack option for digestive comfort",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Cottage Cheese with Pineapple",
        quantity: "1/2 cup cottage cheese, 1/2 cup pineapple chunks",
        availableNutrition: "High in protein, calcium, and vitamins",
        benefits:
          "Easy-to-digest protein with added digestive enzymes from pineapple",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Salmon with Steamed Vegetables",
        quantity: "4 oz salmon fillet, mixed vegetables",
        availableNutrition:
          "Rich in omega-3 fatty acids, vitamins, and minerals",
        benefits:
          "Heart-healthy protein option with fiber-rich vegetables for digestive support",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Banana Oat Pancakes",
        quantity:
          "2 ripe bananas, 1 cup rolled oats, 2 eggs, cinnamon (optional)",
        availableNutrition: "High in fiber, vitamins, and minerals",
        benefits: "Easy to digest and gentle on the stomach",
        img: "",
        type: "flexitarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Almond Butter and Apple Slices",
        quantity: "1 medium apple, 2 tablespoons almond butter",
        availableNutrition: "Provides fiber, healthy fats, and vitamins",
        benefits: "Helps regulate digestion and provides energy",
        img: "",
        type: "flexitarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Vegetable Stir-Fry",
        quantity: "1/2 cup cooked quinoa, mixed vegetables, soy sauce",
        availableNutrition: "High in protein, fiber, and antioxidants",
        benefits: "Supports digestive health and provides essential nutrients",
        img: "",
        type: "flexitarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Greek Yogurt with Honey and Chia Seeds",
        quantity:
          "1/2 cup Greek yogurt, 1 teaspoon honey, 1 tablespoon chia seeds",
        availableNutrition:
          "Rich in probiotics, protein, and omega-3 fatty acids",
        benefits: "Supports gut health and aids digestion",
        img: "",
        type: "flexitarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Cucumber and Hummus",
        quantity: "Sliced cucumber with 2 tablespoons hummus",
        availableNutrition: "Provides hydration, fiber, and healthy fats",
        benefits: "Refreshing snack that aids digestion and provides nutrients",
        img: "",
        type: "flexitarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Salmon with Steamed Vegetables",
        quantity: "4 oz grilled or baked salmon, assorted steamed vegetables",
        availableNutrition:
          "High in omega-3 fatty acids, protein, and vitamins",
        benefits: "Promotes digestive health and provides essential nutrients",
        img: "",
        type: "flexitarian",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Spicy Foods",
        disadvantage:
          "Can irritate the digestive tract and worsen symptoms such as heartburn and acid reflux.",
        img: "",
      },
      {
        id: 2,
        dietName: "Fried Foods",
        disadvantage:
          "High in unhealthy fats, difficult to digest, and may cause bloating and discomfort.",
        img: "",
      },
      {
        id: 3,
        dietName: "Processed Foods",
        disadvantage:
          "Often contain additives and preservatives that can disrupt digestion and cause gastrointestinal issues.",
        img: "",
      },
      {
        id: 4,
        dietName: "Carbonated Drinks",
        disadvantage:
          "Can lead to gas and bloating, exacerbating digestive discomfort and symptoms.",
        img: "",
      },
      {
        id: 5,
        dietName: "Alcohol",
        disadvantage:
          "Can irritate the stomach lining and contribute to acid reflux and inflammation.",
        img: "",
      },
      {
        id: 6,
        dietName: "Dairy Products (for lactose intolerant individuals)",
        disadvantage:
          "May cause digestive issues such as bloating, gas, and diarrhea due to lactose intolerance.",
        img: "",
      },
      {
        id: 7,
        dietName: "High-Fat Foods",
        disadvantage:
          "Take longer to digest and can exacerbate symptoms such as indigestion and bloating.",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Walking",
        time: "30 minutes",
        repetition: "Daily",
        benefits:
          "Promotes digestion, reduces bloating, and improves overall gastrointestinal health",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Yoga",
        time: "30-45 minutes",
        repetition: "3-4 times a week",
        benefits: "Aids in digestion, reduces stress, and promotes relaxation",
        img: "img/yoga.jpg",
      },
      {
        id: 3,
        exerciseName: "Pilates",
        time: "30-45 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles and improves posture, which can aid in digestion",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Cycling",
        time: "45 minutes",
        repetition: "3 times a week",
        benefits:
          "Promotes bowel regularity and improves overall gastrointestinal function",
        img: " ",
      },
      {
        id: 5,
        exerciseName: "Swimming",
        time: "30-45 minutes",
        repetition: "2-3 times a week",
        benefits: "Relieves abdominal pressure and aids in digestion",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Stretching",
        time: "15-20 minutes",
        repetition: "Daily",
        benefits:
          "Improves flexibility and can help alleviate digestive discomfort",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Tai Chi",
        time: "30-45 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Promotes relaxation and aids in digestion through gentle movements",
        img: "",
      },
      {
        id: 8,
        exerciseName: "Dancing",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits: "Stimulates digestion and enhances overall well-being",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/frustrated-unhappy-guy-suffering-from-belly-ache_74855-3447.jpg?t=st=1713978642~exp=1713982242~hmac=6e6728fbedaa12bdf023555f18ea21afb509dcbb94df0fb5eadc38463e5eaa6e&w=996",
    description:
      "Management of Digestive Issues involves adopting a balanced diet rich in fiber, probiotics, and fluids, while minimizing triggers like spicy or fatty foods. Regular exercise and stress management techniques also aid in promoting gastrointestinal health and overall well-being.",
    path: "/health/diets/management-of-digestive-issues",
  },
  {
    id: 16,
    goal_name: "Enhanced Athletic Performance",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Smoothie Bowl with Protein Powder",
        quantity:
          "1 banana, 1/2 cup mixed berries, 1 scoop plant-based protein powder, 1/4 cup almond milk, oppings (granola, nuts, seeds)",
        availableNutrition: "Rich in protein, antioxidants, and vitamins",
        benefits: "Provides energy and supports muscle recovery",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Energy Bites",
        quantity: "Oats, almond butter, honey, chia seeds, dried fruits",
        availableNutrition:
          "Provides complex carbohydrates, healthy fats, and energy",
        benefits: "A convenient and nutritious snack for sustained energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Black Bean Power Bowl",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup black beans, mixed vegetables, avocado slices",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "Supports muscle repair and provides sustained energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Greek Yogurt Parfait with Berries",
        quantity: "1/2 cup Greek yogurt, mixed berries, granola",
        availableNutrition: "Rich in protein, probiotics, and antioxidants",
        benefits: "Supports muscle recovery and provides energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Rice Cakes with Almond Butter and Banana Slices",
        quantity: "2 rice cakes, almond butter, banana slices",
        availableNutrition:
          "Provides carbohydrates, healthy fats, and potassium",
        benefits: "A quick and energizing snack for pre-workout fuel",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Vegetable Stir-Fry with Tofu and Brown Rice",
        quantity: "Mixed vegetables, tofu, soy sauce, brown rice",
        availableNutrition: "High in protein, fiber, and vitamins",
        benefits: "Supports muscle recovery and provides essential nutrients",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Egg and Spinach Breakfast Wrap",
        quantity: "2 eggs, handful of spinach, whole grain wrap",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "Provides sustained energy and muscle repair for athletes",
        img: "img/egg_spinach_wrap.jpg",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt with Almonds",
        quantity: "1/2 cup Greek yogurt, handful of almonds",
        availableNutrition: "Rich in protein, healthy fats, and calcium",
        benefits: "Supports muscle recovery and provides energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken and Quinoa Salad",
        quantity:
          "4 oz grilled chicken breast, 1/2 cup cooked quinoa, mixed greens",
        availableNutrition:
          "High in lean protein, fiber, and essential nutrients",
        benefits: "Aids in muscle repair and provides sustained energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Turkey and Cheese Roll-Ups",
        quantity: "Sliced turkey breast, cheese slices, whole grain crackers",
        availableNutrition:
          "Provides protein, calcium, and complex carbohydrates",
        benefits: "A convenient and nutritious snack for athletes",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Cottage Cheese with Pineapple",
        quantity: "1/2 cup cottage cheese, fresh pineapple chunks",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "Promotes muscle recovery and satisfies hunger",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Salmon with Sweet Potato Mash and Asparagus",
        quantity:
          "6 oz grilled salmon fillet, mashed sweet potatoes, roasted asparagus",
        availableNutrition:
          "Rich in omega-3 fatty acids, complex carbohydrates, and vitamins",
        benefits: "Supports cardiovascular health and muscle recovery",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Protein-Packed Smoothie",
        quantity:
          "1 scoop protein powder, 1 banana, 1 cup almond milk, 1 tablespoon almond butter",
        availableNutrition: "High in protein, healthy fats, and carbohydrates",
        benefits: "Provides energy and supports muscle recovery",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt Parfait with Granola",
        quantity: "1/2 cup Greek yogurt, 1/4 cup granola, mixed berries",
        availableNutrition: "Rich in protein, probiotics, and antioxidants",
        benefits: "Supports gut health and provides sustained energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Black Bean Bowl with Grilled Chicken",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup black beans, grilled chicken breast, mixed vegetables",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "Supports muscle repair and provides sustained energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Almond Butter and Apple Slices",
        quantity: "1 tablespoon almond butter, 1 medium apple, sliced",
        availableNutrition: "Provides healthy fats, fiber, and vitamins",
        benefits: "A satisfying and nutritious snack option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Cottage Cheese with Pineapple",
        quantity: "1/2 cup cottage cheese, 1/2 cup pineapple chunks",
        availableNutrition: "High in protein, calcium, and vitamin C",
        benefits: "Supports muscle recovery and provides essential nutrients",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Salmon and Quinoa Salad",
        quantity:
          "4 oz grilled salmon, 1/2 cup cooked quinoa, mixed greens, lemon-tahini dressing",
        availableNutrition: "Rich in omega-3 fatty acids, protein, and fiber",
        benefits: "Supports muscle repair and provides essential nutrients",
        img: "",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Processed Foods",
        disadvantage:
          "Often high in calories, unhealthy fats, sugars, and additives, leading to decreased performance and recovery time",
        img: "",
      },
      {
        id: 2,
        dietName: "Sugary Drinks",
        disadvantage:
          "High in sugar and empty calories, leading to energy crashes and dehydration during workouts",
        img: "",
      },
      {
        id: 3,
        dietName: "Fast Food",
        disadvantage:
          "High in unhealthy fats, sugars, and sodium, which can negatively impact performance and recovery",
        img: "",
      },
      {
        id: 4,
        dietName: "Fried Foods",
        disadvantage:
          "High in unhealthy fats and calories, leading to sluggishness and decreased energy levels",
        img: "",
      },
      {
        id: 5,
        dietName: "High-Calorie Snacks (e.g., Chips, Cookies)",
        disadvantage:
          "Provide little nutritional value and can lead to weight gain and decreased athletic performance",
        img: "",
      },
      {
        id: 6,
        dietName: "Alcohol",
        disadvantage:
          "Dehydrates the body, impairs muscle recovery, and negatively affects coordination and reaction time",
        img: "",
      },
      {
        id: 7,
        dietName: "Highly Sweetened Breakfast Cereals",
        disadvantage:
          "High in sugar and low in nutrients, leading to energy crashes and reduced performance",
        img: "",
      },
      {
        id: 8,
        dietName: "High-Calorie Coffee Drinks",
        disadvantage:
          "Contain excessive calories, sugar, and unhealthy fats, leading to energy crashes and decreased focus",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "HIIT (High-Intensity Interval Training)",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Burns calories effectively, improves cardiovascular health, and boosts metabolism",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Strength Training",
        time: "30-45 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Builds muscle mass, increases metabolism, and enhances overall athletic performance",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Plyometrics",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits: "Improves explosive power, agility, and coordination",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Interval Running",
        time: "30-45 minutes",
        repetition: "2-3 times a week",
        benefits: "Improves speed, endurance, and cardiovascular health",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Agility Drills",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits: "Enhances agility, balance, and coordination",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Circuit Training",
        time: "30-45 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Provides a full-body workout, improves strength, and endurance",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Sprint Training",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits: "Increases speed, power, and anaerobic capacity",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/one-caucasian-professional-male-athlete-runner-training-isolated-white_155003-41573.jpg?t=st=1713978701~exp=1713982301~hmac=42802044357fc32487e03a32325af15e68e7ca0b04a80603de5974ae6b1bbca4&w=996",
    description:
      "Enhanced Athletic Performance: Elevate your fitness game with targeted exercises and dietary strategies. Achieve peak performance, agility, and strength through tailored workouts and nutrition plans. Unlock your full potential and excel in your athletic pursuits.",
    path: "/health/diets/enhanced-athletic-performance",
  },
  {
    id: 17,
    goal_name: "Vegetarian or Vegan Lifestyle",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Vegan Smoothie Bowl",
        quantity:
          "1 ripe banana, 1/2 cup mixed berries, 1/2 cup spinach, 1/4 cup almond milk, 2 tablespoons chia seeds",
        availableNutrition:
          "Rich in vitamins, minerals, antioxidants, and fiber",
        benefits: "Provides a nutritious and energizing start to the day",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Hummus and Veggie Wrap",
        quantity:
          "1 whole grain wrap, 2 tablespoons hummus, assorted sliced vegetables (e.g., carrots, cucumbers, bell peppers)",
        availableNutrition:
          "Provides protein, fiber, vitamins, and healthy fats",
        benefits: "A satisfying and portable snack option",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Black Bean Bowl",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup black beans, mixed vegetables, salsa",
        availableNutrition: "High in protein, fiber, vitamins, and minerals",
        benefits: "Promotes satiety and provides essential nutrients",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Trail Mix with Dried Fruits",
        quantity:
          "1/4 cup mixed nuts, seeds, and dried fruits (e.g., almonds, walnuts, pumpkin seeds, raisins)",
        availableNutrition: "Provides protein, healthy fats, and energy",
        benefits: "A convenient and nutritious snack for on-the-go",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Cucumber and Tomato Salad",
        quantity:
          "Sliced cucumbers and cherry tomatoes, drizzled with balsamic vinegar and olive oil",
        availableNutrition:
          "Low in calories and rich in vitamins, minerals, and antioxidants",
        benefits: "Refreshing and hydrating snack with various health benefits",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Vegetable Stir-Fry with Tofu",
        quantity:
          "Assorted vegetables (e.g., bell peppers, broccoli, snap peas) stir-fried with tofu in a soy ginger sauce",
        availableNutrition: "Provides protein, fiber, vitamins, and minerals",
        benefits: "A flavorful and nutritious dinner option",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Smoked Salmon Bagel",
        quantity:
          "1 whole grain bagel, 2 oz smoked salmon, cream cheese, sliced cucumber and tomato",
        availableNutrition:
          "Rich in omega-3 fatty acids, protein, and vitamins",
        benefits: "Provides essential nutrients and supports brain health",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Hard-Boiled Eggs",
        quantity: "2 hard-boiled eggs",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "Promotes muscle repair and provides sustained energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Caesar Salad",
        quantity:
          "4 oz grilled chicken breast, romaine lettuce, Caesar dressing, croutons, grated Parmesan cheese",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "Supports muscle growth and provides a satisfying meal",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Turkey and Cheese Roll-Ups",
        quantity: "2 slices turkey breast, 2 slices cheese, lettuce leaves",
        availableNutrition: "Provides protein, calcium, and healthy fats",
        benefits: "A convenient and nutritious snack option",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Cottage Cheese with Pineapple",
        quantity: "1/2 cup cottage cheese, 1/2 cup pineapple chunks",
        availableNutrition: "High in protein, calcium, and vitamins",
        benefits:
          "Supports muscle repair and provides a sweet and savory snack",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Beef Stir-Fry with Vegetables",
        quantity:
          "4 oz beef strips, mixed vegetables, soy sauce, garlic, ginger",
        availableNutrition: "Rich in protein, vitamins, and minerals",
        benefits: "Provides essential nutrients and promotes satiety",
        img: "img/beef_stir_fry.jpg",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Tofu Scramble with Vegetables",
        quantity:
          "1/2 block tofu, mixed vegetables (bell peppers, onions, spinach), spices",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "Provides a filling and nutritious breakfast option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Mixed Nuts and Dried Fruits",
        quantity:
          "1/4 cup mixed nuts (almonds, walnuts, cashews) and dried fruits",
        availableNutrition: "Provides healthy fats, fiber, and energy",
        benefits: "A convenient and nutritious snack option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Black Bean Bowl with Avocado",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup black beans, avocado slices, lime-cilantro dressing",
        availableNutrition: "Rich in protein, fiber, and healthy fats",
        benefits: "A balanced and satisfying lunch option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Hummus with Whole Grain Crackers",
        quantity: "2 tablespoons hummus, 4 whole grain crackers",
        availableNutrition: "Provides protein, fiber, and healthy fats",
        benefits: "A tasty and nutritious snack for mid-day energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Vegetable Sushi Rolls",
        quantity: "Assorted vegetable sushi rolls (cucumber, avocado, carrot)",
        availableNutrition: "Rich in vitamins, minerals, and antioxidants",
        benefits: "A light and healthy snack option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Stir-Fried Tofu with Brown Rice and Vegetables",
        quantity:
          "4 oz tofu, 1/2 cup cooked brown rice, mixed vegetables, soy sauce",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "A satisfying and wholesome dinner choice",
        img: "",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Junk Food",
        disadvantage:
          "High in unhealthy fats, sugars, and calories, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 2,
        dietName: "Sugary Drinks",
        disadvantage:
          "High in empty calories, leading to weight gain and increased risk of obesity-related diseases",
        img: "",
      },
      {
        id: 3,
        dietName: "Fast Food",
        disadvantage:
          "High in unhealthy fats, sugars, and sodium, leading to weight gain and increased risk of heart disease",
        img: "",
      },
      {
        id: 4,
        dietName: "Processed Foods",
        disadvantage:
          "Often high in calories, unhealthy fats, sugars, and additives, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 5,
        dietName: "Fried Foods",
        disadvantage:
          "High in unhealthy fats and calories, leading to weight gain and increased risk of heart disease",
        img: "",
      },
      {
        id: 6,
        dietName: "High-Calorie Snacks",
        disadvantage:
          "High in calories, sugars, and unhealthy fats, leading to weight gain and increased risk of chronic diseases",
        img: "",
      },
      {
        id: 7,
        dietName: "Alcohol",
        disadvantage:
          "High in calories and sugars, leading to weight gain and increased risk of liver disease",
        img: "",
      },
      {
        id: 8,
        dietName: "Highly Sweetened Breakfast Cereals",
        disadvantage:
          "High in sugars and calories, leading to weight gain and increased risk of obesity-related diseases",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Walking",
        time: "30-60 minutes",
        repetition: "Daily",
        benefits:
          "Improves cardiovascular health, burns calories, and reduces stress",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Running",
        time: "20-30 minutes",
        repetition: "3-4 times a week",
        benefits: "Burns calories, improves endurance, and boosts mood",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Cycling",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Strengthens leg muscles, improves cardiovascular health, and promotes weight loss",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Increases flexibility, reduces stress, and promotes relaxation",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Pilates",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles, improves posture, and enhances flexibility",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Hiking",
        time: "60-90 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Burns calories, strengthens muscles, and improves mental well-being",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Swimming",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Provides a full-body workout, improves cardiovascular health, and is low-impact on joints",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/fruits-vegetables-white-background_1368-9960.jpg?t=st=1713978807~exp=1713982407~hmac=268e3fc4c8504d72e9c7a61ea63f3006bcb205ce7cbaaa5d949ba5ddaa96c977&w=900",
    description:
      "Embrace a Vegetarian or Vegan Lifestyle for ethical, health, and environmental reasons. Enjoy a plant-based diet rich in fruits, vegetables, grains, and legumes. Reduce your ecological footprint while promoting overall well-being and compassion towards animals.",
    path: "/health/diets/vegetarian-or-vegan-lifestyle",
  },
  {
    id: 18,
    goal_name: "Gluten-Free Diet",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Quinoa Porridge with Berries",
        quantity: "1/2 cup quinoa, 1 cup almond milk, mixed berries",
        availableNutrition: "High in protein, fiber, and antioxidants",
        benefits: "Provides sustained energy and supports digestion",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Rice Cakes with Almond Butter",
        quantity: "2 rice cakes, 2 tablespoons almond butter",
        availableNutrition: "Provides healthy fats, protein, and carbohydrates",
        benefits: "A satisfying and gluten-free snack option",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa Salad with Avocado and Chickpeas",
        quantity:
          "1/2 cup cooked quinoa, mixed greens, avocado slices, 1/2 cup chickpeas",
        availableNutrition: "Rich in protein, fiber, and healthy fats",
        benefits: "Supports muscle repair and provides essential nutrients",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Greek Yogurt with Granola and Honey",
        quantity:
          "1/2 cup Greek yogurt, 1/4 cup gluten-free granola, 1 teaspoon honey",
        availableNutrition: "High in protein, calcium, and antioxidants",
        benefits: "Supports gut health and provides energy",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Vegetable Slices with Guacamole",
        quantity:
          "Assorted vegetable slices (carrots, cucumbers, bell peppers) with guacamole",
        availableNutrition: "Rich in vitamins, minerals, and healthy fats",
        benefits: "Provides a satisfying and nutritious snack option",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Stir-Fried Tofu with Vegetables and Brown Rice",
        quantity: "4 oz tofu, mixed vegetables, 1/2 cup brown rice",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "A filling and gluten-free dinner option",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Scrambled Eggs with Smoked Salmon",
        quantity: "2 eggs, 50g smoked salmon",
        availableNutrition:
          "High in protein, omega-3 fatty acids, and vitamins",
        benefits: "Promotes muscle repair and supports brain health",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Greek Yogurt Parfait with Almonds",
        quantity: "1/2 cup Greek yogurt, handful of almonds, honey",
        availableNutrition: "Rich in protein, calcium, and healthy fats",
        benefits: "Supports gut health and provides sustained energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Caesar Salad",
        quantity:
          "4 oz grilled chicken breast, romaine lettuce, cherry tomatoes, Caesar dressing",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits:
          "Supports muscle recovery and provides a light yet filling meal",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Turkey and Cheese Roll-Ups",
        quantity: "Slices of turkey breast, cheese slices",
        availableNutrition: "Provides protein, calcium, and healthy fats",
        benefits: "A convenient and satisfying snack option",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Sardines on Gluten-Free Crackers",
        quantity: "Canned sardines, gluten-free crackers",
        availableNutrition:
          "Rich in omega-3 fatty acids, protein, and minerals",
        benefits: "Supports heart health and provides a crunchy snack",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Baked Salmon with Steamed Vegetables",
        quantity: "4 oz salmon fillet, assorted steamed vegetables",
        availableNutrition: "High in omega-3 fatty acids, vitamins, and fiber",
        benefits:
          "Supports brain health and provides a light yet nutritious dinner",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Quinoa Breakfast Bowl",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup mixed berries, 1 tablespoon almond butter",
        availableNutrition: "Rich in protein, fiber, and antioxidants",
        benefits: "Provides sustained energy and supports digestion",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Mixed Nuts and Dried Fruits",
        quantity:
          "1/4 cup mixed nuts (almonds, walnuts, cashews) with dried fruits",
        availableNutrition: "Provides healthy fats, protein, and vitamins",
        benefits: "A satisfying and nutritious snack option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa and Black Bean Stuffed Bell Peppers",
        quantity:
          "Bell peppers stuffed with quinoa, black beans, corn, and spices",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "A hearty and satisfying gluten-free meal",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Greek Yogurt Parfait with Granola",
        quantity:
          "1/2 cup Greek yogurt, 1/4 cup gluten-free granola, mixed berries",
        availableNutrition: "Rich in protein, probiotics, and antioxidants",
        benefits: "Supports gut health and provides energy",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Rice Cake with Almond Butter and Banana Slices",
        quantity: "1 rice cake, 1 tablespoon almond butter, banana slices",
        availableNutrition:
          "Provides complex carbohydrates, healthy fats, and potassium",
        benefits: "A quick and satisfying gluten-free snack",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Grilled Salmon with Quinoa Salad",
        quantity:
          "4 oz grilled salmon, 1/2 cup cooked quinoa, mixed greens, lemon vinaigrette",
        availableNutrition:
          "High in omega-3 fatty acids, protein, and vitamins",
        benefits: "Supports heart health and provides essential nutrients",
        img: "",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Wheat Products",
        disadvantage:
          "Contain gluten, which can trigger adverse reactions in individuals with gluten intolerance or celiac disease",
        img: "",
      },
      {
        id: 2,
        dietName: "Barley",
        disadvantage:
          "Contains gluten and should be avoided by individuals with gluten sensitivity or celiac disease",
        img: "",
      },
      {
        id: 3,
        dietName: "Rye",
        disadvantage:
          "Contains gluten and may cause digestive issues in gluten-sensitive individuals",
        img: "",
      },
      {
        id: 4,
        dietName: "Processed Foods with Gluten",
        disadvantage:
          "May contain hidden sources of gluten, leading to adverse reactions in gluten-sensitive individuals",
        img: "",
      },
      {
        id: 5,
        dietName: "Breaded or Fried Foods",
        disadvantage:
          "Coating may contain gluten, posing a risk for individuals following a gluten-free diet",
        img: "",
      },
      {
        id: 6,
        dietName: "Beer",
        disadvantage:
          "Most beers contain gluten from barley, wheat, or rye, making them unsuitable for individuals with gluten intolerance",
        img: "",
      },
      {
        id: 7,
        dietName: "Pasta made from Wheat",
        disadvantage:
          "Contains gluten and should be avoided by those following a gluten-free diet",
        img: "",
      },
      {
        id: 8,
        dietName: "Cakes, Cookies, and Pastries",
        disadvantage:
          "Often made with wheat flour, posing a risk for individuals with gluten sensitivity or celiac disease",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Walking",
        time: "30-60 minutes",
        repetition: "Daily",
        benefits:
          "Improves cardiovascular health, aids digestion, and helps maintain a healthy weight",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Reduces stress, improves flexibility, and promotes relaxation",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Swimming",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Provides a full-body workout, improves cardiovascular health, and relieves joint stress",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Cycling",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Strengthens leg muscles, improves endurance, and boosts mood",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Pilates",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles, improves posture, and enhances flexibility",
        img: "",
      },
      {
        id: 6,
        exerciseName: "Hiking",
        time: "1-2 hours",
        repetition: "Weekly",
        benefits:
          "Burns calories, improves cardiovascular health, and reduces stress",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Strength Training",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Builds muscle mass, increases metabolism, and enhances overall strength",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/bakery-still-life-with-handmade-bread_23-2148154414.jpg?t=st=1713979064~exp=1713982664~hmac=374593f087aa528e26cd5fee831c729184a3e987a2569f33997caa4ce83a42cf&w=996",
    description:
      "Embrace a Gluten-Free Diet to eliminate gluten-containing foods like wheat, barley, and rye. Opt for naturally gluten-free options like fruits, vegetables, and lean proteins. Enjoy improved digestion and overall well-being with this mindful dietary approach.",
    path: "/health/diets/gluten-free-diet",
  },
  {
    id: 19,
    goal_name: "Dairy-Free Diet",
    vegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Oatmeal with Almond Milk",
        quantity:
          "1/2 cup rolled oats, 1 cup almond milk, 1 tablespoon maple syrup, 1/4 cup mixed berries",
        availableNutrition: "Provides fiber, vitamins, and minerals",
        benefits: "A dairy-free alternative to traditional breakfast options",
        img: "",
        type: "vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Fruit Smoothie with Coconut Milk",
        quantity:
          "1 banana, 1/2 cup mixed berries, 1 cup coconut milk, handful of spinach",
        availableNutrition: "Rich in antioxidants, vitamins, and healthy fats",
        benefits: "Provides a refreshing and dairy-free snack option",
        img: "",
        type: "vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Quinoa Salad with Avocado Dressing",
        quantity:
          "1/2 cup cooked quinoa, mixed vegetables, avocado dressing (avocado, lime juice, olive oil)",
        availableNutrition: "High in protein, fiber, and healthy fats",
        benefits: "A dairy-free and nutritious lunch option",
        img: "",
        type: "vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Mixed Nuts and Dried Fruits",
        quantity:
          "1/4 cup mixed nuts (almonds, cashews, walnuts) with dried fruits (raisins, apricots)",
        availableNutrition: "Provides healthy fats, protein, and energy",
        benefits: "A satisfying and dairy-free snack choice",
        img: "",
        type: "vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Rice Cakes with Almond Butter",
        quantity: "2 rice cakes topped with almond butter",
        availableNutrition: "Rich in protein, fiber, and healthy fats",
        benefits: "A crunchy and dairy-free option for a light snack",
        img: "",
        type: "vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Vegetable Stir-Fry with Tofu",
        quantity:
          "Assorted vegetables stir-fried with tofu in a soy sauce-based marinade",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "A satisfying and dairy-free dinner choice",
        img: "",
        type: "vegetarian",
      },
    ],
    nonVegetarianDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Smoked Salmon and Avocado Toast",
        quantity: "1 slice whole grain bread, 2 oz smoked salmon, 1/2 avocado",
        availableNutrition:
          "Provides healthy fats, protein, and omega-3 fatty acids",
        benefits: "Supports brain health and provides sustained energy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Turkey Roll-Ups",
        quantity: "3 slices turkey breast, cucumber slices, hummus",
        availableNutrition: "Rich in lean protein and vitamins",
        benefits: "Promotes muscle repair and provides a low-carb snack option",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Grilled Chicken Salad with Balsamic Vinaigrette",
        quantity:
          "4 oz grilled chicken breast, mixed greens, tomatoes, onions, balsamic vinaigrette",
        availableNutrition: "High in protein, vitamins, and antioxidants",
        benefits:
          "Supports muscle recovery and provides a light and refreshing meal",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Beef Jerky",
        quantity: "1 oz beef jerky",
        availableNutrition: "High in protein and low in fat",
        benefits: "Provides a convenient and satisfying snack option",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Tuna Salad Lettuce Wraps",
        quantity:
          "1 can tuna, mixed with avocado, diced vegetables, wrapped in lettuce leaves",
        availableNutrition: "Rich in protein, healthy fats, and vitamins",
        benefits: "A light and nutritious snack option without dairy",
        img: "",
        type: "non-vegetarian",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Grilled Steak with Roasted Vegetables",
        quantity:
          "6 oz grilled steak, mixed roasted vegetables (bell peppers, zucchini, carrots)",
        availableNutrition: "High in protein, iron, and essential nutrients",
        benefits:
          "Promotes muscle growth and provides a satisfying dinner option",
        img: "",
        type: "non-vegetarian",
      },
    ],
    flexitariansDiet: [
      {
        id: 1,
        dietTime: "Breakfast",
        dietName: "Tofu Scramble",
        quantity:
          "100g tofu, mixed vegetables (bell peppers, onions, spinach), spices",
        availableNutrition: "High in protein, vitamins, and minerals",
        benefits: "Provides a dairy-free alternative to scrambled eggs",
        img: "",
        type: "flexitarians",
      },
      {
        id: 2,
        dietTime: "Mid-Morning Snack",
        dietName: "Fruit Smoothie with Almond Milk",
        quantity: "1 banana, 1/2 cup mixed berries, 1 cup almond milk",
        availableNutrition: "Rich in vitamins, antioxidants, and healthy fats",
        benefits: "A refreshing and dairy-free snack option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 3,
        dietTime: "Lunch",
        dietName: "Chickpea and Vegetable Stir-Fry",
        quantity: "1/2 cup cooked chickpeas, mixed vegetables, soy sauce",
        availableNutrition: "High in protein, fiber, and essential nutrients",
        benefits: "A satisfying and dairy-free lunch option",
        img: "",
        type: "flexitarians",
      },
      {
        id: 4,
        dietTime: "Afternoon Snack",
        dietName: "Mixed Nuts and Dried Fruits",
        quantity:
          "1/4 cup mixed nuts (almonds, cashews, walnuts), dried fruits",
        availableNutrition: "Provides healthy fats, protein, and energy",
        benefits: "A convenient and dairy-free snack choice",
        img: "",
        type: "flexitarians",
      },
      {
        id: 5,
        dietTime: "Evening Snack",
        dietName: "Rice Cakes with Avocado",
        quantity: "2 rice cakes, 1/2 avocado, sea salt",
        availableNutrition: "Rich in healthy fats, fiber, and vitamins",
        benefits: "A satisfying and dairy-free snack with essential nutrients",
        img: "",
        type: "flexitarians",
      },
      {
        id: 6,
        dietTime: "Dinner",
        dietName: "Quinoa and Black Bean Bowl",
        quantity:
          "1/2 cup cooked quinoa, 1/2 cup black beans, mixed vegetables, salsa",
        availableNutrition: "High in protein, fiber, and antioxidants",
        benefits: "A hearty and dairy-free dinner option",
        img: "",
        type: "flexitarians",
      },
    ],
    avoidingDiet: [
      {
        id: 1,
        dietName: "Cow's Milk",
        disadvantage:
          "May cause lactose intolerance symptoms such as bloating and digestive discomfort.",
        img: "",
      },
      {
        id: 2,
        dietName: "Cheese",
        disadvantage:
          "Contains lactose and may trigger allergic reactions in some individuals.",
        img: "",
      },
      {
        id: 3,
        dietName: "Butter",
        disadvantage:
          "High in saturated fats and may contribute to heart disease risk.",
        img: "",
      },
      {
        id: 4,
        dietName: "Ice Cream",
        disadvantage:
          "Contains dairy and may lead to digestive issues in lactose intolerant individuals.",
        img: "",
      },
      {
        id: 5,
        dietName: "Yogurt",
        disadvantage:
          "Contains lactose and may cause digestive discomfort in lactose intolerant individuals.",
        img: "",
      },
      {
        id: 6,
        dietName: "Cream",
        disadvantage:
          "High in saturated fats and may contribute to heart disease risk.",
        img: "",
      },
      {
        id: 7,
        dietName: "Condensed Milk",
        disadvantage:
          "High in sugar and may lead to weight gain and other health issues.",
        img: "",
      },
    ],
    recommendedExercises: [
      {
        id: 1,
        exerciseName: "Walking",
        time: "30-60 minutes",
        repetition: "Daily",
        benefits:
          "Improves cardiovascular health, burns calories, and reduces stress",
        img: "",
      },
      {
        id: 2,
        exerciseName: "Cycling",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Strengthens leg muscles, improves cardiovascular fitness, and burns calories",
        img: "",
      },
      {
        id: 3,
        exerciseName: "Swimming",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Provides a full-body workout, improves lung capacity, and enhances muscular endurance",
        img: "",
      },
      {
        id: 4,
        exerciseName: "Yoga",
        time: "30-60 minutes",
        repetition: "3-4 times a week",
        benefits:
          "Promotes flexibility, reduces stress, and enhances relaxation",
        img: "",
      },
      {
        id: 5,
        exerciseName: "Pilates",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Strengthens core muscles, improves posture, and enhances overall body strength",
        img: "",
      },
      {
        id: 6,
        exerciseName: "HIIT (High-Intensity Interval Training)",
        time: "20-30 minutes",
        repetition: "2-3 times a week",
        benefits:
          "Burns calories effectively, boosts metabolism, and improves cardiovascular health",
        img: "",
      },
      {
        id: 7,
        exerciseName: "Dancing (e.g., Zumba, Aerobics)",
        time: "30-60 minutes",
        repetition: "2-3 times a week",
        benefits: "Fun way to exercise, improves coordination, and boosts mood",
        img: "",
      },
    ],
    img:
      "https://img.freepik.com/free-photo/top-view-dairy-products-arrangement_23-2148601682.jpg?t=st=1713979203~exp=1713982803~hmac=bce94202d25230d0427c0e88b0d683c24b5d3d60d5658aa9c96b365a018f5c40&w=1060",
    description:
      "Dairy-Free Diet eliminates dairy products like milk, cheese, and yogurt. It's often chosen due to lactose intolerance, dairy allergies, or dietary preferences. Plant-based alternatives offer calcium and nutrients while avoiding dairy-related digestive issues and allergic reactions.",
    path: "/health/diets/diary-free-diet",
  },
];

export default dietAPI;
