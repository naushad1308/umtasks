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
            newRow.innerHTML = `
    <td>${service.emoji}</td>
    <td>${service.name}</td>
    <td>Rs ${service.price}</td>
    <td colspan="2" class="addRemoveItem"><button class="btn btn-success px-4" onclick="addToCart(${service})">${service.button}</button> </td>
  `;
            serviceListTable.appendChild(newRow);

        })
    }

    addToCart(service) {
        alert("hello")

        this.cart.push(...this.services, service)
        this.cart.forEach(item => {
            console.log(item)
        })
    }

}

let service = new Services(LaundaryServices)
// console.log(service)

service.showServices()