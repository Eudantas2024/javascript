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

console.log(products)

// const realPrices = products.map(p => (p.price * 5.73).toFixed(2));
const realPrices = products.map( p => {
    const convertedPrice = (p.price * 5.73).toFixed(2);
    console.log(`
        Produto: ${p.name} - 
        Preço em dolar: $${p.price} -
        Preço em R$ ${convertedPrice}
        `)
})


// o products tem quantidade ou product não tem
// template literal (monta texto e variavel tudo dentro da crase ``, o uso das craes para usar string e variável juntas!)
