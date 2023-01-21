let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

//Between 50 and 300 tip=15%, different=20%

let calcTip = function(){
    for (let i = 0; i < bills.length; i++){
        if (bills[i] >= 50 && bills[i] <= 300){
            let tip = 0.15*bills[i];
            tips.push(tip);
            let total = bills[i] + tips[i];
            totals.push(total);
        }
        else{
            let tip = 0.2*bills[i];
            tips.push(tip);
            let total = bills[i] + tips[i];
            totals.push(total);
        }
        }
    }

    let calcAvarage = function(){
    let sumBills = 0;
        for (let i = 0; i < bills.length; i++){
            sumBills = sumBills + bills[i];
        }
    let sumTips = 0;
        for (let i = 0; i < tips.length; i++){
            sumTips = sumTips + tips[i];
        }
    let sumTotals = 0;
        for (let i = 0; i < totals.length; i++){
            sumTotals = sumTotals + totals[i];
        }
    let avgBills = sumBills / bills.length;
    let avgTips = sumTips / tips.length;
    let avgTotals = sumTotals / totals.length;
    
    avgBills = avgBills.toFixed(2);
    avgTips = avgTips.toFixed(2);
    avgTotals = avgTotals.toFixed(2);

    console.log(`AVARAGE BILLS: ${avgBills}`);
    console.log(`AVARAGE TIPS: ${avgTips}`);
    console.log(`AVARAGE TOTALS: ${avgTotals}`);
    }

    calcTip();
    calcAvarage();
    console.log("BILLS:", bills);
    console.log("TIPS:", tips);
    console.log("TOTALS:", totals);