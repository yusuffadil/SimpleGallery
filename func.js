let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");
let slideIndex = 1;

function declaration(val) {
    slideIndex = val;
    modalImg.src = `https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(${val}).webp`;
    document.getElementById("modal-title").innerHTML = `Title Image ${val}`;
    document.getElementById(
        "modal-desc"
    ).innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, Description Image ${val} sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci. Arcu bibendum at varius vel pharetra vel turpis.`;
}

function showModal(src) {
    modal.classList.remove("hidden");
    declaration(src);
}

function closeModal() {
    modal.classList.add("hidden");
}

function prev() {
    if (slideIndex < 2) {
        declaration(11);
    } else {
        declaration((slideIndex -= 1));
    }
}

function next() {
    if (slideIndex > 10) {
        declaration(1);
    } else {
        declaration((slideIndex += 1));
    }
}
