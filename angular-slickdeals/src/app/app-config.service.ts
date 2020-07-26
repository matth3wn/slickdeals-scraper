import { Injectable } from '@angular/core';
import { compileNgModule } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor() { }

  initApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log('hello');
      setTimeout(() => {
        const newNode = document.createElement('div');
        newNode.innerText = 'helloooooooooooo';
        const parent = document.getElementById('parent');
        parent.appendChild(newNode);
      }, 2000);

      resolve('hello');
    })
  }
}
