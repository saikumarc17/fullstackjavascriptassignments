const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 15000 },
    { name: "Laptop Bag", price: 2000 },
    { name: "Watch", price: 3000 },
    { name: "Mobile Charger", price: 150 },
  ];

  let maxproduct={name:"",price:0}
  let minproduct={name:"",price:Number.MAX_VALUE}

  for (const iterator of products) {
      if(iterator.price>maxproduct.price){
          maxproduct.price=iterator.price;
          maxproduct.name=iterator.name;
        }
        if(iterator.price<minproduct.price){
            minproduct.price=iterator.price;
            minproduct.name=iterator.name;
        }
    }
    console.log(`The product with maximum amount is ${maxproduct.name} which is priced at ${maxproduct.price}`);
    console.log(`The product with minimum amount is ${minproduct.name} which is priced at ${minproduct.price}`);
 