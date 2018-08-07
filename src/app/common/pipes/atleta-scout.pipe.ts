import { Scout } from "./../../app.model";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "atletaScout"
})
export class AtletaScoutPipe implements PipeTransform {
  transform(scout: Scout): any {
    if (scout) {
      // console.log('<div class="row">' + this.generateArray(scout) + '</div>');
      const table =
        '<div class="row">' +
        Object.keys(scout).map(key => {
          return '<div class="col s1">' + key + ":" + scout[key] + "</div>";
        });
      +"</div>";
      console.log(table);
      return table;
    }
  }

  generateArray(obj) {
    return Object.keys(obj).map(key => {
      const table = '<div class="col s1">' + key + ":" + obj[key] + "</div>";
      console.log(table);
      return table;
    });
  }
}
