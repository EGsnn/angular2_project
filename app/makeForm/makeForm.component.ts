/**
 * Created by Administrator on 2017/5/11.
 */
import { Component ,OnInit } from '@angular/core';
import { Router ,ActivatedRoute ,Params} from '@angular/router';
import { dataService } from '../service/data.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'makeForm',
    templateUrl: 'app/makeForm/makeForm.component.html',
    styleUrls: ['app/makeForm/makeForm.component.css'],

})

export class makeFormComponent implements OnInit {
    Names = null;
    lineNum = 5;
    listNum = 6;
    Arrline = [];
    ArrlistNum = [];
    lineHNum = 30;
    lineWNum = 120;
    borderNum = 1;

    borderCL = '#cccccc';
    BgCL = '#f2f2f2';
    TextCL = "#333333";
    firstTextCL = "#ffffff";
    firstTrBg = '#abd6ce';
    firstBdCL = '#abd6ce';

    isLoading = true;
    pageId = null;
    title = null;
    constructor(
        private route: ActivatedRoute,
        private router: Router

    ) { }

    // getNames(): void {
    //     this.listPageService.getNames().then(names => this.Names = names);
    // }
    getNames() {
        this.Arrline = [];
        this.ArrlistNum = [];
        console.log(this.Arrline +"ok")
        for(let i =0; i<this.lineNum; i++){
            this.Arrline.push(i);
        }
        for(let i =0; i<this.listNum; i++){
            this.ArrlistNum.push(i);
        }
    }
    ngOnInit(): void {
        this.getNames();
    }
}
