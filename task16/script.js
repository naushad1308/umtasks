alert("Search Products By Title")


class Products {
    constructor(data) {
        this.data = data
    }

    async fetchProduct() {
        let products = await fetch('https://fakestoreapi.com/products')
        let product = await products.json()
        this.data = product
    }

    async populateProduct() {
        await this.fetchProduct()
        let products = this.data
        // console.log(products)

        let productContainer = document.querySelector(".dataPopulate")
        //*** */ Populate Product****
        products.map((product) => {
            // console.log(product)
            // console.log(productContainer)

            let card = ` <div class=" card mt-4 rounded p-2" style="width: 18rem; height:400px; border-right: 1px solid gray;">
                <img src="${product.image}" height="200" width="200"
                    class="card-img-top" alt="..." style="object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title fs-6">${product.title}</h5>
                    <p class="card-text ">${product.description}.</p>
                </div>
                <button class="btn btn-primary">Shop Now</button>

            </div>`
            productContainer.innerHTML += card
        })

    }

    // filteredProducts
    filterProducts(keyword) {
        let filteredProducts = this.data.filter(product => {
            return product.title.toLowerCase().includes(keyword.toLowerCase());
        });
        console.log(filteredProducts)

        // Clear existing products before populating filtered products
        let productContainer = document.querySelector(".dataPopulate");
        productContainer.innerHTML = "";

        filteredProducts.map((product) => {
            let card = ` <div class=" card mt-4 rounded p-2" style="width: 18rem; height:400px; border-right: 1px solid gray;">
                <img src="${product.image}" height="200" width="200"
                    class="card-img-top" alt="..." style="object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title fs-6">${product.title}</h5>
                    <p class="card-text ">${product.description}.</p>
                </div>
                <button class="btn btn-primary">Shop Now</button>
            </div>`;

            productContainer.innerHTML += card;
        });
    }

}

const pro = new Products()
pro.fetchProduct()
pro.populateProduct()


// filter Product

let searchBtn = document.querySelector("#searchBtn")
let searchInput = document.querySelector("#searchInput")

searchBtn.addEventListener("click", async () => {
    pro.filterProducts(searchInput.value)

})
searchInput.addEventListener('input', () => {
    pro.filterProducts(searchInput.value)
})
