var initialPrice = document.querySelector("#initial-price");
var StocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitbutton = document.querySelector("#submit-button");

function calculateProfitAndLoss(initial, quantity, current){
    if(initial>current){
        var loss= (initial-current)*quantity;
        var lossPercentage=(loss/initial)*100;

        console.log(`Hey the Loss is ${loss} and Loss Percentage is ${lossPercentage}%`);
    }else if (current>initial){
        var profit = (current-initial)*quantity;
        var profitPercentage= (profit/initial)*100;

        console.log(`Hey the Profit is ${profit} and Profit Percentage is ${profitPercentage}%`);
    }else{
        console.log(`No Pain No Gain and No Gain No Pain`);
    }
}

calculateProfitAndLoss(100,10,10);
calculateProfitAndLoss(20,10,100);
calculateProfitAndLoss(10,10,10);

// submitbutton.addEventListener('click', function1);