function LogParameter(
    target: any,
    propertyKey: string,
    paramterIndex: number
){
    console.log(`Parameter at index ${paramterIndex} in method ${propertyKey}`)

}

class DemoClass{
    greet(@LogParameter message: string) {
        console.log(message)
    }
}

const demoClass =  new DemoClass()
demoClass.greet('Hello')