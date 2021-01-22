// Convert from kilometer to meter//

function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    return meter;
}
var meter = kilometerToMeter(415);
console.log(meter);

//budget for calculator//
var watchPrice = 50;
var phonePrice = 100;
var laptopPrice = 500;
function budgetCalculator( watch, phone, laptop){
    var watchTotal = 3*50;
    var phoneTotal = 2*100;
    var laptopTotal = 1*500;
    var result = watchTotal + phoneTotal + laptopTotal;
    return result;
}
var result = budgetCalculator( 3, 2, 1);
console.log(result);

//hotelcost defiend//
function hotelCostCalculator(day) {
    var hotelCost = 0;
    if (day <= 10) {
        hotelCost = day * 100;
    }
    else if (day <= 20) {
        var first10 = 10 * 100;
        var remaining = day - 10;
        var second10 = remaining * 80;
        hotelCost = first10 + second10;

    }
    else {
        var first10 = 10 * 100;
        var second10 = 10 * 80;
        var remaining = day - 20;
        var third10 = remaining * 50;
        hotelCost = first10 + second10 + third10;
    }
    return hotelCost;
}
var count = hotelCostCalculator(21);
console.log(count);


//megafriend defiend in javascript//
function megaFriend(friends){
    var maxWord = friends[0];
    for(var i = 0; i < friends.length; i++){
        var element = friends[i];
        if (element.length > maxWord.length){
            maxWord = element;
            return element;
        }
    }
}
var result = megaFriend(['Lia','Ali','Rima']);
console.log(result);