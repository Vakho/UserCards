import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'userName',
})
export class UserName implements PipeTransform {
  transform(fullName: string) {
    return fullName.split(' ')[0];
  }
}
