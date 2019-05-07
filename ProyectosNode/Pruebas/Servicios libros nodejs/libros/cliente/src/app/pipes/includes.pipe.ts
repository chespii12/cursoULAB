import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includes'
})
export class IncludesPipe implements PipeTransform {

  transform(books:any, text:string): boolean {
    if (!text.length) return books;
    return books.filter((book:any) => (book.title.includes(text) || book.author.includes(text)));
  }

}
