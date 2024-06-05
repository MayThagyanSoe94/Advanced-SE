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
/*
function isMale(human)
{
    return human.gender == 'male';
}

*/
const isMale= (human)=>human.gender == 'male';
let males = humans.filter(isMale);
console.log('Males ' , males)