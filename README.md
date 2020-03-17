# RichEditor

This is the repo for my tutorial titled **[A Detailed Approach of Setting up CKEditor with Angular](https://medium.com/swlh/a-detailed-approach-of-setting-up-ckeditor-with-angular-e546610157ba)**.

## Instruction of Use

- Clone the repo
- Run `cd ckeditor-image-upload`
- Using your text editor of choice, make the following changes on line 29 of `src/app/editor/editor.component.ts`
  - Change `<your_cloud_name>` to yours obtained from Cloudinary
  - Change `<your_unsigned_upload_preset>` to yours obtained from cloudinary. Follow instructions found [here](https://support.cloudinary.com/hc/en-us/articles/360004967272-Upload-Preset-Configuration) to get an unsiged pload preset.
- Install all dependencies using `npm install`
- Start the application using `npm start`
- Launch the app in your browser on `localhost:4200` or whatever port and host you have setup on.
- Try to add an image to the rich text editor.
