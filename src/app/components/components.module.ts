import {NgModule} from '@angular/core';
import {MenuComponent} from './menu/menu.component';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule {

}
