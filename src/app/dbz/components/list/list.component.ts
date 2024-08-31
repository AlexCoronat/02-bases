import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public onDeleteIndex: EventEmitter<number> = new EventEmitter();
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]
  onDeleteCharacter(index:number):void{
    console.log(index)
    this.onDeleteIndex.emit(index)
  }
}
