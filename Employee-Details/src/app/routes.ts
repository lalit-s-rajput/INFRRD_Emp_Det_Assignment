import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import * as fromContainers from './result/containers';
export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: fromContainers.NavbarContainerComponent,
        loadChildren: () =>
          import('./result/result.module').then((m) => m.ResultModule), // it is of no use
      },
    ],
  },
];
