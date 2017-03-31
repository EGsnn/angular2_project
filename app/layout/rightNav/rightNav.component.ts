/**
 * Created by Administrator on 2017/3/30.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'rightNav',
    templateUrl: 'app/layout/rightNav/rightNav.component.html',
    styleUrls: ['app/layout/rightNav/rightNav.component.css']
})
export class RightNavComponent {
    // listName = ["市场中心","综管中心","产品中心","媒体中心","IT中心","采购部"]
    listName = [
        {
            id:"market_centre",
            name:"市场中心"
        },{
            id:"zg_centre",
            name:"综管中心"
        },{
            id:"product_centre",
            name:"产品中心"
        },{
            id:"mt_centre",
            name:"媒体中心"
        },{
            id:"IT_centre",
            name:"IT中心"
        },{
            id:"CG_centre",
            name:"采购部"
        }
    ]
}
