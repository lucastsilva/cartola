import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatPlayerImg"
})
export class FormatPlayerImgPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value !== null) {
      return value.replace("FORMATO", "140x140");
    }
  }
}
