document.querySelector("#submit-btn").addEventListener('click', function () {
    const textAriea = document.getElementById("text-area");
    const aresVlue = textAriea.value;
    const p = document.createElement("p");
    p.innerText = aresVlue;
    textAriea.value = "";

    const container = document.querySelector("#review");
    container.appendChild(p);
});

// Enter Button press

document.getElementById("text-area").addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        const textAriea = document.getElementById("text-area");
        const aresVlue = textAriea.value;
        const p = document.createElement("p");
        p.innerText = aresVlue;
        textAriea.value = "";

        const container = document.querySelector("#review");
        container.appendChild(p);
    }
});