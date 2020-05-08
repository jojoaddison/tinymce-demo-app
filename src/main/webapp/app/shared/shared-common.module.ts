import { NgModule } from '@angular/core';

import { EditorSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [EditorSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [EditorSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EditorSharedCommonModule {}
