function showData() {
    document.write('javaScript') ;
}


//showData() ;

function addNumber(number1 , number2) {
    var result = number1 + number2 ;
    document.write(result +'<br>') ;
}

addNumber(5,6) ; //argument 
addNumber(10,20) ;

function getMessage(msg) {
    return 'Hello ' + msg + '<br>';
}

document.write(getMessage('javaScript')) ;

var msg = getMessage('Java') ;
document.write(msg) ;

var showName = function() {
    document.write('Thanakhit') ;
}

showName() ;
