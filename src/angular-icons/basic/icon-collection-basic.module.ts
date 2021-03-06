import { NgModule } from '@angular/core';

import { IconAlarmClockModule } from './icon-alarm-clock.module';
import { IconAppIconModule } from './icon-app-icon.module';
import { IconAppleBagModule } from './icon-apple-bag.module';
import { IconBackpackModule } from './icon-backpack.module';
import { IconBellModule } from './icon-bell.module';
import { IconBinocularsModule } from './icon-binoculars.module';
import { IconBrowserModule } from './icon-browser.module';
import { IconCalendarModule } from './icon-calendar.module';
import { IconCameraModule } from './icon-camera.module';
import { IconChartColumnTrendModule } from './icon-chart-column-trend.module';
import { IconChartColumnModule } from './icon-chart-column.module';
import { IconChartLineModule } from './icon-chart-line.module';
import { IconChartPieModule } from './icon-chart-pie.module';
import { IconCircleInformationSmallModule } from './icon-circle-information-small.module';
import { IconCircleInformationModule } from './icon-circle-information.module';
import { IconCirclePlayModule } from './icon-circle-play.module';
import { IconCircleQuestionMarkModule } from './icon-circle-question-mark.module';
import { IconCoinsModule } from './icon-coins.module';
import { IconContactModule } from './icon-contact.module';
import { IconControlsModule } from './icon-controls.module';
import { IconCupHotModule } from './icon-cup-hot.module';
import { IconCutleryModule } from './icon-cutlery.module';
import { IconDatabaseModule } from './icon-database.module';
import { IconDogModule } from './icon-dog.module';
import { IconDownloadLargeDataModule } from './icon-download-large-data.module';
import { IconDownloadSmallDataModule } from './icon-download-small-data.module';
import { IconDownloadModule } from './icon-download.module';
import { IconEntranceModule } from './icon-entrance.module';
import { IconEnvelopeOpenModule } from './icon-envelope-open.module';
import { IconEnvelopeModule } from './icon-envelope.module';
import { IconExitModule } from './icon-exit.module';
import { IconFaceKingModule } from './icon-face-king.module';
import { IconFaceWorkerModule } from './icon-face-worker.module';
import { IconFactoryModule } from './icon-factory.module';
import { IconFilterXModule } from './icon-filter-x.module';
import { IconFilterModule } from './icon-filter.module';
import { IconFlashlightOnModule } from './icon-flashlight-on.module';
import { IconFormModule } from './icon-form.module';
import { IconGearsModule } from './icon-gears.module';
import { IconGiftModule } from './icon-gift.module';
import { IconGlobeModule } from './icon-globe.module';
import { IconHandHeartModule } from './icon-hand-heart.module';
import { IconHandWithServiceBellModule } from './icon-hand-with-service-bell.module';
import { IconHeartModule } from './icon-heart.module';
import { IconHierarchyModule } from './icon-hierarchy.module';
import { IconLighthouseModule } from './icon-lighthouse.module';
import { IconLinkExternalModule } from './icon-link-external.module';
import { IconLinkModule } from './icon-link.module';
import { IconListModule } from './icon-list.module';
import { IconMagnifyingGlassModule } from './icon-magnifying-glass.module';
import { IconMugHotModule } from './icon-mug-hot.module';
import { IconNewspaperModule } from './icon-newspaper.module';
import { IconPaperAeroplaneModule } from './icon-paper-aeroplane.module';
import { IconPaperClipModule } from './icon-paper-clip.module';
import { IconPenModule } from './icon-pen.module';
import { IconPictureModule } from './icon-picture.module';
import { IconPinModule } from './icon-pin.module';
import { IconRocketModule } from './icon-rocket.module';
import { IconRssModule } from './icon-rss.module';
import { IconServiceBellModule } from './icon-service-bell.module';
import { IconShoppingCartModule } from './icon-shopping-cart.module';
import { IconSignExclamationPointModule } from './icon-sign-exclamation-point.module';
import { IconSignXModule } from './icon-sign-x.module';
import { IconSpannerModule } from './icon-spanner.module';
import { IconStarModule } from './icon-star.module';
import { IconSwitzerlandModule } from './icon-switzerland.module';
import { IconTagModule } from './icon-tag.module';
import { IconTargetModule } from './icon-target.module';
import { IconTorchModule } from './icon-torch.module';
import { IconTrashModule } from './icon-trash.module';
import { IconTreeModule } from './icon-tree.module';
import { IconUploadModule } from './icon-upload.module';
import { IconWalletModule } from './icon-wallet.module';
import { IconWarningLightModule } from './icon-warning-light.module';
import { IconWifiModule } from './icon-wifi.module';

const modules = [
  IconCalendarModule,
  IconChartColumnTrendModule,
  IconCoinsModule,
  IconRocketModule,
  IconShoppingCartModule,
  IconAlarmClockModule,
  IconAppleBagModule,
  IconAppIconModule,
  IconBackpackModule,
  IconBellModule,
  IconBinocularsModule,
  IconBrowserModule,
  IconCameraModule,
  IconChartColumnModule,
  IconChartLineModule,
  IconChartPieModule,
  IconCircleInformationModule,
  IconCircleInformationSmallModule,
  IconCirclePlayModule,
  IconCircleQuestionMarkModule,
  IconContactModule,
  IconControlsModule,
  IconCupHotModule,
  IconCutleryModule,
  IconDatabaseModule,
  IconDogModule,
  IconDownloadModule,
  IconDownloadLargeDataModule,
  IconDownloadSmallDataModule,
  IconEntranceModule,
  IconEnvelopeModule,
  IconEnvelopeOpenModule,
  IconExitModule,
  IconFaceKingModule,
  IconFaceWorkerModule,
  IconFactoryModule,
  IconFilterModule,
  IconFilterXModule,
  IconFlashlightOnModule,
  IconFormModule,
  IconGearsModule,
  IconGiftModule,
  IconGlobeModule,
  IconHandHeartModule,
  IconHandWithServiceBellModule,
  IconHeartModule,
  IconHierarchyModule,
  IconLighthouseModule,
  IconLinkModule,
  IconLinkExternalModule,
  IconListModule,
  IconMagnifyingGlassModule,
  IconMugHotModule,
  IconNewspaperModule,
  IconPaperAeroplaneModule,
  IconPaperClipModule,
  IconPenModule,
  IconPictureModule,
  IconPinModule,
  IconRssModule,
  IconServiceBellModule,
  IconSignExclamationPointModule,
  IconSignXModule,
  IconSpannerModule,
  IconStarModule,
  IconSwitzerlandModule,
  IconTagModule,
  IconTargetModule,
  IconTorchModule,
  IconTrashModule,
  IconTreeModule,
  IconUploadModule,
  IconWalletModule,
  IconWarningLightModule,
  IconWifiModule,
];

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: modules,
  exports: modules,
})
export class IconCollectionBasicModule {}
