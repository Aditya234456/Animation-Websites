const price1 = document.querySelector(".price1");
const price2 = document.querySelector(".price2");
console.log("hello");
price2.addEventListener("mouseover", function(){
    price1.classList.add("highlight")
});
    price2.addEventListener("mouseout", function(){
    price1.classList.remove("highlight")
});
price1.addEventListener("mouseover", function(){
    price2.classList.add("highlight")
});
    price1.addEventListener("mouseout", function(){
    price2.classList.remove("highlight")
});
const btn1 = document.querySelector(".b1");
const btn2 = document.querySelector(".b2");
const btn3 = document.querySelector(".b3");
const btn4 = document.querySelector(".b4");
const con2 = document.querySelector(".container2");
const con3 = document.querySelector(".container3");
const con4 = document.querySelector(".contact");
const con1 = document.querySelector(".navbar");
btn1.addEventListener("click", () => {
    con1.scrollIntoView({ behavior: "smooth" });
});
btn2.addEventListener("click", () => {
    con2.scrollIntoView({ behavior: "smooth" });
});
btn3.addEventListener("click", () => {
    con3.scrollIntoView({ behavior: "smooth" });
});
btn4.addEventListener("click", () => {
    con4.scrollIntoView({ behavior: "smooth" });
});
