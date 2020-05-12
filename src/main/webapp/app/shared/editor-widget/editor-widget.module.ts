import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxTinymceModule } from 'ngx-tinymce';
import { EditorWidgetComponent } from './editor-widget.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [EditorWidgetComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgxTinymceModule.forRoot({
            baseURL: '/content/tinymce/'
        })
    ],
    exports: [EditorWidgetComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditorWidgetModule {}
