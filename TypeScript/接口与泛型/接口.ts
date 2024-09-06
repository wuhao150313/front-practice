interface StudentType {
    id:number
    name:string
    desc?:string
}

const student: StudentType = {
    id: 1,
    name:'小明',
    desc:'三好学生',
}


//错误：缺少id属性
//const student: StudentType = {name:'小明',}

//错误：age不在接口类型 StudentType中
//const student: StudentType = {id:1,name:'小明,age:18}

interface BaseType {
    value:number
    label: string
}

interface ListType{
    tag: string
    list: BaseType[]
}

const citys: ListType = {
    tag:'搞笑',
    list: [
        {
          value: 1,
          label:'清华大学',  
        },
        {
            value:2,
            label:'清华大学'
        },
    ],
}
console.log(citys)