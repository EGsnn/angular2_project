import { Routes } from '@angular/router';

import { AboutRoutes } from './about/about.routes';
import { ExampleRoutes } from './example/example.routes';
import { IndexContentRoutes } from './indexContent/indexContent.routes';
import { LayoutRoutes } from './layout/layout.routes';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/indexContent',
        pathMatch: 'full'
    },
  ...AboutRoutes,
  ...ExampleRoutes,
  ...LayoutRoutes,
  ...IndexContentRoutes,
];
