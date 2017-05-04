/**
 * Created by Administrator on 2017/3/31.
 */
import { Component ,OnInit } from '@angular/core';
import { Router ,ActivatedRoute ,Params} from '@angular/router';
import { dataService } from '../service/data.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'listPage',
    templateUrl: 'app/listPage/listPage.component.html',
    styleUrls: ['app/listPage/listPage.component.css'],
    providers: [dataService]

})

export class ListPageComponent implements OnInit {
    Names = null;
    isLoading = true;
    pageId = null;
    title = null;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataService: dataService,

    ) { }

    // getNames(): void {
    //     this.listPageService.getNames().then(names => this.Names = names);
    // }
    getNames() {
        this.route.params
            .switchMap((params: Params) => this.dataService.getName(params['id']) )
            .subscribe(
                datas => {
                    this.title = datas.title;
                    this.Names = datas.data;
                } ,
                error => console.log(error),
                () => this.isLoading = false
             );
    }
    ngOnInit(): void {
        this.getNames();
    }
    gotoDetail(id:string | number) {
        this.router.navigate(['/detailPage', id ]);
    }
}
