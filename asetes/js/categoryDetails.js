const getProducts =async ()=>{
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const {data} = await axios.get(`https://dummyjson.com/products/category/${category}`);
    return data;
}
const displayProduct =async ()=>{
    const data = await getProducts();
    console.log(data);
    const result = data.products.map((product)=>{
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


displayProduct();