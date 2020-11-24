const priceForProducts =[ 
    {
        'name':'camiseta',
        'price':25000
    },
    {
        'name':'Zapatos',
        'price':120000
    },
    {
        'name':'Pantalon',
        'price':90000
    }
];

let sumOfProducts = priceForProducts.reduce((prev,current) => prev + current.price, 0);
console.log(sumOfProducts)