/**
 * Created by Administrator on 2017/3/24.
 */
import { Route , RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { IndexContentComponent } from './indexContent.component';

export const IndexContentRoutes: Route[] = [
    {
        path: 'indexContent',
        component: IndexContentComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(IndexContentRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class IndexRouterModule { }