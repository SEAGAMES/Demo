console.log('ok ---- app.js') ;

var userName = 'SEAGAMES' ;

//== . == , != , !=== , <= , >= , < , >
if (userName === 'admin') {
    document.write('<p>คุณคือ Admin</p>') ;
} 
else if (userName === 'user') {
    document.write('<p>คุณคือ user</p>')
}
else {
    document.write(userName + '<p>คุณคือผู้ใช้ทั่วไป</p>')
}