const nayok = { 
    name: 'rayaan',
    age: 8,
    movies: [{name: 1, year: 2023}],
    act:function(){
        console.log('actu');
    },
    car: {
        brand:'tesla',
    }
}
console.log(nayok.act);


function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
      
}

add(2, 3, 4 , 5);



const products = [
    {id:1, brand: "len Phone", price: 2000 },
    {id:1, brand: "ten phone", price: 4000 },
    {id:1, brand: "soo Phone", price: 4000 },
    {id:1, brand: "vv Phone", price: 5000 },
];


function matchProducts(products, search){

    let phone =[];
    for(const product of products){
        // const brand = product.brand.toLowerCase();
        // console.log(product);
        if(product.brand.toLowerCase().includes(search.toLowerCase() ) ){
            phone.push(product);

        
    }
}
    return phone;

}

console.log(matchProducts(products, 'phone'));








