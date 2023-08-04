// array-like
// Array.prototype
// HTMLCollection

console.log("Object HTMLCollection---------------");

const inputs = document.getElementsByTagName("input");
console.log(inputs);
console.log("typeof inputs:", typeof inputs);
console.log("call inputs:", Array.prototype.toString.call(inputs));

// for (const input of inputs) {
//   console.log(input);
// }

// inputs.forEach((valor, elemento) => {
//   console.log(valor);
// });

console.log("============ Array.prototype.forEach.call ==============");

Array.prototype.forEach.call(inputs, (valor, elemento) => {
  console.log(valor);
});

console.log(
  "============ Array.prototype.reduce.call + arguments =============="
);

function somarValoresV1(a, b) {
  return a + b;
}

console.log("somarValoresV1(10, 10):", somarValoresV1(10, 10));

function somarValoresV2() {
  // console.log("typeof arguments:", typeof arguments);
  // console.log("call arguments:", Array.prototype.toString.call(arguments));
  return Array.prototype.reduce.call(arguments, (acc, cur, index) => {
    return acc + cur;
  });
}

console.log("somarValoresV2(10, 20, 30, 40):", somarValoresV2(10, 20, 30, 40));
console.log("somarValoresV2(5, 2, 3, 4):", somarValoresV2(5, 2, 3, 4));
console.log("somarValoresV2(5, 2, 3, 4):", somarValoresV2(5, 5));

// const body = document.querySelector("body");
// const log = document.getElementById("log");

// function checkDocumentFocus() {
//   if (document.hasFocus()) {
//     log.textContent = "This document has focus.";
//     body.style.background = "white";
//   } else {
//     log.textContent = "This document does not have focus.";
//     body.style.background = "gray";
//   }
// }

// function openWindow() {
//   window.open(
//     "https://developer.mozilla.org/",
//     "MDN",
//     "width=640,height=320,left=150,top=150"
//   );
// }

// document.getElementById("newWindow").addEventListener("click", openWindow);
// setInterval(checkDocumentFocus, 300);
