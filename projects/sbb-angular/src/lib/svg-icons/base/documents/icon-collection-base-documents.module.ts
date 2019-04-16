/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { NgModule } from '@angular/core';

import { IconDocGenericModule } from './icon-doc-generic.module';
import { IconDocModule } from './icon-doc.module';
import { IconImageModule } from './icon-image.module';
import { IconPdfModule } from './icon-pdf.module';
import { IconSoundModule } from './icon-sound.module';
import { IconVideoModule } from './icon-video.module';
import { IconZipModule } from './icon-zip.module';

@NgModule({
  imports: [
    IconDocGenericModule,
    IconDocModule,
    IconImageModule,
    IconPdfModule,
    IconSoundModule,
    IconVideoModule,
    IconZipModule,
  ],
  exports: [
    IconDocGenericModule,
    IconDocModule,
    IconImageModule,
    IconPdfModule,
    IconSoundModule,
    IconVideoModule,
    IconZipModule,
  ]
})
export class IconCollectionBaseDocumentsModule { }