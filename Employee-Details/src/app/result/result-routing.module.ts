import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { resultRoutes } from './result.routes';
@NgModule({
  imports: [RouterModule.forChild(resultRoutes)],
  exports: [RouterModule],
})
export class ResultRoutingModule {}
