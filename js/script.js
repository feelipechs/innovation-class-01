document.getElementById("formBusca").addEventListener("submit", function (e) {
    e.preventDefault();

    const termo = document.getElementById("campoBusca").value.trim();
    const resultado = document.getElementById("resultadoBusca");

    if (termo) {
        resultado.textContent = `Você buscou por: '${termo}'`;
    } else {
        resultado.textContent = "";
    }
});

// --

const navItems = [
    {
        name: "Departamento",
        lists: [
            Array(1).fill("Departamento"),
            Array(8).fill("Categoria"),
            Array(8).fill("Categoria"),
            Array(8).fill("Categoria"),
        ],
    },
];

const menuContainers = document.querySelectorAll(".dropdown-menu-target");

menuContainers.forEach((container) => {
    navItems.forEach((item) => {
        const menuItem = createDropdownMenu(item);
        container.appendChild(menuItem);
    });
});

function createDropdownMenu(item) {
    const li = document.createElement("li");
    li.classList.add("nav-item", "dropdown");

    const link = document.createElement("a");
    link.classList.add("nav-link", "dropdown-toggle");
    link.setAttribute("href", "#");
    link.setAttribute("id", "navbarDropdown");
    link.setAttribute("role", "button");
    link.setAttribute("data-bs-toggle", "dropdown");
    link.setAttribute("aria-expanded", "false");
    link.textContent = item.name;

    const ul = document.createElement("ul");
    ul.classList.add("dropdown-menu");
    ul.setAttribute("aria-labelledby", "navbarDropdown");

    const div = document.createElement("div");
    div.classList.add("d-flex");

    const departmentDiv = document.createElement("div");
    departmentDiv.classList.add("me-4");
    item.lists[0].forEach((subItem) => {
        const liSub = document.createElement("li");
        const linkSub = document.createElement("a");
        linkSub.classList.add("dropdown-item");
        linkSub.setAttribute("href", "#");
        linkSub.textContent = subItem;
        liSub.appendChild(linkSub);
        departmentDiv.appendChild(liSub);
    });

    div.appendChild(departmentDiv);

    const divider = document.createElement("div");
    divider.classList.add("vr", "mx-2");
    div.appendChild(divider);

    item.lists.slice(1).forEach((list) => {
        const categoryDiv = document.createElement("div");
        list.forEach((subItem) => {
            const liSub = document.createElement("li");
            const linkSub = document.createElement("a");
            linkSub.classList.add("dropdown-item");
            linkSub.setAttribute("href", "#");
            linkSub.textContent = subItem;
            liSub.appendChild(linkSub);
            categoryDiv.appendChild(liSub);
        });
        div.appendChild(categoryDiv);
    });

    ul.appendChild(div);
    li.appendChild(link);
    li.appendChild(ul);

    return li;
}

// --

function gerarCarrossel(idBase) {
    const totalSlides = 3;
    const cardsPerSlide = 5;
    const carouselContent = document.getElementById(`carouselContent${idBase}`);
    const carouselIndicators = document.getElementById(
        `carouselIndicators${idBase}`
    );

    for (let slide = 0; slide < totalSlides; slide++) {
        const item = document.createElement("div");
        item.className = `carousel-item ${slide === 0 ? "active" : ""}`;

        const row = document.createElement("div");
        row.className =
            "row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3";

        for (let card = 0; card < cardsPerSlide; card++) {
            const col = document.createElement("div");
            col.className = "col";
            col.innerHTML = `
        <div class="card">
        <div class="card-body">
            <h5 class="card-title text-light rounded p-1">Novo</h5>
            <img src="assets/images/imgProduct.png" class="d-block w-100 img-fluid" alt="...">
            <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
            <div class="d-flex">
            <p>
                <span class="valor">R$100,00</span><br>
                <strong>R$79,90</strong><br>
                Ou em até <strong>10x de R$7,90</strong>
            </p>
            <p><span class="off10 p-1">10%OFF</span></p>
            </div>
            <a href="#" class="btn btn-primary w-100">Comprar</a>
        </div>
        </div>
    `;
            row.appendChild(col);
        }

        item.appendChild(row);
        carouselContent.appendChild(item);

        const indicator = document.createElement("button");
        indicator.type = "button";
        indicator.setAttribute("data-bs-target", `#carouselExample${idBase}`);
        indicator.setAttribute("data-bs-slide-to", slide);
        indicator.className = `${slide === 0 ? "active bg-dark" : "bg-dark"}`;
        indicator.setAttribute("aria-label", `Slide ${slide + 1}`);
        if (slide === 0) indicator.setAttribute("aria-current", "true");
        carouselIndicators.appendChild(indicator);
    }
}

// Primeiro carrossel
gerarCarrossel("");

// Segundo carrossel
gerarCarrossel("2");
