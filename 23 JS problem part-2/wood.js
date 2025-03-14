/**
 * Chair --> 5 cft
 * Table --> 10 cft
 * Bed --> 50 cft
*/
function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const woodPerChair = 5;
    const woodPerTable = 10;
    const woodPerBed = 50;

    const chairTotalWood = chairQuantity * woodPerChair;
    const tableTotalWood = tableQuantity * woodPerTable;
    const bedTotalWood = bedQuantity * woodPerBed;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}
const quantityOfWood = woodQuantity(2, 0, 30);
console.log(quantityOfWood);