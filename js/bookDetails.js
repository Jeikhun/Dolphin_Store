 
let burgerMenuList= document.querySelector(".burger-menu-list")
let burgerIcon = document.querySelector(".burger-icon");
let burgerCloseBtn = document.querySelector(".burger-close-btn");
burgerIcon.addEventListener("click", ()=>{
    
    burgerMenuList.style.left="0px"

})
document.s
burgerCloseBtn.addEventListener("click", ()=>{
    
    burgerMenuList.style.left="-600px"
    
})

let personIcon = document.querySelector(".bi-person");
let clientInfo = document.querySelector(".client-info");
personIcon.addEventListener("click", ()=>{
    if(clientInfo.style.display == "initial"){
        
        clientInfo.style.display = "none";
    }else{

        clientInfo.style.display = "initial";
    }
})