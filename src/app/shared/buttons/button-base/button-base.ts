import { ElementRef } from "@angular/core";

export class ButtonBase {
  constructor(elementRef: ElementRef, backgroundColor: string, boxShadow: string) {
    const style = elementRef.nativeElement.style
    style.backgroundColor = backgroundColor
    style.boxShadow = `inset 0px -8px 0px ${boxShadow}`;
    style.borderRadius = '15px';
    style.height = '67px';
    //font
    style.fontFamily = 'Outfit';
    style.fontSize = '20px';
    style.fontWeight = '700';
    style.lineHeight = '20px';
    style.letterSpacing = '1.25px';
    style.textAling = 'center';
    style.textTransform = 'uppercase';
    style.cursor = 'pointer';
  }
}
