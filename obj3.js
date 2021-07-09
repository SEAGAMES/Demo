var product = [
    {
        productName : 'Coke' ,
        productPrice : 30 
    },
    {
        productName : 'GreenTea' ,
        productPrice : 40 
    }
]

/*console.log(product[0].productName) ;
console.log(product[1].productName) ;*/

for (var i = 0 ; i < product.length ; i++) {
    console.log(product[i].productName) ;
    console.log(product[i].productPrice) ;
}