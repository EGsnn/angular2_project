/**
 * Created by Administrator on 2017/5/11.
 */
import { Route , RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { makeFormComponent } from './makeForm.component';

export const makeFormRoutes: Route[] = [
    {
        path: 'makeForm',
        component: makeFormComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(makeFormRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class makeFormRoutingModule { }