const sumInput = document.getElementById("total");
const computeButton = document.getElementById("computeButton");
const resetButton = document.getElementById("resetButton");
const receiptTotalText = document.getElementById("receipt-total");
const tipTotalText = document.getElementById("tip-total");
const totalToPayText = document.getElementById("total-to-pay");
const defaultTipRadioButton = document.getElementById("tip0");

sumInput.addEventListener("keydown", (event) => {
    const alphabet = /[a-zA-Z]/;
    const specialCharacters = /[!@#$%^&*(),.?";:{}|<>[\]\\]/;
    if ((alphabet.test(event.key)) || event.key === '-' || specialCharacters.test(event.key) || event.key===' ') {
        event.preventDefault();
    }
});

computeButton.addEventListener("click", () => {
    let totalToPay = 0;
    let tipValue = 0;
    const sumValue = parseFloat(sumInput.value);
    if (isNaN(sumValue) || sumValue <= 0) {
        receiptTotalText.textContent = ``;
        tipTotalText.textContent = ``;
        totalToPayText.textContent = ``;
    } else {
        const tipList = document.querySelectorAll('input[name="tip"]');
        for (tip of tipList) {
            if (tip.checked) {
                if (tip.value === "custom") {
                    const customTipPercent = document.getElementById("percentage").value;
                    tipValue = (sumValue * parseFloat(customTipPercent)) / 100;
                    totalToPay = tipValue + sumValue;
                } else {
                    const tipPercent = parseFloat(tip.value);
                    tipValue = (sumValue * parseFloat(tipPercent)) / 100;
                    totalToPay = tipValue + sumValue;
                }
            }
        }
        receiptTotalText.textContent = `Order Total: ${sumValue}$`;
        tipTotalText.textContent = `Tip Total: ${tipValue}$`;
        totalToPayText.textContent = `Your Total To Pay: ${totalToPay}$`
    }
});


resetButton.addEventListener("click", () => {
    receiptTotalText.textContent = ``;
    tipTotalText.textContent = ``;
    totalToPayText.textContent = ``;
    sumInput.value = ``;
    defaultTipRadioButton.checked = true;
    document.getElementById("percentage").value = 1;
});