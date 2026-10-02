let language =
    localStorage.getItem("language") || "ar";


let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];


const deliveryFee = 25;


/* LANGUAGE */

function applyLanguage() {

    document.documentElement.lang =
        language;


    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    document.querySelectorAll(
        "[data-ar]"
    ).forEach(element => {

        element.textContent =
            language === "ar"
                ? element.dataset.ar
                : element.dataset.en;

    });


    const button =
        document.getElementById(
            "languageBtn"
        );


    if (button) {

        button.textContent =
            language === "ar"
                ? "🇬🇧 English"
                : "🇪🇬 عربي";

    }


    localStorage.setItem(
        "language",
        language
    );

}


/* GROUP CART */

function getGroupedCart() {

    const grouped = [];


    cart.forEach(item => {

        const found =
            grouped.find(
                x =>
                    x.nameAr ===
                    item.nameAr
            );


        if (found)

            found.quantity++;

        else

            grouped.push({

                ...item,

                quantity: 1

            });

    });


    return grouped;

}


/* RENDER */

function renderCart() {

    const container =
        document.getElementById(
            "checkoutItems"
        );


    if (!container) return;


    container.innerHTML = "";


    if (!cart.length) {

        container.innerHTML = `

            <div style="
                text-align:center;
                padding:30px 10px;
            ">

                🛒

                <h3>
                    ${
                        language === "ar"
                            ? "السلة فاضية"
                            : "Your cart is empty"
                    }
                </h3>


                <a
                    href="index.html"
                    class="back-menu">

                    ${
                        language === "ar"
                            ? "رجوع للمطاعم"
                            : "Back to Restaurants"
                    }

                </a>

            </div>

        `;


        updateTotal();

        return;

    }


    getGroupedCart().forEach(
        (item, index) => {


            const name =
                language === "ar"
                    ? item.nameAr
                    : item.nameEn;


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "order-item";


            div.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${name}"
                >


                <div
                    class="order-item-info">

                    <h4>
                        ${name}
                    </h4>

                    <span>
                        ${item.price} EGP
                    </span>

                </div>


                <div class="order-quantity">

                    <button
                        class="minus">
                        −
                    </button>


                    <strong>
                        ${item.quantity}
                    </strong>


                    <button
                        class="plus">
                        +
                    </button>

                </div>

            `;


            div.querySelector(
                ".minus"
            ).onclick = () => {

                const cartIndex =
                    cart.findIndex(
                        x =>
                            x.nameAr ===
                            item.nameAr
                    );


                if (cartIndex !== -1) {

                    cart.splice(
                        cartIndex,
                        1
                    );

                }


                saveCart();

                renderCart();

            };


            div.querySelector(
                ".plus"
            ).onclick = () => {

                cart.push({
                    ...item
                });


                saveCart();

                renderCart();

            };


            container.appendChild(div);

        }
    );


    updateTotal();

}


/* TOTAL */

function updateTotal() {

    let subtotal = 0;


    cart.forEach(item => {

        subtotal +=
            Number(item.price);

    });


    const total =
        cart.length
            ? subtotal + deliveryFee
            : 0;


    const subtotalElement =
        document.getElementById(
            "subtotal"
        );


    const totalElement =
        document.getElementById(
            "total"
        );


    if (subtotalElement)

        subtotalElement.textContent =
            `${subtotal} EGP`;


    if (totalElement)

        totalElement.textContent =
            `${total} EGP`;

}


/* SAVE */

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


/* LANGUAGE BUTTON */

document
    .getElementById(
        "languageBtn"
    )
    ?.addEventListener(
        "click",
        () => {

            language =
                language === "ar"
                    ? "en"
                    : "ar";


            applyLanguage();

            renderCart();

        }
    );


/* CONFIRM */

document
    .getElementById(
        "confirmOrder"
    )
    ?.addEventListener(
        "click",
        () => {


            if (!cart.length) {

                alert(
                    language === "ar"
                        ? "السلة فاضية 🛒"
                        : "Your cart is empty 🛒"
                );

                return;

            }


            const name =
                document
                    .getElementById(
                        "name"
                    )
                    .value.trim();


            const phone =
                document
                    .getElementById(
                        "phone"
                    )
                    .value.trim();


            const area =
                document
                    .getElementById(
                        "area"
                    )
                    .value.trim();


            const address =
                document
                    .getElementById(
                        "address"
                    )
                    .value.trim();


            if (
                !name ||
                !phone ||
                !area ||
                !address
            ) {

                alert(
                    language === "ar"
                        ? "من فضلك اكتب بيانات التوصيل كاملة 📍"
                        : "Please complete your delivery details 📍"
                );

                return;

            }


            alert(
                language === "ar"
                    ? "🎉 تم تأكيد طلبك بنجاح!"
                    : "🎉 Your order has been confirmed!"
            );


            localStorage.removeItem(
                "cart"
            );


            cart = [];


            window.location.href =
                "index.html";

        }
    );


/* START */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        applyLanguage();

        renderCart();

    }
);