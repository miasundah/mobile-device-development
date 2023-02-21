
// Asyncronous
//console.log("Baris 1");
//console.log("Baris 2");
//console.log("Baris 3");

//setTimeout (() => {
//console.log("Proses 1");
//}, 3000);
//setTimeout(() => {
  //  console.log("Proses 2");
//}, 5000);
   // console.log("Proses 3");

 //1. Parellel
 //setTimeout (() => {
//console.log("Proses 1");
//}, 3000);
//setTimeout(() => {
 //console.log("Proses 2");
//}, 5000);
 //console.log("Proses 3");

 //2. Concurent
 //setTimeout (() => {
  //  console.log("Proses 1");
//setTimeout (() => {
  //  console.log("Proses 2");
//setTimeout (() => {
  //  console.log("Proses 3");
//}, 5000)
//}, 5000)
 //}, 3000)

 // Promise
 //let condition = true;
 //let newPromise = new Promise((resolve, reject)
 //if(condition){
   // resolve("Berhasil");
 //} else{
   // reject("Gagal");
 //});
 
 // Cara 1:  then-catch
//newPromise
//.then((result) => console.log(result));
//.then((error) => console.log(error));

// Cara 2: async-await

//const getData = async () => {
 //  let output = await newPromise;
//console.log(output);
//};

//getData();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const getJSONPlaceholder = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await response.json();
  console.log(json);
};

getJSONPlaceholder();