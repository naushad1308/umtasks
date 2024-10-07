const LaundaryServices = [
    {
        "id": 1,
        emoji: "👗",
        name: "Dry Clean",
        price: 200,
        button: "Add"
    },
    {
        "id": 2,
        emoji: "💦",
        name: "Wash",
        price: 300,
        button: "Add"
    },
    {
        "id": 3,
        emoji: "👘",
        name: "Iron",
        price: 100,
        button: "Add"
    },
    {
        "id": 4,
        emoji: "🦠",
        name: "Stain Remove",
        price: 300,
        button: "Add"
    },
    {
        "id": 5,
        emoji: "🍁",
        name: "Leather Clean",
        price: 100,
        button: "Add"
    },
    {
        "id": 6,
        emoji: "👰",
        name: "Wedding Dress",
        price: 500,
        button: "Add"
    },
]

// console.log(serviceListTable)

class Services {
    constructor(services) {
        this.services = services;
        this.cart = []
    }

    showServices() {
        const serviceListTable = document.querySelector(".serviceTableBody")

        this.services.forEach(service => {
            let newRow = document.createElement('tr');

            let emojiCell = document.createElement('td');
            emojiCell.textContent = service.emoji;
            newRow.appendChild(emojiCell);

            let nameCell = document.createElement('td');
            nameCell.textContent = service.name;
            newRow.appendChild(nameCell);

            let priceCell = document.createElement('td');
            priceCell.textContent = `Rs ${service.price}`;
            newRow.appendChild(priceCell);

            let buttonCell = document.createElement('td');
            buttonCell.className = 'addRemoveItem';

            let button = document.createElement('button');
            button.className = 'addBtn btn btn-success px-4';
            button.textContent = service.button;
            button.addEventListener('click', this.buttonClickHandler.bind(this, service))

            buttonCell.appendChild(button);
            newRow.appendChild(buttonCell);

            serviceListTable.appendChild(newRow);
        })
    }

    buttonClickHandler(service, event) {
        console.log(service)
        // console.log(event)
        const button = event.target;
        // const service = button.service;

        if (button.textContent === 'Add') {
            this.addToCart(service, button);


            let input = document.querySelectorAll(".input")
            input.forEach((i) => {
                // i.removeAttribute("readonly");
                i.disabled = false
            })

            let bookNowBtn = document.querySelector(".bookNowBtn")
            bookNowBtn.disabled = false;
        } else {
            this.removeFromCart(service, button);
            let bookNowBtn = document.querySelector(".bookNowBtn")
            bookNowBtn.disabled = true;
        }
        if (this.cart.length === 0) {
            addItemInfo.style.display = "block"



        } else {
            addItemInfo.style.display = "none"
        }

    }
    addToCart(service, button) {
        // console.log(service)
        this.cart.push(service);
        // console.log(this.cart);

        // update button text to 'Remove Item'
        button.textContent = 'Remove';
        button.className = 'btn btn-danger px-2';

        // add the newly added item to the cart UI
        let addItemListContainer = document.querySelector(".addItemListContainer");
        let newRow = document.createElement('tr');
        let sn = document.createElement('td');
        sn.textContent = this.cart.length;
        newRow.appendChild(sn);

        let name = document.createElement('td');
        name.textContent = service.name;
        newRow.appendChild(name);

        let price = document.createElement('td');
        price.textContent = service.price;
        newRow.appendChild(price);

        addItemListContainer.appendChild(newRow);

        // calculate and update the total
        this.updateTotal();
    }

    removeFromCart(service, button) {
        // remove item from cart
        const index = this.cart.findIndex((cartService) => cartService.id === service.id);
        if (index !== -1) {
            this.cart.splice(index, 1);
        }
        console.log(this.cart);

        // update button text back to 'Add Item'
        button.textContent = 'Add';
        button.className = 'btn btn-success px-4';

        // remove the corresponding table row from the UI
        const addItemListContainer = document.querySelector(".addItemListContainer");
        const rows = addItemListContainer.rows;
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].cells[0].textContent === service.id.toString()) {
                addItemListContainer.removeChild(rows[i]);
                break;
            }
        }
        // renumber the serial numbers in the cart UI
        for (let i = 0; i < rows.length; i++) {
            rows[i].cells[0].textContent = (i + 1).toString();
        }
        // calculate and update the total
        this.updateTotal();
    }

    showCartItems() {
        let addItemInfo = document.querySelector("#addItemInfo")
        alert("hello")

        // clear the cart UI
        let addItemListContainer = document.querySelector(".addItemListContainer");
        while (addItemListContainer.firstChild) {
            addItemListContainer.removeChild(addItemListContainer.firstChild);
        }

        // add the items in the cart to the UI

        // this.cart.forEach((service, i) => {
        //     let newRow = document.createElement('tr');
        //     let sn = document.createElement('td');
        //     sn.textContent = service.id;
        //     newRow.appendChild(sn);

        //     let name = document.createElement('td');
        //     name.textContent = service.name;
        //     newRow.appendChild(name);

        //     let price = document.createElement('td');
        //     price.textContent = service.price;
        //     newRow.appendChild(price);

        //     total += parseInt(service.price);

        //     addItemListContainer.appendChild(newRow);
        // });


    }

    updateTotal() {
        let total = 0;
        this.cart.forEach((service) => {
            total += service.price;
        });

        let totalElement = document.querySelector("#totalAmout");
        totalElement.textContent = `Total: Rs ${total}`;
    }
}

let service = new Services(LaundaryServices)
service.showServices()
// service.showCartItems()