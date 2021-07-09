var myName = 'Thanakhit' ;
var myName2 = 'Naruk' ;
var myName3 = 'Moss' ;
var myName4 = 'Arm' ;


var myName = ['Thanakhit' , 'Naruk' , 'Moss' , 'Arm' , 'Gong'] ;
var myAge = [25 , 5 , 24 , 18 , 60] ;
var myGrade = [] ;
myGrade.push(2.35 , 3.66 , 4.88 , 1.52 , 0.95 ) ;

/*document.write('ฉันชื่อ ' + myName[0] + 'อายุ ' + myAge[0] + ' ปี' , '<br>') ;
document.write(myName[0]) ;*/

console.log(myName.length)

for (var i = 0 ; i <= myName.length-1 ; i++) {
    document.write(myName[i] + ' อายุ ' + myAge[i] + ' ขวบ ' + 'เกรดเฉลี่ย ' + myGrade[i] , '<br>') ;
}

