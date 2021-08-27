var initialPrice = document.querySelector("#initial-price");
var StocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitbutton = document.querySelector("#submit-button");
var outputBox = document.querySelector("#output-box");


function calculateProfitAndLoss(initial, quantity, current){
    if(initial>current){
        var loss= (initial-current)*quantity;
        var lossPercentage=(loss/initial)*100;

        showOutput(`Hey the Loss is ${loss} and Loss Percentage is ${lossPercentage}%`);

    }else if (current>initial){
        var profit = (current-initial)*quantity;
        var profitPercentage= (profit/initial)*100;

        showOutput(`Hey the Profit is ${profit} and Profit Percentage is ${profitPercentage}%`);
    }else{
        showOutput(`No Pain No Gain and No Gain No Pain`);
    }
}

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(StocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);
}

function showOutput(message){
    outputBox.innerHTML=message;
}

submitbutton.addEventListener('click', submitHandler);