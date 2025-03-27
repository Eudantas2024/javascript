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

const realPrices = products.map(p => p.price * 5.73)
console.log(realPrices)

