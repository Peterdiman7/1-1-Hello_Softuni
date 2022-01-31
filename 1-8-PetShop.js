function solve(input){

    let dogFoodQuantity = Number(input[0]);
    let catFoodQuantity = Number(input[1]);

    let dogFoodPrice = dogFoodQuantity * 2.5;
    let catFoodPrice = catFoodQuantity * 4;
    
    let total = dogFoodPrice + catFoodPrice;

    console.log(total);
}
solve(['5', "4"]);