
const dailyInterest = (principal) => {
    const interestRate = 0.1;
    const dailyInterestRate = interestRate / 360;

    return principal * dailyInterestRate;
};

/**
 * @description Calculates the total daily interest over the speciified period of time.
 * @param {Number} principal The base and incremental sum.
 * @param {Number} investmentInterval The interval at which the investor will renew his investments.
 * @param {Number} period The time for which the account owner is stipulating for.
 * @returns {Number} The total daily interest
 */
const calculateTotalInterest = (principal, investmentInterval, period) => {
    let cumulativeInvestment = principal;
    let totalInterest = 0;
    let interval = investmentInterval;

    for (let dayIndex = 1; dayIndex <= period; dayIndex++) {
        if (dayIndex === interval + 1) {
            cumulativeInvestment += principal;
            interval += investmentInterval;
        }

        totalInterest += dailyInterest(cumulativeInvestment);
    }

    return totalInterest;
};

const piggyvestDailyInterestResult = () => {
    const principal = Number(
        document.querySelector(".piggyvest-daily-interest input.principal")
            .value
    );
    const interval = Number(
        document.querySelector(".piggyvest-daily-interest input.interval").value
    );
    const period = Number(
        document.querySelector(".piggyvest-daily-interest input.period").value
    );

    document.querySelector(
        ".piggyvest-daily-interest p.result"
    ).innerText = `#${calculateTotalInterest(principal, interval, period)}`;
};

(() => {
    const principalInput = document.querySelector(
        ".piggyvest-daily-interest input.principal"
    );
    const intervalInput = document.querySelector(
        ".piggyvest-daily-interest input.interval"
    );
    const periodInput = document.querySelector(
        ".piggyvest-daily-interest input.period"
    );
    const button = document.querySelector("button.piggyvest-daily-interest");

    const principalValue = Number(principalInput.value);
    const intervalValue = Number(intervalInput.value);
    const periodValue = Number(periodInput.value);

    intervalInput.addEventListener("change", () => {
        if (principalValue >= 0 && intervalValue >= 0 && periodValue >= 0) {
            button.removeAttribute("disabled");
        }
    });
})();
