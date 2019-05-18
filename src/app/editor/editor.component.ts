import { Component, OnInit } from '@angular/core';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import { CloudinaryImageUploadAdapter } from 'ckeditor-cloudinary-uploader-adapter';
import { IArticle } from 'src/models/IArticle';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  Editor = BalloonEditor;
  editorConfig = {
    placeholder: 'Type the content here!',
    extraPlugins: [ this.imagePluginFactory ],
  };
  article: IArticle;

  constructor() {
    this.article = {
      title: '',
      text: '',
    };
  }

  imagePluginFactory(editor) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
      return new CloudinaryImageUploadAdapter( loader, 'dhll7rphp', 'wz5of6ga', [ 160, 500, 1000, 1052 ]);
    };
  }

  ngOnInit() {}

  onSubmit() {}

}
