import { Pipe, PipeTransform } from '@angular/core';

// This pipe turns object into array so it can be iterated through (via ngFor for example)

@Pipe({ name: 'keys',  pure: false })
export class KeysPipe implements PipeTransform {
    transform(value: any, args?: any[]): any[] {
      // check if "routes" exists
      if (value) {
        // create instance vars to store keys and final output
        const keyArr: any[] = Object.keys(value),
              dataArr = [];

        // loop through the object,
        // pushing values to the return array
        keyArr.forEach((key: any) => {
            dataArr.push(value[key]);
        });
        // return the resulting array
        return dataArr;
      }
    }
}
