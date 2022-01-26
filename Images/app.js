


let linkCard = document.getElementById('linkCard')
let newBtn = document.getElementById('newd')
let inputBox = document.getElementById('inputBox')
let resetBtn = document.getElementById('resetBtn')

let select = document.getElementById('selected')

let exampleRadios1 = document.getElementById('exampleRadios1')
let exampleRadios2 = document.getElementById('exampleRadios2')
let exampleRadios3 = document.getElementById('exampleRadios3')

// linkCard.innerHTML="";



//   https://api.getping.info/AJHjZukM/hello

//     AJHjZukM
// console.log(
// fetch("https://api.getping.info/QvpXmD/notify"));
// getNew();
newBtn.onclick = function () {
    getNew();
}

function getNew() {

let country = select.options[select.selectedIndex].value;
console.log(country);

    fetch(
        `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`
    )
        .then((res) => {
            // console.log(data);
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        })
        .then((data) => {

            let pp = data.All;
            let ht = `
            <table class="table table-success myTable">
    <thead>
        <tr>
            <th scope="col">Entity</th>
            <th scope="col">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td  class=" cells table-info">country</td>
            <td  class=" cells table-info">${pp.country}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">confirmed</td>
            <td  class=" cells table-warning">${pp.confirmed}</td>
        </tr>

        <tr>
            <td  class=" cells table-danger">deaths</td>
            <td  class=" cells table-danger">${pp.deaths}</td>
        </tr>

       
        <tr>
            <td  class=" cells table-primary">life_expectancy</td>
            <td  class=" cells table-primary">${pp.life_expectancy}</td>
        </tr>

        <tr>
            <td  class=" cells table-secondary">population</td>
            <td  class=" cells table-secondary">${pp.population}</td>
        </tr>
        <tr>
            <td  class=" cells table-info">location</td>
            <td  class=" cells table-info">${pp.location}</td>
        </tr>
        <tr>
            <td  class=" cells table-danger">continent</td>
            <td  class=" cells table-danger">${pp.continent}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">capital_city</td>
            <td  class=" cells table-warning">${pp.capital_city}</td>
        </tr>

        <tr>
            <td  class=" cells table-info">sq_km_area</td>
            <td  class=" cells table-info">${pp.sq_km_area}</td>
        </tr>

        <tr>
            <td  class=" cells table-success">updated</td>
            <td  class=" cells table-success">${pp.updated}</td>
        </tr>

       
    </tbody>
</table>
            `
            linkCard.innerHTML = ht;
    
            // console.log(data);

        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'I have No data about this country!',
                footer: '<a href="">Please try another one</a>'
              })
            console.log("Opppssss");

        });

}






let linkCard = document.getElementById('linkCard')
let newBtn = document.getElementById('newd')
let inputBox = document.getElementById('inputBox')
let resetBtn = document.getElementById('resetBtn')

let select = document.getElementById('selected')

let exampleRadios1 = document.getElementById('exampleRadios1')
let exampleRadios2 = document.getElementById('exampleRadios2')
let exampleRadios3 = document.getElementById('exampleRadios3')

// linkCard.innerHTML="";



//   https://api.getping.info/AJHjZukM/hello

//     AJHjZukM
// console.log(
// fetch("https://api.getping.info/QvpXmD/notify"));
// getNew();
newBtn.onclick = function () {
    getNew();
}

function getNew() {

let country = select.options[select.selectedIndex].value;
console.log(country);

    fetch(
        `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`
    )
        .then((res) => {
            // console.log(data);
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        })
        .then((data) => {

            let pp = data.All;
            let ht = `
            <table class="table table-success myTable">
    <thead>
        <tr>
            <th scope="col">Entity</th>
            <th scope="col">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td  class=" cells table-info">country</td>
            <td  class=" cells table-info">${pp.country}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">confirmed</td>
            <td  class=" cells table-warning">${pp.confirmed}</td>
        </tr>

        <tr>
            <td  class=" cells table-danger">deaths</td>
            <td  class=" cells table-danger">${pp.deaths}</td>
        </tr>

       
        <tr>
            <td  class=" cells table-primary">life_expectancy</td>
            <td  class=" cells table-primary">${pp.life_expectancy}</td>
        </tr>

        <tr>
            <td  class=" cells table-secondary">population</td>
            <td  class=" cells table-secondary">${pp.population}</td>
        </tr>
        <tr>
            <td  class=" cells table-info">location</td>
            <td  class=" cells table-info">${pp.location}</td>
        </tr>
        <tr>
            <td  class=" cells table-danger">continent</td>
            <td  class=" cells table-danger">${pp.continent}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">capital_city</td>
            <td  class=" cells table-warning">${pp.capital_city}</td>
        </tr>

        <tr>
            <td  class=" cells table-info">sq_km_area</td>
            <td  class=" cells table-info">${pp.sq_km_area}</td>
        </tr>

        <tr>
            <td  class=" cells table-success">updated</td>
            <td  class=" cells table-success">${pp.updated}</td>
        </tr>

       
    </tbody>
</table>
            `
            linkCard.innerHTML = ht;
    
            // console.log(data);

        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'I have No data about this country!',
                footer: '<a href="">Please try another one</a>'
              })
            console.log("Opppssss");

        });

}







let linkCard = document.getElementById('linkCard')
let newBtn = document.getElementById('newd')
let inputBox = document.getElementById('inputBox')
let resetBtn = document.getElementById('resetBtn')

let select = document.getElementById('selected')

let exampleRadios1 = document.getElementById('exampleRadios1')
let exampleRadios2 = document.getElementById('exampleRadios2')
let exampleRadios3 = document.getElementById('exampleRadios3')

// linkCard.innerHTML="";



//   https://api.getping.info/AJHjZukM/hello

//     AJHjZukM
// console.log(
// fetch("https://api.getping.info/QvpXmD/notify"));
// getNew();
newBtn.onclick = function () {
    getNew();
}

function getNew() {

let country = select.options[select.selectedIndex].value;
console.log(country);

    fetch(
        `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`
    )
        .then((res) => {
            // console.log(data);
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        })
        .then((data) => {

            let pp = data.All;
            let ht = `
            <table class="table table-success myTable">
    <thead>
        <tr>
            <th scope="col">Entity</th>
            <th scope="col">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td  class=" cells table-info">country</td>
            <td  class=" cells table-info">${pp.country}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">confirmed</td>
            <td  class=" cells table-warning">${pp.confirmed}</td>
        </tr>

        <tr>
            <td  class=" cells table-danger">deaths</td>
            <td  class=" cells table-danger">${pp.deaths}</td>
        </tr>

       
        <tr>
            <td  class=" cells table-primary">life_expectancy</td>
            <td  class=" cells table-primary">${pp.life_expectancy}</td>
        </tr>

        <tr>
            <td  class=" cells table-secondary">population</td>
            <td  class=" cells table-secondary">${pp.population}</td>
        </tr>
        <tr>
            <td  class=" cells table-info">location</td>
            <td  class=" cells table-info">${pp.location}</td>
        </tr>
        <tr>
            <td  class=" cells table-danger">continent</td>
            <td  class=" cells table-danger">${pp.continent}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">capital_city</td>
            <td  class=" cells table-warning">${pp.capital_city}</td>
        </tr>

        <tr>
            <td  class=" cells table-info">sq_km_area</td>
            <td  class=" cells table-info">${pp.sq_km_area}</td>
        </tr>

        <tr>
            <td  class=" cells table-success">updated</td>
            <td  class=" cells table-success">${pp.updated}</td>
        </tr>

       
    </tbody>
</table>
            `
            linkCard.innerHTML = ht;
    
            // console.log(data);

        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'I have No data about this country!',
                footer: '<a href="">Please try another one</a>'
              })
            console.log("Opppssss");

        });

}







let linkCard = document.getElementById('linkCard')
let newBtn = document.getElementById('newd')
let inputBox = document.getElementById('inputBox')
let resetBtn = document.getElementById('resetBtn')

let select = document.getElementById('selected')

let exampleRadios1 = document.getElementById('exampleRadios1')
let exampleRadios2 = document.getElementById('exampleRadios2')
let exampleRadios3 = document.getElementById('exampleRadios3')

// linkCard.innerHTML="";



//   https://api.getping.info/AJHjZukM/hello

//     AJHjZukM
// console.log(
// fetch("https://api.getping.info/QvpXmD/notify"));
// getNew();
newBtn.onclick = function () {
    getNew();
}

function getNew() {

let country = select.options[select.selectedIndex].value;
console.log(country);

    fetch(
        `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`
    )
        .then((res) => {
            // console.log(data);
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        })
        .then((data) => {

            let pp = data.All;
            let ht = `
            <table class="table table-success myTable">
    <thead>
        <tr>
            <th scope="col">Entity</th>
            <th scope="col">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td  class=" cells table-info">country</td>
            <td  class=" cells table-info">${pp.country}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">confirmed</td>
            <td  class=" cells table-warning">${pp.confirmed}</td>
        </tr>

        <tr>
            <td  class=" cells table-danger">deaths</td>
            <td  class=" cells table-danger">${pp.deaths}</td>
        </tr>

       
        <tr>
            <td  class=" cells table-primary">life_expectancy</td>
            <td  class=" cells table-primary">${pp.life_expectancy}</td>
        </tr>

        <tr>
            <td  class=" cells table-secondary">population</td>
            <td  class=" cells table-secondary">${pp.population}</td>
        </tr>
        <tr>
            <td  class=" cells table-info">location</td>
            <td  class=" cells table-info">${pp.location}</td>
        </tr>
        <tr>
            <td  class=" cells table-danger">continent</td>
            <td  class=" cells table-danger">${pp.continent}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">capital_city</td>
            <td  class=" cells table-warning">${pp.capital_city}</td>
        </tr>

        <tr>
            <td  class=" cells table-info">sq_km_area</td>
            <td  class=" cells table-info">${pp.sq_km_area}</td>
        </tr>

        <tr>
            <td  class=" cells table-success">updated</td>
            <td  class=" cells table-success">${pp.updated}</td>
        </tr>

       
    </tbody>
</table>
            `
            linkCard.innerHTML = ht;
    
            // console.log(data);

        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'I have No data about this country!',
                footer: '<a href="">Please try another one</a>'
              })
            console.log("Opppssss");

        });

}






let linkCard = document.getElementById('linkCard')
let newBtn = document.getElementById('newd')
let inputBox = document.getElementById('inputBox')
let resetBtn = document.getElementById('resetBtn')

let select = document.getElementById('selected')

let exampleRadios1 = document.getElementById('exampleRadios1')
let exampleRadios2 = document.getElementById('exampleRadios2')
let exampleRadios3 = document.getElementById('exampleRadios3')

// linkCard.innerHTML="";



//   https://api.getping.info/AJHjZukM/hello

//     AJHjZukM
// console.log(
// fetch("https://api.getping.info/QvpXmD/notify"));
// getNew();
newBtn.onclick = function () {
    getNew();
}

function getNew() {

let country = select.options[select.selectedIndex].value;
console.log(country);

    fetch(
        `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`
    )
        .then((res) => {
            // console.log(data);
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        })
        .then((data) => {

            let pp = data.All;
            let ht = `
            <table class="table table-success myTable">
    <thead>
        <tr>
            <th scope="col">Entity</th>
            <th scope="col">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td  class=" cells table-info">country</td>
            <td  class=" cells table-info">${pp.country}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">confirmed</td>
            <td  class=" cells table-warning">${pp.confirmed}</td>
        </tr>

        <tr>
            <td  class=" cells table-danger">deaths</td>
            <td  class=" cells table-danger">${pp.deaths}</td>
        </tr>

       
        <tr>
            <td  class=" cells table-primary">life_expectancy</td>
            <td  class=" cells table-primary">${pp.life_expectancy}</td>
        </tr>

        <tr>
            <td  class=" cells table-secondary">population</td>
            <td  class=" cells table-secondary">${pp.population}</td>
        </tr>
        <tr>
            <td  class=" cells table-info">location</td>
            <td  class=" cells table-info">${pp.location}</td>
        </tr>
        <tr>
            <td  class=" cells table-danger">continent</td>
            <td  class=" cells table-danger">${pp.continent}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">capital_city</td>
            <td  class=" cells table-warning">${pp.capital_city}</td>
        </tr>

        <tr>
            <td  class=" cells table-info">sq_km_area</td>
            <td  class=" cells table-info">${pp.sq_km_area}</td>
        </tr>

        <tr>
            <td  class=" cells table-success">updated</td>
            <td  class=" cells table-success">${pp.updated}</td>
        </tr>

       
    </tbody>
</table>
            `
            linkCard.innerHTML = ht;
    
            // console.log(data);

        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'I have No data about this country!',
                footer: '<a href="">Please try another one</a>'
              })
            console.log("Opppssss");

        });

}





let linkCard = document.getElementById('linkCard')
let newBtn = document.getElementById('newd')
let inputBox = document.getElementById('inputBox')
let resetBtn = document.getElementById('resetBtn')

let select = document.getElementById('selected')

let exampleRadios1 = document.getElementById('exampleRadios1')
let exampleRadios2 = document.getElementById('exampleRadios2')
let exampleRadios3 = document.getElementById('exampleRadios3')

// linkCard.innerHTML="";



//   https://api.getping.info/AJHjZukM/hello

//     AJHjZukM
// console.log(
// fetch("https://api.getping.info/QvpXmD/notify"));
// getNew();
newBtn.onclick = function () {
    getNew();
}

function getNew() {

let country = select.options[select.selectedIndex].value;
console.log(country);

    fetch(
        `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`
    )
        .then((res) => {
            // console.log(data);
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        })
        .then((data) => {

            let pp = data.All;
            let ht = `
            <table class="table table-success myTable">
    <thead>
        <tr>
            <th scope="col">Entity</th>
            <th scope="col">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td  class=" cells table-info">country</td>
            <td  class=" cells table-info">${pp.country}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">confirmed</td>
            <td  class=" cells table-warning">${pp.confirmed}</td>
        </tr>

        <tr>
            <td  class=" cells table-danger">deaths</td>
            <td  class=" cells table-danger">${pp.deaths}</td>
        </tr>

       
        <tr>
            <td  class=" cells table-primary">life_expectancy</td>
            <td  class=" cells table-primary">${pp.life_expectancy}</td>
        </tr>

        <tr>
            <td  class=" cells table-secondary">population</td>
            <td  class=" cells table-secondary">${pp.population}</td>
        </tr>
        <tr>
            <td  class=" cells table-info">location</td>
            <td  class=" cells table-info">${pp.location}</td>
        </tr>
        <tr>
            <td  class=" cells table-danger">continent</td>
            <td  class=" cells table-danger">${pp.continent}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">capital_city</td>
            <td  class=" cells table-warning">${pp.capital_city}</td>
        </tr>

        <tr>
            <td  class=" cells table-info">sq_km_area</td>
            <td  class=" cells table-info">${pp.sq_km_area}</td>
        </tr>

        <tr>
            <td  class=" cells table-success">updated</td>
            <td  class=" cells table-success">${pp.updated}</td>
        </tr>

       
    </tbody>
</table>
            `
            linkCard.innerHTML = ht;
    
            // console.log(data);

        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'I have No data about this country!',
                footer: '<a href="">Please try another one</a>'
              })
            console.log("Opppssss");

        });

}





let linkCard = document.getElementById('linkCard')
let newBtn = document.getElementById('newd')
let inputBox = document.getElementById('inputBox')
let resetBtn = document.getElementById('resetBtn')

let select = document.getElementById('selected')

let exampleRadios1 = document.getElementById('exampleRadios1')
let exampleRadios2 = document.getElementById('exampleRadios2')
let exampleRadios3 = document.getElementById('exampleRadios3')

// linkCard.innerHTML="";



//   https://api.getping.info/AJHjZukM/hello

//     AJHjZukM
// console.log(
// fetch("https://api.getping.info/QvpXmD/notify"));
// getNew();
newBtn.onclick = function () {
    getNew();
}

function getNew() {

let country = select.options[select.selectedIndex].value;
console.log(country);

    fetch(
        `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`
    )
        .then((res) => {
            // console.log(data);
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        })
        .then((data) => {

            let pp = data.All;
            let ht = `
            <table class="table table-success myTable">
    <thead>
        <tr>
            <th scope="col">Entity</th>
            <th scope="col">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td  class=" cells table-info">country</td>
            <td  class=" cells table-info">${pp.country}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">confirmed</td>
            <td  class=" cells table-warning">${pp.confirmed}</td>
        </tr>

        <tr>
            <td  class=" cells table-danger">deaths</td>
            <td  class=" cells table-danger">${pp.deaths}</td>
        </tr>

       
        <tr>
            <td  class=" cells table-primary">life_expectancy</td>
            <td  class=" cells table-primary">${pp.life_expectancy}</td>
        </tr>

        <tr>
            <td  class=" cells table-secondary">population</td>
            <td  class=" cells table-secondary">${pp.population}</td>
        </tr>
        <tr>
            <td  class=" cells table-info">location</td>
            <td  class=" cells table-info">${pp.location}</td>
        </tr>
        <tr>
            <td  class=" cells table-danger">continent</td>
            <td  class=" cells table-danger">${pp.continent}</td>
        </tr>
        <tr>
            <td  class=" cells table-warning">capital_city</td>
            <td  class=" cells table-warning">${pp.capital_city}</td>
        </tr>

        <tr>
            <td  class=" cells table-info">sq_km_area</td>
            <td  class=" cells table-info">${pp.sq_km_area}</td>
        </tr>

        <tr>
            <td  class=" cells table-success">updated</td>
            <td  class=" cells table-success">${pp.updated}</td>
        </tr>

       
    </tbody>
</table>
            `
            linkCard.innerHTML = ht;
    
            // console.log(data);

        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'I have No data about this country!',
                footer: '<a href="">Please try another one</a>'
              })
            console.log("Opppssss");

        });

}