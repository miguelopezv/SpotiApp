import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: fromComponents.CardComponents,
  imports: [CommonModule, PipesModule],
  exports: fromComponents.CardComponents,
  entryComponents: fromComponents.CardComponents
})
export class CardModule {}
