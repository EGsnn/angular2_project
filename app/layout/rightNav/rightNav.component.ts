/**
 * Created by Administrator on 2017/3/30.
 */
import { Component , OnInit } from '@angular/core';
import { dataService } from '../../service/data.service';
import { Router } from '@angular/router';
import { data } from '../../service/data';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
    selector: 'rightNav',
    templateUrl: 'app/layout/rightNav/rightNav.component.html',
    styleUrls: ['app/layout/rightNav/rightNav.component.css'],
    providers: [dataService]
})

export class RightNavComponent implements OnInit {
    // Names: listName[];
    // @Input() name: Name;
    listName = null;
    isLoading = true;
    constructor(
        private listPageService: dataService,
        private router: Router,
        private formBuilder: FormBuilder
    ) { }

    // getNames(): void {
    //     this.listPageService.getNames().then(names => this.Names = names);
    // }
    getNames() {
        this.listPageService.getNames().subscribe(
            data => this.listName = data,
            error => console.log(error),
            () => this.isLoading = false
        );
        console.log(this.listName)
    }
    ngOnInit(): void {
        this.getNames();
    }
    gotoDetail(id) {
        this.router.navigate(['/listPage', id]);
    }
}
