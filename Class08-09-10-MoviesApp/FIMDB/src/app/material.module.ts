import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

const matModules = [
  CommonModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatTooltipModule,
  MatBadgeModule,
  MatIconModule,
  MatSliderModule
]

@NgModule({
  declarations: [],
  imports: matModules,
  exports: matModules
})
export class MaterialModule { }

