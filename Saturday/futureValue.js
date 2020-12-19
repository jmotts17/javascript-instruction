// private static double calculateFutureValue(double monthlyInvestment, double monthlyInterestRate, int months) {
//     double futureValue = 0.0;
//     for (int i = 1; i <= months; i++) {
//         futureValue = (futureValue + monthlyInvestment) * (1 + monthlyInterestRate);
//     }

//     return futureValue;
// }

function calculateFutureValue(monthlyInvestment, interestRate, years) {
    let futureValue = 0.0;
    let months = years * 12;
    let monthlyInterestRate = interestRate / 12 / 100;

    for (let i = 1; i <= months; i++) {
        futureValue = (futureValue + monthlyInvestment) * (1 + monthlyInterestRate);
    }

    return futureValue.toFixed(2);
}

console.log(calculateFutureValue(100, .1, 12));
console.log(calculateFutureValue(100, .1, 1));
console.log(calculateFutureValue(100, 12, 10));