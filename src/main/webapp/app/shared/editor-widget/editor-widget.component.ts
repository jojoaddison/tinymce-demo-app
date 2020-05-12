import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'jhi-editor-widget',
    templateUrl: './editor-widget.component.html',
    styles: []
})
export class EditorWidgetComponent implements OnInit {
    @Input() content: string;
    @Input() config: any;
    @Output() onDataChanged = new EventEmitter<any>();
    @Output() onDataBlur = new EventEmitter<any>();
    @Output() onKeyup = new EventEmitter<any>();
    editor: any;

    constructor() {
        this.config = {
            height: 250,
            theme: 'modern',
            // powerpaste advcode toc tinymcespellchecker a11ychecker mediaembed linkchecker help
            plugins:
                'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image imagetools link media template codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists textcolor wordcount contextmenu colorpicker textpattern',
            toolbar:
                'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
            image_advtab: true,
            imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
            templates: [{ title: 'Test template 1', content: 'Test 1' }, { title: 'Test template 2', content: 'Test 2' }],
            content_css: ['//fonts.googleapis.com/css?family=Lato:300,300i,400,400i', '//www.tinymce.com/css/codepen.min.css'],
            style_formats_merge: true,
            branding: false,
            setup: (editor: any) => this.setup(editor)
        };
        console.log(this.config);
    }

    ngOnInit() {
        if (!this.content) {
            this.content = 'test content';
        }
        console.log(this.content);
    }

    onReady() {
        console.log('editor ready!');
    }

    private setup(editor: { on: (arg0: string, arg1: { (): void; (): void; (): void }) => void; getContent: () => string }) {
        this.editor = editor;
        editor.on('blur', () => {
            this.content = editor.getContent();
            this.onDataBlur.emit(this.content);
        });
        editor.on('keyup', () => {
            this.content = editor.getContent();
            this.onKeyup.emit(this.content);
        });
        editor.on('change', () => {
            this.content = editor.getContent();
            this.onDataChanged.emit(this.content);
        });
    }
}
