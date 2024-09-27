const sumInput = document.getElementById("total");
const computeButton = document.getElementById("computeButton");

sumInput.addEventListener("input", () => {
    sumInput.style.color = "black";
});

computeButton.addEventListener("click", () => {
    let totalToPay = 0;
    let tipValue = 0;
    const sumValue = parseFloat(sumInput.value);

    const receiptTotalText = document.getElementById("receipt-total");
    const tipTotalText = document.getElementById("tip-total");
    const totalToPayText = document.getElementById("total-to-pay");

    sumInput.style.color = "black";
    if (isNaN(sumValue) || sumValue < 0) {
        sumInput.value = "Introduce a number >0"
        sumInput.style.color = "red";
        receiptTotalText.textContent = ``;
        tipTotalText.textContent = ``;
        totalToPayText.textContent = ``
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
