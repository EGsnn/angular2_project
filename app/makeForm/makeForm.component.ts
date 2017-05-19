/**
 * Created by Administrator on 2017/5/11.
 */
import { Component ,OnInit } from '@angular/core';
import { Router ,ActivatedRoute ,Params} from '@angular/router';
import  { CreatHtml } from './creatHtml'
import { dataService } from '../service/data.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'makeForm',
    templateUrl: 'app/makeForm/makeForm.component.html',
    styleUrls: ['app/makeForm/makeForm.component.css'],
    providers: [ CreatHtml ],
})

export class makeFormComponent implements OnInit {
    Names = null;
    lineNum = 5;
    listNum = 6;

    ArrlistNum = [];

    styleString = {
        borderCL : '#cccccc',
        BgCL : '#f2f2f2',
        TextCL : "#bbbbbb",
        firstTextCL : "#ffffff",
        firstTrBg : '#abd6ce',
        firstBdCL : '#abd6ce',
        lineHNum : 30,
        firstlineHNum : 35,
        lineWNum : 120,
        borderNum : 1
    };
    htmlBox = "";
    cssBox = "";

    listArr = [];
    Arrline = [];
    textareaTextH = "姓名 年龄 日期 数据1 数据2";
    textareaText = "张三 18 170516 15 58%\n李四 23 070516 20 60%";
    textareaTextArr ;
    isLoading = true;
    pageId = null;
    title = null;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private  creatHtml1:CreatHtml

    ) { }
    creatCord():void{
        this.htmlBox = this.creatHtml1.getHtml(this.listArr,this.Arrline);
        this.cssBox = this.creatHtml1.getCss(this.styleString);
    }
    listTextH():void{
        this.Arrline = [];
        this.Arrline = this.textareaTextH.split(/\s+/g);
        this.creatCord();
    }
    listText(): void {
        this.listArr = [];
        this.textareaTextArr = this.textareaText.split(/[\r\n]/g);
        // console.log(this.textareaTextArr);
        for(let i= 0; i<this.textareaTextArr.length; i++){
            this.listArr.push(this.textareaTextArr[i].split(/\s+/g));
        }
        // console.log(this.listArr);
        this.creatCord();
    }
    getNames() {
        this.Arrline = [];
        this.ArrlistNum = [];
        // console.log(this.Arrline +"ok");
        for(let i =0; i<this.lineNum; i++){
            this.Arrline.push(i);
        }
        for(let i =0; i<this.listNum; i++){
            this.ArrlistNum.push(i);
        }
    }
    ngOnInit(): void {
        this.getNames();
        this.listText();
        this.listTextH();
    }
}
