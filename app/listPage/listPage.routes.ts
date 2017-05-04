/**
 * Created by Administrator on 2017/3/31.
 */
import { Route , RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { ListPageComponent } from './listPage.component';
import { DetailPageComponent } from './detailPage/detailPage.component';

export const ListPageRoutes: Route[] = [
    {
        path: 'listPage/:id',
        component: ListPageComponent
    },{
        path: 'detailPage/:id',
        component: DetailPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ListPageRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ListRoutingModule { }