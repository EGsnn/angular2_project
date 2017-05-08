/**
 * Created by Administrator on 2017/5/4.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {KSSwiperModule} from 'angular2-swiper';

import { IndexContentComponent  }    from './indexContent.component';
import { NewsModuleComponent }    from './newsModule/newsModule.component';

import { IndexRouterModule } from './indexContent.routes';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        KSSwiperModule ,
        IndexRouterModule
    ],
    declarations: [
        IndexContentComponent,
        NewsModuleComponent

    ]
})
export class IndexContentModule {}
