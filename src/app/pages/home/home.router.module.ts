import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'alerts',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../alerts/alerts.module').then(m => m.AlertsModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../search/search.module').then(m => m.SearchModule)
          }
        ]
      },
      {
        path: 'subscriptions',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../subscriptions/subscriptions.module').then(m => m.SubscriptionsModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/alerts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/alerts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
