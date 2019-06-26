import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';

@NgModule({
  declarations: fromComponents.ErrorHandlerComponents,
  imports: [CommonModule],
  exports: fromComponents.ErrorHandlerComponents,
  entryComponents: fromComponents.ErrorHandlerComponents
})
export class ErrorHandlerModule {}
