import { Component, OnInit } from '@angular/core';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import { CloudinaryUnsigned } from 'puff-puff/CKEditor';
import { IArticle } from 'src/models/IArticle';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    this.article = {
      title: '',
      text: '',
    };
  }

  imagePluginFactory(editor) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
      return new CloudinaryUnsigned( loader, <your_cloud_name>, <your_unsigned_upload_preset>, [ 160, 500, 1000, 1052 ]);
    };
  }

  ngOnInit() {}

  onSubmit() {
    this.router.navigate(['/view'], { state: this.article});
  }

}
