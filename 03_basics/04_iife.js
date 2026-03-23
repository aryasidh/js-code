//(IIFE) intermediate invoked function expressions.

//unnamed IIFE
(function() {
    let secretcode = "12345";
    console.log(secretcode);
}) ();

//named IIFE
(function sumTwo(n1, n2){
    console.log(n1+n2);
})(4, 5);

//arrow IIFE
( () => {
    console.log(`arrow iife`);
})();

//arrow iife using aarguments
((name) =>{
    console.log(name);
})("arrow iife using aarguments");

//note-1:- agar aap ek IIFE likhte hai and semi column nhi lagate hai to bhi chalegaa
//note-2:- agar aap do IIFe likhte hai to first iife ke baad semi column lagana necessary hai second optional kyuki dono code mix ho skti hai fr typeerror aayegi.
//conclusions:- both are not good practice

//senior developer:- iife start hone se pahle hi semi column dete hai and end me bhi de dete hai 
;(function() {
    console.log(`semi column before and after IIFE is good practice`)
})();

