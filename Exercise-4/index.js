
//1. Promise
let helloworld = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});

async function massages(){
    const msg = await helloworld;
    console.log(msg);
}

massages();

//2. Fetch
function ambildataUser(){
    fetch("https://reqres.in/api/users")
    .then(function(response){
        return response.json();
    })
    .then(function (users){
        console.log(users.data);
        
    });
}
console.log(ambildataUser());

//3. Async/ Await
async function ambildataUser(){
    await fetch("https://reqres.in//api/users")
    .then(function (response){
        return response.json();
    })
        .then(function(users){
            console.log(users.data);
        });
    }
console.log(ambildataUser());

//4. Axios
axios.get("https://reqres.in/api/users.json") 
.then(response => (this.info = response.ambildataUser));