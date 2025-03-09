numbers = [1,2,45,676,8,4,24];
// console.log(numbers);

// numbers.reverse();

// const reversed = numbers.reverse();

// console.log(reversed);
// console.log(reversed);

const rev_numbers = [];
for(const num of numbers){
    // console.log(num);
    // rev_numbers.push(num);
    rev_numbers.unshift(num);
}
// console.log(rev_numbers);

const reversed_numbers = [];
for(let i = 0;i<numbers.length; i++){
    const num = numbers[i];
    reversed_numbers.unshift(num);
}

// reverse side 
for(let i=numbers.length -1;i>=0;i--){
    const num = numbers[i];
    console.log(num)
}