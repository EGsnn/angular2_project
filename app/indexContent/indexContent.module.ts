/**
 * Created by Administrator on 2017/5/4.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {KSSwiperModule} from 'angular2-swiper';

import { BarChartDemoComponent } from "../chart/bar-chart";
import { LineChartDemoComponent } from "../chart/line-chart";

import { IndexContentComponent  }    from './indexContent.component';
import { NewsModuleComponent }    from './newsModule/newsModule.component';
import { ChartModuleComponent  }    from './chartModule/chartModule.component';

import { IndexRouterModule } from './indexContent.routes';
import {ChartsModule} from 'ng2-charts'


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        KSSwiperModule ,
        ChartsModule,

        IndexRouterModule
    ],
    declarations: [
        IndexContentComponent,
        NewsModuleComponent,
        ChartModuleComponent,
        BarChartDemoComponent,
        LineChartDemoComponent

    ]
})
export class IndexContentModule {}
