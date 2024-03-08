const person ={
    name: 'rrr',
    age: 1,
    address: {
        zilla:'dhk',
        code: "234",
    },
    p: [1,2,3,4],
}


const { address: {zilla: district} } = person;
console.log(district);