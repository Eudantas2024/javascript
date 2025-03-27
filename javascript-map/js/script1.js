const products = [
    {
        name: 'notebook',
        price: 1100
    },
    {
        name: 'smartphone',
        price: 480
    }
]

const listInDollars = document.getElementById('listInDollars');
const listconvertedPrice = document.getElementById('listconvertedPrice');

// Mostrar produtos originais
products.forEach(p => {
    const item = document.createElement('li')
    item.textContent = `Produto: ${p.name} - Preço: $${p.price}`;
    listInDollars.appendChild(item);
})

// Mostrar produtos com preço em Real
const priceInDollars = products.map( p => {
    const convertedPriceValue = (p.price * 5.73).toFixed(2);
    const item = document.createElement('li');
    item.textContent = ` 
       Produto: ${p.name} -
       Preço em dolar $${p.price} -
       Preço em R$ ${convertedPriceValue}
    `
    listconvertedPrice.appendChild(item)

})