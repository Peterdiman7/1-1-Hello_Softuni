function solve(input){

    let pricePerSquareMeter = Number(input) * 7.61;
    let discount = pricePerSquareMeter * 0.18;
    let finalPrice = pricePerSquareMeter - discount;
    console.log(finalPrice);

}
solve('550');