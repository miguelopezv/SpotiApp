import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as fromComponents from './components';

@NgModule({
  declarations: fromComponents.navbarComponents,
  imports: [CommonModule, RouterModule],
  exports: fromComponents.navbarComponents,
  entryComponents: fromComponents.navbarComponents
})
export class NavbarModule {}
