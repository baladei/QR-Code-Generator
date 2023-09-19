const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-main button");
const qrCodeInput = document.querySelector("#qr-main input")
const qrCodeImg = document.querySelector("#qr-code img")

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value

    if (!qrCodeBtn) return;
    
    qrCodeBtn.innerText = "Gerando código..."
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active")
        qrCodeBtn.innerText = "Código Criado"
    });
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        generateQrCode();
    }
});

qrCodeInput.addEventListener("keyup", () => {
    container.classList.remove("active")
    qrCodeBtn.innerText = "Gerar QR Code"
})