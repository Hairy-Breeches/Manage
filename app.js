let hamMenuButton = document.getElementById("menu-btn");
let hamMenu = document.getElementById("menu");


hamMenuButton.addEventListener("click",function() {
    hamMenuButton.classList.toggle('open');
    hamMenu.classList.toggle('hidden');
    hamMenu.classList.toggle('flex');
})

// console.log(hamMenuButton.classList.values);
// hamMenuButton.addEventListener("click",function() {
//     if()
//     hamMenuButton.classList.add('open');
//     hamMenu.classList.remove('hidden')
// })