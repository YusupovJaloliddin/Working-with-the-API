document.addEventListener("DOMContentLoaded", () => {
  getBitcoinPrice();
});

// document.querySelector("button").addEventListener("click", () => {
//   //1. XMLHttpRequest ni hosil qilish
//   console.log("hi");
//   let xhr1 = new XMLHttpRequest();
//   //2. Event Handler
//   xhr1.onload = function () {
//     let obj = JSON.parse(this.responseText);
//     let inputt = document.querySelector("input");
//     console.log(obj);
//     let data = obj;
//     let text = document.querySelector("#rate");
//     if (inputt.value != undefined) {
//       text.innerHTML = `1 USD is valide ${data}`;
//     } else {
//       text.innerHTML = `Bunday birlik yo'q`;
//     }
//   };
//   // GET request;
//   xhr1.open("GET", "https://blockchain.info/q/24hrprice");
//   //yuborish kere
//   xhr1.send();
// });

function updateBitcoinPrice(newValue) {
  document.querySelector("#narxi").innerHTML = `${newValue} (USD)`;
  setTimeout(getBitcoinPrice, 60 * 10);
}

function getBitcoinPrice() {
  //1 Xhr obyekktini hosil qilishimiz kerak
  let xhr = new XMLHttpRequest();
  let url = "https://blockchain.info/q/24hrprice";
  //2.Event handler yozish kreak
  xhr.onload = function () {
    try {
      let data = this.responseText;
      document.querySelector("#narxi").innerHTML = `${data} (USD)`;
      updateBitcoinPrice(data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  //3. AJAX request hosil qilish kerak
  xhr.open("GET", url);
  //4. AJAX requestni web serga yuborish kerak
  xhr.send();
}
