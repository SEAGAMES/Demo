var randomNumber = Math.floor(Math.random() * 10) + 1 ;
 
console.log(randomNumber) ;

var input = prompt('ทายดู 1-10') ;

if (parseInt(input) === randomNumber) {
    document.write('คุณทายถูก') ;
}

else {
    document.write('ผิด') ;
}