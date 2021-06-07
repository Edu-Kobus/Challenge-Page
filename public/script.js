// ===  MANIPULANDO A DOM ====

const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector(".modal");

for (let card of cards) {
    card.addEventListener("click", function(){
        const blogId = card.getAttribute("id");
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${blogId}`;
        modalOverlay.classList.add('active');
    })
}


//instrução para encerrar o conteúdo do modal ao fechar no botão 'close' "X"
document.querySelector(".close-modal").addEventListener("click",
function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = ""
});

//maximize modal
document.querySelector(".maximize-modal").addEventListener("click",
function(){
    if(modal.classList.contains("open_in_full")){
        modal.classList.remove("open_in_full");
    } else {
    modal.classList.add("open_in_full");
    }
});