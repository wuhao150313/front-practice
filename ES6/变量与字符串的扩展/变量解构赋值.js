var foods = {
    best: '小龙虾',
    good: '火锅',
    noml: '快餐',
    bad:'方便面',
}

// var best = food.best
// var bad = food.bad

// console.log(best)
// console.log(bad)

//解构赋值
var{best , bad} = foods
console.log(best)
console.log(bad)

var {best:best1 , bad:bad1} = foods
console.log(best1)
console.log(bad1)

// undifend
// console.log(hello)

const address = {
    city:{
        name:'',
        area:{
            name:'',
            school:{
                name:'',
            }
        }
    }
}

// 传统写法取出

// console.log(address.city.area.school.name)

// 嵌套的解构赋值
let {
    city:{
        name:cityName,
        area:{
            name:areaName,
            school:{
               name:schoolName
            },
        },
    },
} = address
console.log(a)
console.log(b)
lconsole.log(c)