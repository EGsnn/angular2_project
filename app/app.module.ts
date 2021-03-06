import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { listData }                 from './api/data.api';
import { InMemoryWebApiModule }     from 'angular2-in-memory-web-api';
import { requestOptionsProvider }   from './default-request-options.service';

import { ListModule }               from './listPage/listpage.module';
import { makeFormModule }           from './makeForm/makeForm.module';
import { IndexContentModule } from './indexContent/indexContent.module';

import { RightNavComponent }   from './layout/rightNav/rightNav.component';
import { TopNavComponent }   from './layout/topNav/topNav.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExampleComponent } from './example/example.component';
import { breadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import {ChartsModule} from 'ng2-charts'
import { routes } from './app.routes';

@NgModule({
    imports:        [BrowserModule,HttpModule ,  JsonpModule, FormsModule,ReactiveFormsModule , ListModule , makeFormModule ,IndexContentModule , RouterModule.forRoot(routes),InMemoryWebApiModule.forRoot(listData)],
    declarations:   [AppComponent, AboutComponent, ExampleComponent,RightNavComponent,TopNavComponent,breadcrumbComponent],
    providers: [ requestOptionsProvider ],
    bootstrap:      [AppComponent]
})
export class AppModule {}





