function product(a,b){
    return a * b;
}
console.log(product(5,10));
//returned 50
 function lan(){
    let a ='HTML',b='CSS',c='JS';
    return {
        a,b,c
    };
 }
 let {a,b,c} = lan();
 console.log(a);
 console.log(b);
 console.log(c);