/**
 * Created by Administrator on 2017/5/2.
 */
/**
 * Created by Administrator on 2017/3/31.
 */
import 'rxjs/add/operator/switchMap';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, HostBinding } from '@angular/core';
import { dataService } from '../../service/data.service';

@Component({
    selector: 'detailPage',
    templateUrl: 'app/listPage/detailPage/detailPage.component.html',
    styleUrls: ['app/listPage/detailPage/detailPage.component.css'],
    providers: [dataService]
})

export class DetailPageComponent implements OnInit {
    // @HostBinding('@routeAnimation') routeAnimation = true;
    text = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: dataService
    ) {}

    ngOnInit() {
        this.route.params
        // (+) converts string 'id' to a number
            .switchMap((params: Params) => this.service.getDetail( params['id']))
            .subscribe(name => this.text = name);

    }
    goBack(id:string | number){
        this.router.navigate(['/listPage', id ]);
    }
}

