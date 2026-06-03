let open = document.getElementById("openbtn");
let close = document.getElementById("close");
let popup = document.getElementById("modal");

function aadd (){
    popup.classList.add("show");
} 

function closing(){
    popup.classList.remove("show");
}

    open.addEventListener("click", aadd);
    close.addEventListener("click", closing)
    popup.addEventListener("click", function(event){
        if(event.target === popup){
            closing();
        }
    })

    document.addEventListener("keydown", function(evernt){
        if(evernt.key === "Escape"){
            closing();
        }
    })


