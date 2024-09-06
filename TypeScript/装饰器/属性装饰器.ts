function DefaultValue(value: any) {
    return function (target:any,propertyKey:string) {
        target[propertyKey] = value
    }
}

class TestClass  {
    @DefaultValue('Hello,world!')
    greeting: string
}

const testClass = new TestClass()
console.log(testClass.greeting)