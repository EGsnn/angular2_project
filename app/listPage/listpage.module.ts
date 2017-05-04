/**
 * Created by Administrator on 2017/5/2.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ListPageComponent }    from './listPage.component';
import { DetailPageComponent }  from './detailPage/detailPage.component';

import { dataService } from '../service/data.service';

import { ListRoutingModule } from './listPage.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ListRoutingModule
    ],
    declarations: [
        ListPageComponent,
        DetailPageComponent
    ],
    providers: [ dataService ]
})
export class ListModule {}
