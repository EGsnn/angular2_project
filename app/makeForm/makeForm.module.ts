/**
 * Created by Administrator on 2017/5/11.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { makeFormComponent }    from './makeForm.component';

import { dataService } from '../service/data.service';

import { makeFormRoutingModule } from './makeForm.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        makeFormRoutingModule
    ],
    declarations: [
        makeFormComponent
    ],
    providers: [ dataService ]
})
export class makeFormModule {}
