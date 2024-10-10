class Service {
    constructor(id, emoji, name, price) {
        this.id = id;
        this.emoji = emoji;
        this.name = name;
        this.price = price;
    }
}


class Services {
    constructor(services) {
        this.services = services;
        this.cart = [];
    }

    showServices() {
        const serviceListTable = document.querySelector(".serviceTableBody");
        this.services.forEach((service) => {
            const newRow = document.createElement("tr");
            const emojiCell = document.createElement("td");
            emojiCell.textContent = service.emoji;
            newRow.appendChild(emojiCell);

            const nameCell = document.createElement("td");
            nameCell.textContent = service.name;
            newRow.appendChild(nameCell);

            const priceCell = document.createElement("td");
            priceCell.textContent = `Rs ${service.price}`;
            newRow.appendChild(priceCell);

            const buttonCell = document.createElement("td");
            buttonCell.className = "addRemoveItem";
            const button = document.createElement("button");
            button.className = "addBtn btn btn-success px-4";
            button.textContent = "Add";
            button.addEventListener("click", () => this.buttonClickHandler(service, button));
            buttonCell.appendChild(button);
            newRow.appendChild(buttonCell);

            serviceListTable.appendChild(newRow);
        });

        // // Disable input and book now button by default
        // const inputField = document.querySelector("#inputField");
        // const bookNowButton = document.querySelector("#bookNowButton");
        // inputField.disabled = true;
        // bookNowButton.disabled = true;
    }
    buttonClickHandler(service, button) {
        if (this.cart.includes(service)) {
            this.removeFromCart(service, button);

            // Disable input and book now button if cart is empty
            if (this.cart.length === 0) {
                const inputField = document.querySelectorAll(".input");
                inputField.forEach((i) => {
                    i.disabled = true;
                });
                const bookNowButton = document.querySelector("#bookNowButton");
                bookNowButton.disabled = true;
                let addItemInfo = document.querySelector("#addItemInfo");
                addItemInfo.style.display = "block"; // Show when cart is empty
                let info = document.querySelector("#info");
                info.style.display = "block"; // Show when cart is empty
            }

        } else {
            this.addToCart(service, button);

            const inputField = document.querySelectorAll(".input");
            inputField.forEach((i) => {
                i.disabled = false;
            });
            const bookNowButton = document.querySelector("#bookNowButton");
            bookNowButton.disabled = false;
            let addItemInfo = document.querySelector("#addItemInfo");
            addItemInfo.style.display = "none"; // Hide when cart has items
            let info = document.querySelector("#info");
            info.style.display = "none"; // Hide when cart has items
        }
    }
    addToCart(service, button) {
        this.cart.push(service);
        button.textContent = "Remove";
        button.className = "removeBtn btn btn-danger px-2";
        this.updateCartUI();
        this.updateTotal();


        // const inputField = document.querySelector("#inputField");
        // inputField.disabled = false;

    }

    removeFromCart(service, button) {
        const index = this.cart.indexOf(service);
        if (index !== -1) {
            this.cart.splice(index, 1);
        }
        button.textContent = "Add";
        button.className = "addBtn btn btn-success px-4";
        this.updateCartUI();
        this.updateTotal();

        // Disable input and book now button if cart is empty
        // const inputField = document.querySelector("#inputField");
        // const bookNowButton = document.querySelector("#bookNowButton");
        // if (this.cart.length === 0) {
        //     inputField.disabled = true;
        //     bookNowButton.disabled = true;
        // }
    }

    updateCartUI() {
        const addItemListContainer = document.querySelector(".addItemListContainer");
        addItemListContainer.innerHTML = "";
        this.cart.forEach((service, index) => {
            const newRow = document.createElement("tr");
            const sn = document.createElement("td");
            sn.textContent = index + 1;
            newRow.appendChild(sn);

            const name = document.createElement("td");
            name.textContent = service.name;
            newRow.appendChild(name);

            const price = document.createElement("td");
            price.textContent = "Rs " + service.price;
            newRow.appendChild(price);

            addItemListContainer.appendChild(newRow);
        });

        let addItemInfo = document.querySelector("#addItemInfo");
        let info = document.querySelector("#info");
        if (this.cart.length > 0) {
            addItemInfo.style.display = "none"; // Hide when cart has items
            info.style.display = "none"; // Hide when cart has items
        } else {
            addItemInfo.style.display = "block"; // Show when cart is empty
            info.style.display = "block"; // Show when cart is empty
        }
    }
    updateTotal() {
        let total = 0;
        this.cart.forEach((service) => {
            total += service.price;
        });
        const totalElement = document.querySelector("#totalAmount");
        totalElement.textContent = ` Rs ${total}`;
    }
}

const laundryServices = [
    new Service(1, "👗", "Dry Clean", 200),
    new Service(2, "💦", "Wash", 300),
    new Service(3, "👘", "Iron", 100),
    new Service(4, "🦠", "Stain Remove", 300),
    new Service(5, "🍁", "Leather Clean", 100),
    new Service(6, "👰", "Wedding Dress", 500),
];

const services = new Services(laundryServices);
services.showServices();



// Email js send form
(function () {
    emailjs.init("UYomxfdG5wfiCe1pr");
})();




window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_yy1oa6k', 'template_sxys6up', this)
            .then(() => {
                console.log('SUCCESS!');
                Toastify({
                    text: "Thankyou for Booking with us",
                    duration: 3000,
                    // destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {

                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function () { } // Callback after click
                }).showToast();
                this.reset();

                // Empty and diable cart 
                const addItemListContainer = document.querySelector(".addItemListContainer");
                addItemListContainer.innerHTML = "";
                const inputField = document.querySelectorAll(".input");
                inputField.forEach((i) => {
                    i.disabled = true;
                });
                const bookNowButton = document.querySelector("#bookNowButton");
                bookNowButton.disabled = true;
                let addItemInfo = document.querySelector("#addItemInfo");
                addItemInfo.style.display = "block"; // Show when cart is empty
                let info = document.querySelector("#info");
                info.style.display = "block"; // Show when cart is empty

                // Redirect to next page
                setTimeout(() => {
                    window.location.href = 'payment.html';
                }, 1000);
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}