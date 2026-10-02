/* =====================================================
   عالسريع ⚡
   FINAL script.js
   Arabic / English
   Cart + Stores + Menu + Checkout
===================================================== */


/* =====================================================
   LANGUAGE
===================================================== */

let currentLanguage =
    localStorage.getItem("language") || "ar";


/* =====================================================
   CART
===================================================== */

let cart =
    JSON.parse(
        localStorage.getItem("alsareeCart")
    ) || [];


const deliveryFee = 20;


/* =====================================================
   TRANSLATIONS
===================================================== */

const translations = {

    ar: {

        logo: "⚡ عالسريع",

        language: "English",

        cart: "السلة",

        heroTitle:
            "كل اللي محتاجه<br><span>عالسريع ⚡</span>",

        heroSubtitle:
            "مطاعم • سوبرماركت • عروض • طلبات",

        search:
            "ابحث عن مطعم أو سوبرماركت...",

        all:
            "الكل",

        restaurants:
            "🍔 مطاعم",

        supermarkets:
            "🛒 سوبرماركت",

        nearby:
            "الأماكن القريبة منك",

        menu:
            "شوف المنيو →",

        menuTitle:
            "المنيو",

        back:
            "← رجوع",

        home:
            "الرئيسية",

        todayOffer:
            "🔥 عرض اليوم",

        specialOffer:
            "🔥 عرض خاص",

        discount:
            "خصم 70 جنيه",

        offerText:
            "على طلبك عند الوصول للحد الأدنى",

        minimumOffer:
            "عند طلب المنتجات المطلوبة ووصول الطلب للحد الأدنى",

        endingSoon:
            "ينتهي قريبًا",

        quick:
            "⚡ عالسريع",

        fastDelivery:
            "توصيل سريع",

        choosePlace:
            "اختار المكان وابدأ طلبك",

        restaurant:
            "مطعم",

        supermarket:
            "سوبرماركت",

        added:
            "تم إضافة",

        toCart:
            "للسلة 🛒",

        empty:
            "🛒 السلة فاضية",

        startOrder:
            "ابدأ الطلب",

        cartTitle:
            "🛒 طلبك",

        products:
            "المنتجات",

        delivery:
            "التوصيل",

        total:
            "الإجمالي",

        checkoutTitle:
            "⚡ إتمام الطلب",

        deliveryInfo:
            "📍 بيانات التوصيل",

        name:
            "الاسم",

        phone:
            "رقم الموبايل",

        area:
            "المنطقة",

        address:
            "العنوان بالتفصيل",

        notes:
            "ملاحظات",

        namePlaceholder:
            "اكتب اسمك",

        phonePlaceholder:
            "01xxxxxxxxx",

        addressPlaceholder:
            "الشارع - رقم العمارة - الدور...",

        notesPlaceholder:
            "أي ملاحظات على الطلب؟",

        chooseArea:
            "اختر المنطقة",

        mansoura:
            "المنصورة",

        talkha:
            "طلخا",

        mitghamr:
            "ميت غمر",

        aga:
            "أجا",

        sinbillawain:
            "السنبلاوين",

        complete:
            "إتمام الطلب ⚡",

        minimum:
            "الحد الأدنى للطلب 50 جنيه قبل التوصيل.",

        success:
            "🎉 تم تأكيد طلبك يا",

        minutes:
            "دقيقة",

        egp:
            "جنيه",

        noResults:
            "مفيش نتائج",

        placeNotFound:
            "المكان غير موجود",

        addedSuccess:
            "تمت الإضافة للسلة 🛒",

        emptyCart:
            "السلة فاضية 🛒",

        requiredData:
            "من فضلك اكتب بيانات التوصيل كاملة 📍",

        phoneInvalid:
            "من فضلك اكتب رقم موبايل صحيح.",

        orderDone:
            "🎉 تم تأكيد طلبك بنجاح!"

    },


    en: {

        logo:
            "⚡ Al Saree",

        language:
            "العربية",

        cart:
            "Cart",

        heroTitle:
            "Everything you need<br><span>Fast ⚡</span>",

        heroSubtitle:
            "Restaurants • Supermarkets • Offers • Orders",

        search:
            "Search for a restaurant or supermarket...",

        all:
            "All",

        restaurants:
            "🍔 Restaurants",

        supermarkets:
            "🛒 Supermarkets",

        nearby:
            "Places near you",

        menu:
            "View Menu →",

        menuTitle:
            "Menu",

        back:
            "← Back",

        home:
            "Home",

        todayOffer:
            "🔥 Today's Offer",

        specialOffer:
            "🔥 Special Offer",

        discount:
            "70 EGP OFF",

        offerText:
            "On your order when you reach the minimum order value",

        minimumOffer:
            "When your order reaches the minimum required value",

        endingSoon:
            "Ending soon",

        quick:
            "⚡ Al Saree",

        fastDelivery:
            "Fast Delivery",

        choosePlace:
            "Choose a place and start ordering",

        restaurant:
            "Restaurant",

        supermarket:
            "Supermarket",

        added:
            "Added",

        toCart:
            "to your cart 🛒",

        empty:
            "🛒 Your cart is empty",

        startOrder:
            "Start Ordering",

        cartTitle:
            "🛒 Your Order",

        products:
            "Products",

        delivery:
            "Delivery",

        total:
            "Total",

        checkoutTitle:
            "⚡ Checkout",

        deliveryInfo:
            "📍 Delivery Information",

        name:
            "Name",

        phone:
            "Phone Number",

        area:
            "Area",

        address:
            "Full Address",

        notes:
            "Notes",

        namePlaceholder:
            "Enter your name",

        phonePlaceholder:
            "01xxxxxxxxx",

        addressPlaceholder:
            "Street - Building number - Floor...",

        notesPlaceholder:
            "Any notes about your order?",

        chooseArea:
            "Choose an area",

        mansoura:
            "Mansoura",

        talkha:
            "Talkha",

        mitghamr:
            "Mit Ghamr",

        aga:
            "Aga",

        sinbillawain:
            "Sinbillawain",

        complete:
            "Complete Order ⚡",

        minimum:
            "Minimum order value is 50 EGP before delivery.",

        success:
            "🎉 Your order has been confirmed,",

        minutes:
            "min",

        egp:
            "EGP",

        noResults:
            "No results found",

        placeNotFound:
            "Place not found",

        addedSuccess:
            "Added to cart 🛒",

        emptyCart:
            "Your cart is empty 🛒",

        requiredData:
            "Please complete your delivery details 📍",

        phoneInvalid:
            "Please enter a valid phone number.",

        orderDone:
            "🎉 Your order has been confirmed!"

    }

};


/* =====================================================
   STORES
===================================================== */

const stores = [

    {
        id: 1,
        name: {
            ar: "ماكدونالدز",
            en: "McDonald's"
        },
        type: "restaurant",
        category: {
            ar: "برجر",
            en: "Burgers"
        },
        rating: "4.5",
        time: "20-30",
        image: "images/restaurants/mcdonalds.jpg.svg",
        menu: "mcdonalds"
    },

    {
        id: 2,
        name: {
            ar: "KFC",
            en: "KFC"
        },
        type: "restaurant",
        category: {
            ar: "فراخ",
            en: "Chicken"
        },
        rating: "4.4",
        time: "25-35",
        image: "images/restaurants/kfc.jpg.svg",
        menu: "kfc"
    },

    {
        id: 3,
        name: {
            ar: "برجر كينج - المنصورة",
            en: "Burger King - Mansoura"
        },
        type: "restaurant",
        category: {
            ar: "برجر",
            en: "Burgers"
        },
        rating: "4.6",
        time: "20-30",
        image: "images/restaurants/burger-king.jpg.svg",
        menu: "burgerking"
    },

    {
        id: 4,
        name: {
            ar: "بريمر",
            en: "Bremer"
        },
        type: "restaurant",
        category: {
            ar: "برجر",
            en: "Burgers"
        },
        rating: "4.5",
        time: "25-35",
        image: "images/restaurants/bremer.jpg.svg",
        menu: "bremer"
    },

    {
        id: 5,
        name: {
            ar: "أوريجانو",
            en: "Oregano"
        },
        type: "restaurant",
        category: {
            ar: "بيتزا",
            en: "Pizza"
        },
        rating: "4.3",
        time: "25-40",
        image: "images/restaurants/oregano.jpg.svg",
        menu: "oregano"
    },

    {
        id: 6,
        name: {
            ar: "ستريو",
            en: "Stereo"
        },
        type: "restaurant",
        category: {
            ar: "مطعم وكافيه",
            en: "Restaurant & Cafe"
        },
        rating: "4.3",
        time: "20-35",
        image: "images/restaurants/stereo.jpg.svg",
        menu: "stereo"
    },

    {
        id: 7,
        name: {
            ar: "كلوك آند مو",
            en: "CLUCK&MOO"
        },
        type: "restaurant",
        category: {
            ar: "فراخ وبرجر",
            en: "Chicken & Burgers"
        },
        rating: "4.7",
        time: "20-30",
        image: "images/restaurants/cluckmoo.jpg.svg",
        menu: "cluckmoo"
    },

    {
        id: 8,
        name: {
            ar: "كاتشب",
            en: "Ketchup"
        },
        type: "restaurant",
        category: {
            ar: "مطعم",
            en: "Restaurant"
        },
        rating: "4.2",
        time: "25-40",
        image: "images/restaurants/ketchup.jpg.svg",
        menu: "ketchup"
    },

    {
        id: 9,
        name: {
            ar: "شاشليك",
            en: "Shashlik"
        },
        type: "restaurant",
        category: {
            ar: "تركي",
            en: "Turkish"
        },
        rating: "4.4",
        time: "25-40",
        image: "images/restaurants/shashlik.jpg.svg",
        menu: "shashlik"
    },

    {
        id: 10,
        name: {
            ar: "مطاعم الصباحي",
            en: "El Sabahy Restaurants"
        },
        type: "restaurant",
        category: {
            ar: "مشويات",
            en: "Grills"
        },
        rating: "4.5",
        time: "30-45",
        image: "images/restaurants/sabahy.jpg.svg",
        menu: "sabahy"
    },

    {
        id: 11,
        name: {
            ar: "كارفور مصر - المنصورة",
            en: "Carrefour Egypt - Mansoura"
        },
        type: "supermarket",
        category: {
            ar: "هايبر ماركت",
            en: "Hypermarket"
        },
        rating: "4.0",
        time: "30-45",
        image: "images/supermarkets/carrefour.jpg.svg",
        menu: "grocery"
    },

    {
        id: 12,
        name: {
            ar: "وكالة المنصورة",
            en: "Wekalet El Mansoura"
        },
        type: "supermarket",
        category: {
            ar: "سوبرماركت",
            en: "Supermarket"
        },
        rating: "4.1",
        time: "20-35",
        image: "images/supermarkets/wekalet.jpg.svg",
        menu: "grocery"
    },

    {
        id: 13,
        name: {
            ar: "جملة ماركت",
            en: "Gomla Market"
        },
        type: "supermarket",
        category: {
            ar: "سوبرماركت",
            en: "Supermarket"
        },
        rating: "4.2",
        time: "20-35",
        image: "images/supermarkets/gomla.jpg.svg",
        menu: "grocery"
    },

    {
        id: 14,
        name: {
            ar: "المحلاوي",
            en: "El Mahallawy"
        },
        type: "supermarket",
        category: {
            ar: "سوبرماركت",
            en: "Supermarket"
        },
        rating: "4.2",
        time: "25-40",
        image: "images/supermarkets/mahalawy.jpg.svg",
        menu: "grocery"
    },

    {
        id: 15,
        name: {
            ar: "BIM",
            en: "BIM"
        },
        type: "supermarket",
        category: {
            ar: "سوبرماركت",
            en: "Supermarket"
        },
        rating: "4.0",
        time: "20-35",
        image: "images/supermarkets/bim.jpg.svg",
        menu: "grocery"
    },

    {
        id: 16,
        name: {
            ar: "مترو ماركت",
            en: "Metro Market"
        },
        type: "supermarket",
        category: {
            ar: "سوبرماركت",
            en: "Supermarket"
        },
        rating: "4.1",
        time: "25-40",
        image: "images/supermarkets/metro.jpg.svg",
        menu: "grocery"
    },

    {
        id: 17,
        name: {
            ar: "خير زمان",
            en: "Kheir Zaman"
        },
        type: "supermarket",
        category: {
            ar: "سوبرماركت",
            en: "Supermarket"
        },
        rating: "4.1",
        time: "20-35",
        image: "images/supermarkets/kheir-zaman.jpg.svg",
        menu: "grocery"
    },

    {
        id: 18,
        name: {
            ar: "السعودي",
            en: "AlSeoudi"
        },
        type: "supermarket",
        category: {
            ar: "سوبرماركت",
            en: "Supermarket"
        },
        rating: "4.1",
        time: "20-35",
        image: "images/supermarkets/alseoudi.jpg.svg",
        menu: "grocery"
    }

];


/* =====================================================
   MENUS
===================================================== */

const menus = {

    mcdonalds: [
        ["بيج ماك", "Big Mac", 170, "burger"],
        ["بيج تايستي", "Big Tasty", 275, "burger"],
        ["ماك تشيكن", "McChicken", 170, "chicken"],
        ["تشيكن ماك", "Chicken Mac", 180, "chicken"],
        ["ماك ناجتس", "McNuggets", 160, "chicken"],
        ["تشيز برجر", "Cheeseburger", 110, "burger"],
        ["فرايز", "French Fries", 60, "fries"],
        ["أبل باي", "Apple Pie", 55, "dessert"],
        ["كوكاكولا", "Coca Cola", 45, "drink"],
        ["ميلك شيك", "Milkshake", 85, "drink"]
    ],

    kfc: [
        ["تويستر", "Twister", 150, "chicken"],
        ["زينجر", "Zinger", 160, "chicken"],
        ["ستربس", "Strips", 150, "chicken"],
        ["ناجتس", "Nuggets", 120, "chicken"],
        ["وجبة تويستر", "Twister Meal", 210, "chicken"],
        ["وجبة زينجر", "Zinger Meal", 220, "chicken"],
        ["فرايز", "Fries", 55, "fries"],
        ["كول سلو", "Coleslaw", 60, "salad"],
        ["بيبسي", "Pepsi", 40, "drink"],
        ["مشروب", "Soft Drink", 40, "drink"]
    ],

    burgerking: [
        ["ووبر", "Whopper", 180, "burger"],
        ["دبل ووبر", "Double Whopper", 230, "burger"],
        ["تشيكن رويال", "Chicken Royale", 165, "chicken"],
        ["تشيز برجر", "Cheeseburger", 120, "burger"],
        ["بيف برجر", "Beef Burger", 140, "burger"],
        ["تشكن برجر", "Chicken Burger", 140, "chicken"],
        ["فرايز", "Fries", 55, "fries"],
        ["أونيون رينجز", "Onion Rings", 70, "fries"],
        ["مشروب", "Soft Drink", 40, "drink"],
        ["آيس كريم", "Ice Cream", 60, "dessert"]
    ],

    bremer: [
        ["برجر كلاسيك", "Classic Burger", 160, "burger"],
        ["تشيز برجر", "Cheese Burger", 175, "burger"],
        ["تشيكن برجر", "Chicken Burger", 155, "chicken"],
        ["دبل برجر", "Double Burger", 210, "burger"],
        ["كريسبي تشيكن", "Crispy Chicken", 165, "chicken"],
        ["فرايز", "French Fries", 60, "fries"],
        ["تشيز فرايز", "Cheese Fries", 85, "fries"],
        ["مشروب", "Soft Drink", 40, "drink"],
        ["صوص", "Sauce", 25, "sauce"],
        ["حلو", "Dessert", 70, "dessert"]
    ],

    oregano: [
        ["مارجريتا", "Margherita", 180, "pizza"],
        ["بيبروني", "Pepperoni", 230, "pizza"],
        ["تشيكن بيتزا", "Chicken Pizza", 220, "pizza"],
        ["سوبر سوبريم", "Super Supreme", 250, "pizza"],
        ["ميكس تشيز", "Mix Cheese", 220, "pizza"],
        ["باستا", "Pasta", 180, "pasta"],
        ["لازانيا", "Lasagna", 200, "pasta"],
        ["سلطة", "Salad", 70, "salad"],
        ["مشروب", "Soft Drink", 40, "drink"],
        ["بطاطس", "Fries", 55, "fries"]
    ],

    stereo: [
        ["برجر", "Burger", 170, "burger"],
        ["تشيكن برجر", "Chicken Burger", 165, "chicken"],
        ["تشيز برجر", "Cheese Burger", 180, "burger"],
        ["باستا", "Pasta", 180, "pasta"],
        ["بيتزا", "Pizza", 200, "pizza"],
        ["فرايز", "Fries", 55, "fries"],
        ["سلطة", "Salad", 70, "salad"],
        ["موهيتو", "Mojito", 80, "drink"],
        ["ميلك شيك", "Milkshake", 90, "drink"],
        ["قهوة", "Coffee", 70, "drink"]
    ],

    cluckmoo: [
        ["تشيكن برجر", "Chicken Burger", 160, "chicken"],
        ["كريسبي تشيكن", "Crispy Chicken", 170, "chicken"],
        ["تشيكن ستربس", "Chicken Strips", 150, "chicken"],
        ["كرانشي تشيكن", "Crunchy Chicken", 170, "chicken"],
        ["وجبة تشيكن", "Chicken Meal", 220, "chicken"],
        ["برجر", "Burger", 170, "burger"],
        ["فرايز", "Fries", 55, "fries"],
        ["كول سلو", "Coleslaw", 60, "salad"],
        ["مشروب", "Soft Drink", 40, "drink"],
        ["صوص", "Sauce", 20, "sauce"]
    ],

    ketchup: [
        ["برجر", "Burger", 170, "burger"],
        ["تشيكن برجر", "Chicken Burger", 165, "chicken"],
        ["تشيز برجر", "Cheese Burger", 180, "burger"],
        ["باستا", "Pasta", 180, "pasta"],
        ["بيتزا", "Pizza", 200, "pizza"],
        ["فرايز", "Fries", 55, "fries"],
        ["سلطة", "Salad", 65, "salad"],
        ["مشروب", "Soft Drink", 40, "drink"],
        ["ميلك شيك", "Milkshake", 90, "drink"],
        ["حلو", "Dessert", 75, "dessert"]
    ],

    shashlik: [
        ["شيش طاووق", "Shish Tawook", 190, "chicken"],
        ["كباب", "Kebab", 220, "grill"],
        ["كفتة", "Kofta", 190, "grill"],
        ["فراخ مشوية", "Grilled Chicken", 210, "chicken"],
        ["أرز", "Rice", 60, "rice"],
        ["سلطة", "Salad", 50, "salad"],
        ["حمص", "Hummus", 65, "salad"],
        ["بطاطس", "Fries", 55, "fries"],
        ["بيبسي", "Pepsi", 40, "drink"],
        ["عيش", "Bread", 20, "bread"]
    ],

    sabahy: [
        ["كباب", "Kebab", 230, "grill"],
        ["كفتة", "Kofta", 190, "grill"],
        ["شيش طاووق", "Shish Tawook", 200, "chicken"],
        ["فراخ مشوية", "Grilled Chicken", 210, "chicken"],
        ["أرز", "Rice", 60, "rice"],
        ["مكرونة", "Pasta", 60, "pasta"],
        ["سلطة", "Salad", 50, "salad"],
        ["طحينة", "Tahini", 35, "sauce"],
        ["بطاطس", "Fries", 55, "fries"],
        ["مشروب", "Soft Drink", 40, "drink"]
    ],

    grocery: [
        ["لبن", "Milk", 55, "milk"],
        ["زبادي", "Yogurt", 20, "yogurt"],
        ["جبنة", "Cheese", 90, "cheese"],
        ["بيض", "Eggs", 80, "eggs"],
        ["أرز", "Rice", 80, "rice"],
        ["مكرونة", "Pasta", 45, "pasta"],
        ["سكر", "Sugar", 40, "sugar"],
        ["زيت", "Cooking Oil", 85, "oil"],
        ["دقيق", "Flour", 40, "flour"],
        ["طماطم", "Tomatoes", 25, "tomato"],
        ["بطاطس", "Potatoes", 30, "potato"],
        ["بصل", "Onions", 25, "onion"],
        ["تفاح", "Apples", 75, "apple"],
        ["موز", "Bananas", 45, "banana"],
        ["برتقال", "Oranges", 40, "orange"],
        ["مياه", "Water", 30, "water"],
        ["عصير", "Juice", 45, "juice"],
        ["شاي", "Tea", 50, "tea"],
        ["قهوة", "Coffee", 120, "coffee"],
        ["منظف", "Cleaner", 75, "cleaner"]
    ]

};


/* =====================================================
   FOOD IMAGES
===================================================== */

const foodImages = {

    burger: "images/food/burger.jpg.svg",
    chicken: "images/food/chicken.jpg.svg",
    pizza: "images/food/pizza.jpg.svg",
    fries: "images/food/fries.jpg.svg",
    pasta: "images/food/pasta.jpg.svg",
    salad: "images/food/salad.jpg.svg",
    rice: "images/food/rice.jpg.svg",
    drink: "images/food/drink.jpg.svg",
    dessert: "images/food/dessert.jpg.svg",
    grill: "images/food/grill.jpg.svg",
    sauce: "images/food/sauce.jpg.svg",
    bread: "images/food/bread.jpg.svg",

    milk: "images/food/milk.jpg.svg",
    yogurt: "images/food/yogurt.jpg.svg",
    cheese: "images/food/cheese.jpg.svg",
    eggs: "images/food/eggs.jpg.svg",
    sugar: "images/food/sugar.jpg.svg",
    oil: "images/food/oil.jpg.svg",
    flour: "images/food/flour.jpg.svg",
    tomato: "images/food/tomato.jpg.svg",
    potato: "images/food/potato.jpg.svg",
    onion: "images/food/onion.jpg.svg",
    apple: "images/food/apple.jpg.svg",
    banana: "images/food/banana.jpg.svg",
    orange: "images/food/orange.jpg.svg",
    water: "images/food/water.jpg.svg",
    juice: "images/food/juice.jpg.svg",
    tea: "images/food/tea.jpg.svg",
    coffee: "images/food/coffee.jpg.svg",
    cleaner: "images/food/cleaner.jpg.svg"

};


/* =====================================================
   SAVE CART
===================================================== */

function saveCart() {

    localStorage.setItem(
        "alsareeCart",
        JSON.stringify(cart)
    );

}


/* =====================================================
   CART COUNT
===================================================== */

function updateCartCount() {

    const element =
        document.getElementById("cartCount");

    if (!element) return;

    const count =
        cart.reduce(
            (sum, item) =>
                sum + Number(item.quantity || 0),
            0
        );

    element.textContent = count;

}


/* =====================================================
   LANGUAGE
===================================================== */

function toggleLanguage() {

    currentLanguage =
        currentLanguage === "ar"
            ? "en"
            : "ar";

    localStorage.setItem(
        "language",
        currentLanguage
    );

    applyLanguage();

    renderStores();

    loadMenu();

    loadCheckout();

    updateCartCount();

}


/* =====================================================
   APPLY LANGUAGE TO WHOLE PAGE
===================================================== */

function applyLanguage() {

    const t =
        translations[currentLanguage];


    document.documentElement.lang =
        currentLanguage;


    document.documentElement.dir =
        currentLanguage === "ar"
            ? "rtl"
            : "ltr";


    /* Normal text */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (t[key] !== undefined) {

                element.textContent =
                    t[key];

            }

        });


    /* HTML */

    document
        .querySelectorAll("[data-i18n-html]")
        .forEach(element => {

            const key =
                element.dataset.i18nHtml;

            if (t[key] !== undefined) {

                element.innerHTML =
                    t[key];

            }

        });


    /* Placeholders */

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.dataset.i18nPlaceholder;

            if (t[key] !== undefined) {

                element.placeholder =
                    t[key];

            }

        });


    updatePageTitle();

}


/* =====================================================
   PAGE TITLE
===================================================== */

function updatePageTitle() {

    const path =
        window.location.pathname
            .split("/")
            .pop();


    if (path === "menu.html") {

        document.title =
            currentLanguage === "ar"
                ? "المنيو | عالسريع"
                : "Menu | Al Saree";

    }

    else if (path === "checkout.html") {

        document.title =
            currentLanguage === "ar"
                ? "إتمام الطلب | عالسريع"
                : "Checkout | Al Saree";

    }

    else {

        document.title =
            currentLanguage === "ar"
                ? "عالسريع | اطلب كل حاجة"
                : "Al Saree | Order Everything";

    }

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(storeId, itemIndex) {

    const store =
        stores.find(
            s => s.id === storeId
        );

    if (!store) return;


    const item =
        menus[store.menu][itemIndex];

    if (!item) return;


    const existing =
        cart.find(
            x =>
                x.storeId === storeId &&
                x.itemIndex === itemIndex
        );


    if (existing) {

        existing.quantity++;

    }

    else {

        cart.push({

            storeId: storeId,

            itemIndex: itemIndex,

            nameAr: item[0],

            nameEn: item[1],

            price: Number(item[2]),

            image:
                foodImages[item[3]],

            quantity: 1

        });

    }


    saveCart();

    updateCartCount();


    const name =
        currentLanguage === "ar"
            ? item[0]
            : item[1];


    alert(
        `${translations[currentLanguage].added} ${name} ${translations[currentLanguage].toCart}`
    );

}


/* =====================================================
   STORE CARDS
===================================================== */

function renderStores(list = stores) {

    const grid =
        document.getElementById(
            "storesGrid"
        );

    if (!grid) return;


    const t =
        translations[currentLanguage];


    grid.innerHTML = "";


    if (!list.length) {

        grid.innerHTML = `

            <div class="empty-cart">

                <h2>
                    ${t.noResults}
                </h2>

            </div>

        `;

        return;

    }


    list.forEach(store => {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "store-card";


        const name =
            store.name[currentLanguage];


        const category =
            store.category[currentLanguage];


        const type =
            store.type === "restaurant"
                ? t.restaurant
                : t.supermarket;


        card.innerHTML = `

            <div class="store-image">

                <img
                    src="${store.image}"
                    alt="${name}">

            </div>


            <div class="store-info">

                <small>
                    ${type} • ${category}
                </small>

                <h3>
                    ${name}
                </h3>

                <div class="store-meta">

                    ⭐ ${store.rating}

                    <span>
                        •
                    </span>

                    ⏱️

                    ${store.time}
                    ${t.minutes}

                </div>


                <button
                    class="menu-btn"
                    onclick="openMenu(${store.id})">

                    ${t.menu}

                </button>

            </div>

        `;


        grid.appendChild(card);

    });

}


/* =====================================================
   FILTER
===================================================== */

function filterStores(type) {

    document
        .querySelectorAll(".category")
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });


    if (window.event) {

        window.event
            .currentTarget
            ?.classList
            .add("active");

    }


    if (type === "all") {

        renderStores(stores);

        return;

    }


    renderStores(
        stores.filter(
            store =>
                store.type === type
        )
    );

}


/* =====================================================
   SEARCH
===================================================== */

function searchStores() {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) return;


    const value =
        input.value
            .trim()
            .toLowerCase();


    if (!value) {

        renderStores(stores);

        return;

    }


    const result =
        stores.filter(store => {

            const name =
                store.name[
                    currentLanguage
                ].toLowerCase();


            const category =
                store.category[
                    currentLanguage
                ].toLowerCase();


            return (
                name.includes(value) ||
                category.includes(value)
            );

        });


    renderStores(result);

}


/* =====================================================
   OPEN MENU
===================================================== */

function openMenu(id) {

    window.location.href =
        `menu.html?id=${id}`;

}


/* =====================================================
   LOAD MENU
===================================================== */

function loadMenu() {

    const grid =
        document.getElementById(
            "menuGrid"
        );

    if (!grid) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        Number(
            params.get("id")
        );


    const store =
        stores.find(
            s => s.id === id
        );


    if (!store) {

        grid.innerHTML = `

            <h2>
                ${translations[currentLanguage].placeNotFound}
            </h2>

        `;

        return;

    }


    const name =
        store.name[currentLanguage];


    const type =
        store.category[currentLanguage];


    const restaurantName =
        document.getElementById(
            "restaurantName"
        );


    if (restaurantName) {

        restaurantName.textContent =
            name;

    }


    const restaurantType =
        document.getElementById(
            "restaurantType"
        );


    if (restaurantType) {

        restaurantType.textContent =
            type;

    }


    const restaurantInfo =
        document.getElementById(
            "restaurantInfo"
        );


    if (restaurantInfo) {

        restaurantInfo.textContent =
            `⭐ ${store.rating} • ⏱️ ${store.time} ${translations[currentLanguage].minutes}`;

    }


    const restaurantImage =
        document.getElementById(
            "restaurantImage"
        );


    if (restaurantImage) {

        restaurantImage.src =
            store.image;

        restaurantImage.alt =
            name;

    }


    const menu =
        menus[store.menu] || [];


    grid.innerHTML = "";


    menu.forEach(
        (item, index) => {

            const itemName =
                currentLanguage === "ar"
                    ? item[0]
                    : item[1];


            const currency =
                translations[
                    currentLanguage
                ].egp;


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "food-card";


            card.innerHTML = `

                <div class="food-image">

                    <img
                        src="${foodImages[item[3]]}"
                        alt="${itemName}">

                </div>


                <div class="food-info">

                    <h3>
                        ${itemName}
                    </h3>


                    <div class="food-price">

                        ${item[2]}
                        ${currency}

                    </div>


                    <button
                        class="add-btn"
                        onclick="addToCart(${store.id}, ${index})">

                        +
                        ${
                            currentLanguage === "ar"
                                ? "إضافة للسلة"
                                : "Add to Cart"
                        }

                    </button>

                </div>

            `;


            grid.appendChild(card);

        }
    );

}


/* =====================================================
   CHECKOUT
===================================================== */

function loadCheckout() {

    const box =
        document.getElementById(
            "cartItems"
        );

    if (!box) return;


    const t =
        translations[currentLanguage];


    if (!cart.length) {

        box.innerHTML = `

            <div class="empty-cart">

                <h2>
                    ${t.emptyCart}
                </h2>

                <button
                    class="menu-btn"
                    onclick="location.href='index.html'">

                    ${t.startOrder}

                </button>

            </div>

        `;


        updateTotals();

        return;

    }


    box.innerHTML = "";


    cart.forEach(
        (item, index) => {

            const name =
                currentLanguage === "ar"
                    ? item.nameAr
                    : item.nameEn;


            const element =
                document.createElement(
                    "div"
                );


            element.className =
                "cart-item";


            element.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${name}">


                <div class="cart-info">

                    <strong>
                        ${name}
                    </strong>


                    <div>
                        ${item.price}
                        ${t.egp}
                    </div>


                    <div class="quantity">

                        <button
                            onclick="changeQuantity(${index}, -1)">

                            −

                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            onclick="changeQuantity(${index}, 1)">

                            +

                        </button>

                    </div>

                </div>

            `;


            box.appendChild(element);

        }
    );


    updateTotals();

}


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(index, amount) {

    if (!cart[index]) return;


    cart[index].quantity =
        Number(cart[index].quantity) +
        amount;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    saveCart();

    updateCartCount();

    loadCheckout();

}


/* =====================================================
   TOTALS
===================================================== */

function updateTotals() {

    const productsTotal =
        cart.reduce(
            (sum, item) =>
                sum +
                Number(item.price) *
                Number(item.quantity),
            0
        );


    const delivery =
        cart.length > 0
            ? deliveryFee
            : 0;


    const total =
        productsTotal +
        delivery;


    const currency =
        translations[
            currentLanguage
        ].egp;


    const productsElement =
        document.getElementById(
            "productsTotal"
        );


    const deliveryElement =
        document.getElementById(
            "deliveryTotal"
        );


    const totalElement =
        document.getElementById(
            "cartTotal"
        );


    if (productsElement) {

        productsElement.textContent =
            `${productsTotal} ${currency}`;

    }


    if (deliveryElement) {

        deliveryElement.textContent =
            `${delivery} ${currency}`;

    }


    if (totalElement) {

        totalElement.textContent =
            `${total} ${currency}`;

    }

}


/* =====================================================
   CHECKOUT FORM
===================================================== */

function setupCheckout() {

    const form =
        document.getElementById(
            "checkoutForm"
        );

    if (!form) return;


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const t =
                translations[
                    currentLanguage
                ];


            if (!cart.length) {

                alert(t.emptyCart);

                return;

            }


            const productsTotal =
                cart.reduce(
                    (sum, item) =>
                        sum +
                        Number(item.price) *
                        Number(item.quantity),
                    0
                );


            if (productsTotal < 50) {

                alert(t.minimum);

                return;

            }


            const name =
                document
                    .getElementById(
                        "customerName"
                    )
                    .value
                    .trim();


            const phone =
                document
                    .getElementById(
                        "customerPhone"
                    )
                    .value
                    .trim();


            const area =
                document
                    .getElementById(
                        "area"
                    )
                    .value
                    .trim();


            const address =
                document
                    .getElementById(
                        "address"
                    )
                    .value
                    .trim();


            if (
                !name ||
                !phone ||
                !area ||
                !address
            ) {

                alert(
                    t.requiredData
                );

                return;

            }


            const egyptianPhone =
                /^01[0125][0-9]{8}$/;


            if (
                !egyptianPhone.test(
                    phone
                )
            ) {

                alert(
                    t.phoneInvalid
                );

                return;

            }


            alert(
                `${t.success} ${name} ❤️`
            );


            cart = [];


            saveCart();

            updateCartCount();


            window.location.href =
                "index.html";

        }
    );

}


/* =====================================================
   OFFER TIMER
===================================================== */

function startOfferTimer() {

    const timer =
        document.getElementById(
            "offerTimer"
        );

    if (!timer) return;


    let seconds = 30 * 60;


    function updateTimer() {

        const minutes =
            Math.floor(
                seconds / 60
            );


        const remaining =
            seconds % 60;


        timer.textContent =
            `${String(minutes).padStart(2, "0")}:${String(remaining).padStart(2, "0")}`;


        if (seconds > 0) {

            seconds--;

        }

    }


    updateTimer();

    setInterval(
        updateTimer,
        1000
    );

}


/* =====================================================
   INIT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        applyLanguage();

        updateCartCount();

        renderStores();

        loadMenu();

        loadCheckout();

        setupCheckout();

        startOfferTimer();

    }
);