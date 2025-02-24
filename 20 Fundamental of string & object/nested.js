const college = {
    name: 'VGC',
    events: ['Science fair', '21 feb', '36 July'],
    class: [11, 12, 13],
    unique: {
        color: 'green',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
// console.log(college.unique.color);
console.log(college.unique.result.merit)
college.unique.result.merit = 'Most of the top';
// console.log(college.unique.result.merit);
console.log(college['unique'].result.merit);
college.events[2] = 'Independen 2.0';
console.log(college.events[2]);

console.log(college);

delete college.class;
console.log(college);