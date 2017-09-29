import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(items: any, args?: any): any {
    console.log(args);
    console.log(items);
    let col = items;
    if(args.bathRooms) {
      col = col.filter(item => item.bathRooms == args.bathRooms);
    }
    if(args.bedRooms) {
      col = col.filter(item => item.bedRooms.length == args.bedRooms);
    }
    if(args.address) {
      col = col.filter(item => item.address.indexOf(args.address) >= 0);
    }
    if(args.type) {
      col = col.filter(item => item.type.indexOf(args.type) >= 0);
    }
    if(args.built) {
      col = col.filter(item => item.built == args.built);
    }
    return col;
  }

}
