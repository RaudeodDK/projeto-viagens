const lista = document.querySelector(".lista-destinos")

const destinos =[
    {
    nome: "Paris",
    descricao: "100+ Tours",
    img: "./assets/img/img1.png"
    },

    {
    nome: "Singapore",
    descricao: "300+ Tours",
    img: "./assets/img/img2.png"
    },
    
    {
    nome: "Roma",
    descricao: "400+ Tours",
    img: "./assets/img/img3.png"
    },

    {
    nome: "Bangkok",
    descricao: "100+ Tours",
    img: "./assets/img/img4.png"
    },

    {
    nome: "Bail",
    descricao: "600+ Tours",
    img: "./assets/img/img5.png"
    },

    {
    nome: "Phuket",
    descricao: "200+ Tours",
    img: "./assets/img/img6.png"
    },

    {
    nome: "Tokyo",
    descricao: "700+ Tours",
    img: "./assets/img/img7.png"
    },

    {
    nome: "Cappadocia",
    descricao: "900+ Tours",
    img: "./assets/img/img8.png"
    },

]

function mostrarViagens(viagens) {
    lista.innerHTML = ""

    viagens.forEach(destino => {

        lista.innerHTML += `
        <div class="destinos">
                        <img class="img-destinos" src="${destino.img}" alt="">
                        <p class="titulo-qualidades">${destino.nome}</p>
                        <p class="texto-qualidades">${destino.descricao}</p>
                    </div>
        
        `
    })
}

mostrarViagens(destinos)
    

