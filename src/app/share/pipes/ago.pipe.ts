import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'agoPipe'})
export class AgoPipe implements PipeTransform {
    transform(value: any): any {
        if(value > 0){
            const second = (+new Date() - +new Date(value))/1000;

            if(second < 30) {
                return `刚刚`;
            }

            const interval = {
                年:3600 * 24 * 365,
                月:3600 * 24 * 30,
                周:3600 * 24 * 7,
                天:3600 * 24 ,
                时:3600 ,
                分:60,
                秒:1
            }

            let counter = 0;

            for (const unitName in interval) {
                if (interval.hasOwnProperty(unitName)) {
                    const value = interval[unitName];
                    counter = Math.floor(second / value);
                    if(counter > 0){
                        return `${counter} ${unitName} ago`;
                    }
                }
            }
        }
        return value;
    }
}