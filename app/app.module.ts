import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExampleComponent } from './example/example.component';
import { LayoutComponent } from './layout/layout.component';
import { IndexContentComponent } from './indexContent/indexContent.component';
import { routes } from './app.routes';

@NgModule({
    imports:        [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    declarations:   [AppComponent, AboutComponent, ExampleComponent,LayoutComponent,IndexContentComponent],
    bootstrap:      [AppComponent]
})
export class AppModule {}