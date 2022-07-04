const arr =  [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }

];
const maleStudents = arr.filter((student) => {
    return student.gender === 'male'
})
const femaleStudents = arr.filter((student) => {
    return student.gender === 'female'
})
const maleMediumScore = maleStudents.reduce((previousValue, currentValue) => {
    return previousValue + (currentValue.point)/maleStudents.length
},0)
const femaleMediumScore = femaleStudents.reduce((previousValue, currentValue) => {
    return previousValue + (currentValue.point)/femaleStudents.length
},0)
console.table(maleStudents);
console.table(femaleStudents);
console.log(` điểm trung bình của nam là ${maleMediumScore}`)
console.log(` điểm trung bình của nữ là ${femaleMediumScore}`)