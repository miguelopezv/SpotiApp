import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';

@NgModule({
  declarations: [fromComponents.Loadercomponents],
  imports: [CommonModule],
  exports: [fromComponents.Loadercomponents],
  entryComponents: [fromComponents.Loadercomponents]
})
export class LoaderModule {}
