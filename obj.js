var programmer = {
    fullname : 'Thankhit Nimnual' ,
    age : 25 ,
    skills : ['html' , 'css' , 'python'] ,
    showData : function() {
        return 'My Name is ' + this.fullname
    }
}

/*console.log(programmer.fullname) ;
console.log(programmer.age) ;
console.log(programmer.skills) ;*/

programmer.fullname = 'Moss' ;
programmer.age = 30 ;
programmer.skills.push('php') ;

/*console.log(programmer.fullname) ;
console.log(programmer.age) ;
console.log(programmer.skills) ;

console.log(programmer.showData()) ;*/

for (var prop in programmer) {
    console.log(prop) ;
}
for (var prop in programmer) {
    console.log(programmer[prop]) ;
}
