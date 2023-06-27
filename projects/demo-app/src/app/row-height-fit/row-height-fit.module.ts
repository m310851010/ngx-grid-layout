import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RowHeightFitRoutingModule} from './row-height-fit-routing.module';
import {KtdRowHeightFitComponent} from './row-height-fit.component';
import {KtdGridModule} from '@xmagic/ngx-grid-layout';
import {RouterModule} from '@angular/router';
import {FooterModule} from '../components/footer/footer.module';


@NgModule({
    declarations: [KtdRowHeightFitComponent],
    imports: [
        CommonModule,
        KtdGridModule,
        RouterModule,
        FooterModule,
        RowHeightFitRoutingModule
    ]
})
export class RowHeightFitModule {
}
