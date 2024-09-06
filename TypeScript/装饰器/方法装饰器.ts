function LogExecutionTime(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]){
    console.log(`Excuting ${propertyKey}...`)
    return originalMethod.apply(this, args)
  }
}

class MyService {
    @LogExecutionTime
    doSomething(){
        console.log('Doing something')
    }
}

const servie = new MyService()
servie.doSomething()