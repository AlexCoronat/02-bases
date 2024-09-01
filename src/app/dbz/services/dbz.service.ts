import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegueta',
      power: 7500
    }
  ]
  onNewCharacter(character:Character):void{
    const newCharacter: Character = {id: uuid(),...character }
    this.characters.push(character);
  }
  onDeleteCharacter(index:number):void{
    this.characters.splice(index,1)
  }
}
