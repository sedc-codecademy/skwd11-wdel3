import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
