import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KtdCustomHandlesComponent } from './custom-handles.component';
import { KtdGridModule } from '@xmagic/ngx-grid-layout';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from '../components/footer/footer.module';

const routes: Routes = [
    {
        path: 'custom-handles',
        component: KtdCustomHandlesComponent,
        data: {title: 'Angular Grid Layout - Custom handles'}
    },
];

@NgModule({
    declarations: [KtdCustomHandlesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        KtdGridModule,
        FooterModule
    ]
})
export class KtdCustomHandlesModule {}
