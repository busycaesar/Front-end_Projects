/* eslint-disable no-unused-vars */
/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       DEV JIGISHKUMAR SHAH
 *      Student ID: 131623217
 *      Date:       16 / 07 / 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

window.onload = () => {
  // VARIABLE DECLARATION.
  let x = document.getElementById("menu");
  let i = 0;
  categories.forEach(() => {
    // VARIABLE DECLARATION
    let temp = categories[i].name;
    let button = document.createElement("button");
    button.setAttribute("id", "btn" + i);
    button.setAttribute("onclick", "clk(id);");
    button.innerHTML = temp;
    x.appendChild(button);
    i++;
  });
};

function clk(id) {
  // VARIABLE DECLARATION
  let button = document.getElementById(id),
    name,
    prod,
    title = document.getElementById("selected-category"),
    table = document.getElementById("category-products");
  if (button.innerHTML == categories[0].name) {
    name = categories[0].name;
    table.innerHTML = "";
    prod = products.filter(
      (element) => element.categories == categories[0].id && element.discontinued == false
    );
    prod.forEach(function (element) {
      // VARIABLE DECLARATION.
      let proTable = document.createElement("tr");
      let proTitle = document.createElement("td");
      let proDisc = document.createElement("td");
      let proPrice = document.createElement("td");
      proTable.setAttribute("onclick", "console.log(categories[0].name);");
      proTitle.innerHTML = element.title;
      proDisc.innerHTML = element.description;
      proPrice.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "CAD"
      }).format(element.price);
      proTable.appendChild(proTitle);
      proTable.appendChild(proDisc);
      proTable.appendChild(proPrice);
      table.appendChild(proTable);
    });
  } else if (button.innerHTML == categories[1].name) {
    name = categories[1].name;
    table.innerHTML = "";
    prod = products.filter(
      (element) => element.categories == categories[1].id && element.discontinued == false
    );
    prod.forEach(function (element) {
      // VARIABLE DECLARATION.
      let proTable = document.createElement("tr");
      let proTitle = document.createElement("td");
      let proDisc = document.createElement("td");
      let proPrice = document.createElement("td");
      proTable.setAttribute("onclick", "console.log(categories[1].name);");
      proTitle.innerHTML = element.title;
      proDisc.innerHTML = element.description;
      proPrice.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "CAD"
      }).format(element.price);
      proTable.appendChild(proTitle);
      proTable.appendChild(proDisc);
      proTable.appendChild(proPrice);
      table.appendChild(proTable);
    });
  } else {
    name = categories[2].name;
    table.innerHTML = "";
    prod = products.filter(
      (element) => element.categories == categories[2].id && element.discontinued == false
    );
    prod.forEach(function (element) {
      // VARIABLE DECLARATION.
      let proTable = document.createElement("tr");
      let proTitle = document.createElement("td");
      let proDisc = document.createElement("td");
      let proPrice = document.createElement("td");
      proTable.setAttribute("onclick", "console.log(categories[2].name);");
      proTitle.innerHTML = element.title;
      proDisc.innerHTML = element.description;
      proPrice.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "CAD"
      }).format(element.price);
      proTable.appendChild(proTitle);
      proTable.appendChild(proDisc);
      proTable.appendChild(proPrice);
      table.appendChild(proTable);
    });
  }
  title.innerText = name;
}

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
