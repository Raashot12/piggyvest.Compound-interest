/**
 *
 * @param {Number} regularInvestment The base and incremental sum
 * @param {Number} investmentInterval the interval at which the user renews his investment
 * @param {Number} period the specified time period in days being speculated
 */
const calculateInvestment = (regularInvestment, investmentInterval, period) => {
    let totalSumEarned = 0;
    const interestRate = 0.1;
    const dailyInterestRate = interestRate / 360;
    let cumulativeRenewalAmount = regularInvestment;
    let intervalCounter = 1;
    console.log("Amount \t Day \t Earning");

    for (let dayIndex = 1; dayIndex <= period; dayIndex++) {
        totalSumEarned += cumulativeRenewalAmount * dailyInterestRate;
        console.log(
            `${cumulativeRenewalAmount} \t ${dayIndex} \t ${totalSumEarned.toFixed(
                2
            )}`
        );

        if (investmentInterval === intervalCounter) {
            cumulativeRenewalAmount += regularInvestment;
            intervalCounter = 1;
        } else {
            intervalCounter++;
        }
    }

    return totalSumEarned;
};

console.log(calculateInvestment(1000, 30, 90));
