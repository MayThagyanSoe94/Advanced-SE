let humans = [
    {
        name: 'Mg Mg',
        gender: 'male',
        age: 30
    },
    {
        name: 'Mya Mya',
        gender: 'female',
        age: 20
    },
    {
        name: 'Hla Hla',
        gender: 'female',
        age: 25
    },
    {
        name: 'Aung Aung',
        gender: 'male',
        age: 19
    },
    {
        name: 'Min Min',
        gender: 'male',
        age: 22
    },
    {
        name: 'Aye Aye',
        gender: 'female',
        age: 35
    }
]

let males = [];
for (i = 0; i < humans.length; i++) {
    let human = humans[i];
    if (human.gender === 'male') {
        males.push(human);
    }
}
console.log('Males ',males);