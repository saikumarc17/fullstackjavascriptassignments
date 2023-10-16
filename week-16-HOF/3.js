const items = [
    {
        name: "Iphone 15",
        category: "Mobile",
        priceUSD: 1500,
    },
    {
        name: "Macbook Air",
        category: "Laptops",
        priceUSD: 1200,
    },
    {
        name: "Apple Watch",
        category: "Watches",
        priceUSD: 600,
    },
];

const exchangeRate=80;
function conevrtToinr(){
    items.map((prod)=>{
        prod['priceinINR']=prod.priceUSD*exchangeRate;
    })
    console.log(items);
}
conevrtToinr();
