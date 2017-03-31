import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { rightNavModule }   from './layout/rightNav/rightNav.module';


import { RightNavComponent }   from './layout/rightNav/rightNav.component';
import { TopNavComponent }   from './layout/topNav/topNav.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExampleComponent } from './example/example.component';
import { IndexContentComponent } from './indexContent/indexContent.component';
import { ListPageComponent } from './listPage/listPage.component';
import { breadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';

import { routes } from './app.routes';

@NgModule({
    imports:        [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    declarations:   [AppComponent, AboutComponent, ExampleComponent,ListPageComponent,IndexContentComponent,RightNavComponent,TopNavComponent,breadcrumbComponent],
    bootstrap:      [AppComponent]
})
export class AppModule {}