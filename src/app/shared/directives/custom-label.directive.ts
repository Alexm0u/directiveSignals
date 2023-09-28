import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color = 'red'

  @Input() set color( value: string){
    this._color = value;
    this.setSTyle();
  }

  constructor(private el: ElementRef<HTMLElement>) {

    this.htmlElement = el;

   }

  ngOnInit(): void {
    this.setSTyle();
  }

  setSTyle():void{
    if (!this.htmlElement)return;

this.htmlElement!.nativeElement.style.color = this._color
  }

}
