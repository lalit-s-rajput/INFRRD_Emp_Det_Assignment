import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { ResultRoutingModule } from './result-routing.module';
import { NavbarContainerComponent } from './containers/navbar-container/navbar-container.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    fromContainers.containers,
    fromComponents.components,
    NavbarContainerComponent,
  ],
  imports: [CommonModule, FormsModule, ResultRoutingModule],
})
export class ResultModule {}
