import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dbpipe'
})
export class DbpipePipe implements PipeTransform {

  transform(value: any[], arg?: any){
    return value.filter(item => item.Title.startsWith(arg));
  }

}
