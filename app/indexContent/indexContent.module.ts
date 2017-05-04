/**
 * Created by Administrator on 2017/5/4.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { IndexContentComponent  }    from './indexContent.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        IndexContentComponent
    ]
})
export class IndexContentModule {}
