/**
 * Created by Administrator on 2017/5/8.
 */
import { Component , OnInit , trigger, state, style, transition, animate} from '@angular/core';
import { Router } from '@angular/router';
import { data } from '../../service/data';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { dataService } from '../../service/data.service';
import any = jasmine.any;



@Component({
    selector: 'newsModule',
    templateUrl: 'app/indexContent/newsModule/newsModule.component.html',
    styleUrls: ['app/indexContent/newsModule/newsModule.component.css'],
    providers: [dataService],
    animations:[
        //在position状态改变时，触发动画
        trigger('height',[
            //position为left时的样式
            state('open',style({
                'height':189
            })),
            //position为right时的样式
            state('close',style({
                'height':54
            })),
            //状态切换时的动画设置
            transition('open => close',animate('1000ms ease-in')),
            transition('close => open',animate('1000ms ease-out'))
        ])
    ]
})

export class NewsModuleComponent {
    // Names: listName[];
    // @Input() name: Name;
    listName = null;
    isLoading = true;
    currentHeight = "close" ;
    newsData = null;
    showChild = 11;
    animations = null;
    constructor(
        private router: Router,
        private dataService: dataService,
        private formBuilder: FormBuilder
    ) { }

    // getNames(): void {
    //     this.listPageService.getNames().then(names => this.Names = names);
    // }
    getNames(){
        this.dataService.getNews().subscribe(
            data => this.newsData = data,
            error => console.log(error),
            () => this.isLoading = false
        );
    }
    ngOnInit(): void {
        this.getNames();
    }
    toggleHeight(id) {
        this.showChild = id;
        this.animations = true;
    }
    isOpen(id) {
        return this.showChild === id;
    }
    isClose(id){
        return this.showChild !== id;
    }
    gotoDetail(id:string | number) {
        this.router.navigate(['/detailPage', id ]);
    }
}
