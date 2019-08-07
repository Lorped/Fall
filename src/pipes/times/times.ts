import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TimesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'timesPipe',
})
export class TimesPipe implements PipeTransform {

   transform(value: number): any {
     const iterable = {};
     iterable[Symbol.iterator] = function* () {
       let n = 0;
       while (n < value) {
         yield ++n;
       }
     };
     return iterable;
   }
}
