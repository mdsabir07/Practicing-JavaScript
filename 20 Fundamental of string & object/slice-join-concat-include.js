// slice
const address = 'muhammadBinSabir';
const part = address.slice(8, 11);
// console.log(part);

// split
const sentence = "Muhammad is a good boy but naughty boy";
// console.log(sentence.split());
// console.log(sentence.split(''));
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

const friendsStr = 'Muhammad,Sabiha,Sazid,Shahadat,Siam,Sabir';
const friends = friendsStr.split(',');
// console.log(friends);


// join
const realFriend = ['Muhammad', 'Sabiha', 'Sazid', 'Shahadat', 'Siam', 'Sabir'];
// console.log(realFriend.join());
// console.log(realFriend.join('|'));
// console.log(realFriend.join(' '));
// console.log(realFriend.join('-'))


// concat
const first = 'Sabirul';
const last = 'Islam';

// const fullName = first + last;
const fullName = first + ' ' + last;
// console.log(fullName);

const fullName2 = first.concat(' ').concat(last);
// console.log(fullName2);


// includes
console.log(last.includes('h')); // result false
console.log(last.includes('m')); // result true
