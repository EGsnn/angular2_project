import { Routes } from '@angular/router';

import { AboutRoutes } from './about/about.routes';
import { ExampleRoutes } from './example/example.routes';
import { IndexContentRoutes } from './indexContent/indexContent.routes';
import { ListPageRoutes } from './listPage/listPage.routes';
import { DetailPageRoutes } from './detailPage/detailPage.routes';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/indexContent',
        pathMatch: 'full'
    },
  ...AboutRoutes,
  ...ExampleRoutes,
  ...ListPageRoutes,
  ...DetailPageRoutes,
  ...IndexContentRoutes,
];
