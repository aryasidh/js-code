// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// let myCreateDate = new Date(2023, 0, 23)  //js me month 0 se start hoti hai agar single digit me daloge to
// let myCreateDate = new Date("2023, 01, 23")
let myCreateDate = new Date("2023-01-23")  //jb 2-digit and double qutes me likhoge to 1 se start hogi
// console.log(myCreateDate.toLocaleString());

let mytimeStamp = Date.now()  //Date.now() gives time count in milliseconds from 1 jan 1970
// console.log(mytimeStamp)
// console.log(myCreateDate)
// console.log(Date.now()/1000);  //1770263129.759
// console.log(Math.floor(Date.now()/1000));  //1770263129

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);  //1 ko es liye add kiya hu kuki js me month to zero se start hota hai na agar add nhi krungaa to user confused ho jayegaa
// console.log(newDate.getDay())  //sun-0, mon-1, tue-2, wed-3, thus-4, fri-5, sat-6

newDate.toLocaleString('default', {
    weekday: "long",
})




