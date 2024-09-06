//泛型函数
function idntity<T>(arg: T): T {
    return arg;
}

let output1 = idntity<string>("Hello TypeScript!");

let output2 = idntity<number>(42);

console.log(output1);
console.log(output2);

//泛型接口
interface Pair<T,U> {
    first: T;
    second: U;
}

let pair1: Pair<string,number> = {first: "One", second: 1};
let pair2: Pair<boolean,string> = {first:true, second: "Ture"};

console.log(pair1);
console.log(pair2);

//泛型类
class GenericNumber<T>{
    zeroValue: T;
    add: (x:T,y:T) => T;

    constructor(zeroValue: T,addFn: (x:T,y:T) => T){
        this.zeroValue = zeroValue;
        this.add = addFn;
    }
}

let myGenericNumber = new GenericNumber<number>(0,(x,y) =>x + y);
console.log(myGenericNumber.add(5,10));

let myGenericString = new GenericNumber<string>("",(x,y) =>x + y);
console.log(myGenericString.add("Hello,","world!"));

//泛型约束
interface Lengthwise{
    length: number;
}

function logLength<T extends Lengthwise>(arg: T):T {
    console.log(arg.length);
    return arg;
}

logLength("Hello TypeScript!");
logLength([1,2,3]);
logLength({length: 10,value:42});

//泛型默认类型
function createArray<T = string>(length: number, value: T): T[]{
    return Array(length).fill(value);
}

let stringArray = createArray(3,"Hello");
let numberArray = createArray<number>(3,42);

console.log(stringArray);
console.log(numberArray);

