// Cria o botão dinamicamente via JavaScript
const btnTopo = document.createElement("button");
btnTopo.innerHTML = "↑";
btnTopo.id = "btnVoltarAoTopo";
document.body.appendChild(btnTopo);

// Estiliza o botão com JavaScript
Object.assign(btnTopo.style, {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "45px",
    height: "45px",
    backgroundColor: "var(--cor-secundaria, #635bff)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    fontSize: "20px",
    cursor: "pointer",
    display: "none",
    zIndex: "999",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "background-color 0.3s"
});

// Mostra ou esconde o botão dependendo do scroll
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

// Ação de rolar suavemente para o topo ao clicar
btnTopo.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});