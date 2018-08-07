import { Pipe, PipeTransform } from '@angular/core';
import { Clube } from '../../app.model';

@Pipe({
  name: 'clubeImg'
})
export class ClubeImgPipe implements PipeTransform {

  transform(clube_id: number, clubes: Clube[]): string {
    const clube: Clube[] = clubes.filter(clube => clube.id === clube_id);
    return clube[0].escudos["30x30"];
  }

}
