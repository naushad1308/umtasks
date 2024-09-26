let serviceArray = [
    {
        imgUrl: "https://content.jdmagicbox.com/comp/service_catalogue/laundry-services-attr-anti-bacterial-laundry-service-lau6-1.jpg",
        service: "Ironing",
        price: 10.00
    },
    {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHk1ZOXliuIUO0OgnlI1mrWYQ_SFKGdR7zRQ&s",
        service: "wash",
        price: 10.00
    },
    {
        imgUrl: "https://i0.wp.com/www.fabonow.com/wp-content/uploads/2023/05/Best-Dry-Cleaning-Services.png?fit=1000%2C667&ssl=1",
        service: "Dry Clean",
        price: 10.00
    },
];

let addedItem = [];

let addItemBtn = document.querySelector("#addItemBtn");

let index = 0;
addItemBtn.addEventListener('click', () => {
    const serviceContainer = document.querySelector("#serviceContainer")
    let tbody = document.querySelector("#tbody")
    let totalAmount = document.querySelector("#totalAmount")
    let hide = document.querySelector(".hide")
    let bookBtn = document.querySelector(".bookBtn")


    if (index < serviceArray.length) {
        hide.style.display = "none"
        bookBtn.style.background = "#3340f7"

        let selectedItem = serviceArray[index];
        addedItem.push(selectedItem);
        console.log("Updated addedItem array:", addedItem);


        serviceContainer.innerHTML = `  <div class="serviceImage">
                    <img id="serviceImage" src="${serviceArray[index].imgUrl}" alt="washing machine"
                        height="300" width="300">
                </div>
                <div class="servicePrice d-flex justify-content-between fw-bold">
                    <span>${serviceArray[index].service}</span>
                    <span style="color: #5763F9;">&#8377; ${serviceArray[index].price}</span>
                </div>`

        tbody.innerHTML += `<tr>
                            <td style="text-align: center;">${index + 1}</td>

                            <td> ${serviceArray[index].service} </td>
                            <td style="text-align: center;">&#8377;${serviceArray[index].price}</td>
                        </tr>`

        totalAmount.innerHTML = ` &#8377; ${addedItem.reduce((acc, curr) => acc + curr.price, 0)}`;

        index++;
    } else {
        serviceContainer.innerHTML = ` <div style = "height:330px;" class = "text-center p-5">No More Items</div>`
        console.log("No more items to add.");
    }
});


let skipItemBtn = document.querySelector("#skipItemBtn");


skipItemBtn.addEventListener('click', () => {
    if (index < serviceArray.length) {

        const serviceContainer = document.querySelector("#serviceContainer")

        serviceContainer.innerHTML = `  <div class="serviceImage">
                    <img id="serviceImage" src="${serviceArray[index].imgUrl}" alt="washing machine"
                        height="300" width="300">
                </div>
                <div class="servicePrice d-flex justify-content-between fw-bold">
                    <span>${serviceArray[index].service}</span>
                    <span style="color: #5763F9;">&#8377; ${serviceArray[index].price}</span>
                </div>`


        index++;
        console.log("Updated addedItem array:", addedItem);
    } else {
        console.log("No more items to add.");
    }
});

