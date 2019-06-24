import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';

@NgModule({
  declarations: fromComponents.navbarComponents,
  imports: [CommonModule],
  exports: fromComponents.navbarComponents,
  entryComponents: fromComponents.navbarComponents
})
export class NavbarModule {}
