export function Emoji() {
    // target是指定对象，key是指属性
    return (target: object, key: string) => {
        let val = target[key];

        const getter = () => {
            return val;
        }

        const setter = (value: string) => {
            val = '☺☺☺☺ '+value+'♫♫♫♫';
        }

        Object.defineProperty(target,key,{
            set: setter,
            get: getter,
            enumerable: true,
            configurable: true
        })
    }
}

export function Comfiguration(message: string){
    return (target: object, key: string, descriptor: PropertyDescriptor) =>{
        const orginalfun = descriptor.value;

        descriptor.value = function(...args:any){
            const allow = window.confirm(message);
            if(allow){
                const result = orginalfun.apply(args);
                return result;
            }
            return null;
        }
        return descriptor;
    }
}