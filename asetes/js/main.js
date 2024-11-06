const getCatogeries = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/category-list?fbclid=IwY2xjawGUZo1leHRuA2FlbQIxMAABHYMC2Qn582y0CMjWBMt96S1FVZQ6G8_md9nXFOW5ly7lahXzMUFilqK9CQ_aem_TmPQB0aETlISLQ1MU0uYHQ`);
    return data;
}
const displayCatogeries = async () => {
    const categories = await getCatogeries();
    console.log(categories);
    const result = categories.map((category) => {
        return `
<div class='category'>
<h2>${category}</h2>
<a href='categoryDetails.html?category=${category}'>Details</a>
</div>`
    }).join(``);
    document.querySelector(".categories .row").innerHTML = result;
}

/*displayCatogeries();*/
const getProducts = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products`);
    return data;
}
const displayProduct = async () => {
    const data = await getProducts();
    console.log(data);
    const result = data.products.map((product) => {
        return `
<div class='product'>
<img src="${product.thumbnail}" alt="${product.description}"/>
<h3>${product.title}</h3>
<span>${product.price}</span>
</div>
`
    }).join('');
    document.querySelector(".products .row").innerHTML = result;
}


displayCatogeries();
displayProduct();