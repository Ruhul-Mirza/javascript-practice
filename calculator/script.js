let screen = document.querySelector("input[type='text']");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear")
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        screen.value += button.value;
    })
});
equal.addEventListener("click",()=>{
    screen.value = eval(screen.value);
})
clear.addEventListener("click",()=>{
    screen.value="";
})