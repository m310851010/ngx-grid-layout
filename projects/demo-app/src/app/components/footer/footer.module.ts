import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {KtdFooterComponent} from './footer.component';



@NgModule({
  declarations: [KtdFooterComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [KtdFooterComponent]
})
export class FooterModule { }
