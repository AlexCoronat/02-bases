import { Component } from '@angular/core';
import { Character } from '../../interfaces/character';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(public dbzService:DbzService){}
  get characters(): Character[] {
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }
}
