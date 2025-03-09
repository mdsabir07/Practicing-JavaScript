/**
 * Looping technique
 * 
 * 1. for loop
 * 2. while loop
 * 3. do while ->ignore
 * 4. for of -> array loop korar jonno
 * 5. for in -> object loop korar jonno
*/

const friends = ['Muhammad', 'Sabiha', 'Sabir', 'Amena', 'Sokhina'];
for (const friend of friends) {
    // console.log(friend);
}
for (let i = 0; i < 10; i++) {
    // console.log(i);
    // console.log(friends[i]);
}
for (let i = 0; i < friends.length; i++) {
    // console.log(i);
    // console.log(friends[i]);
}

let i =0;
while(i<friends.length){
    console.log(friends[i]);
    i++;
}