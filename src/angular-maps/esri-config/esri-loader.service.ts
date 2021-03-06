// Workaround for: https://github.com/bazelbuild/rules_nodejs/issues/1265
/// <reference types="arcgis-js-api" />

import { Inject, Injectable, Optional } from '@angular/core';
import esriLoader from 'esri-loader';

import { SBB_ESRI_CONFIG_TOKEN } from './esri-config.token';
import { SbbEsriConfiguration } from './esri-configuration';
import { SbbEsriConfigConsts } from './esri-standard-values.const';

@Injectable({
  providedIn: 'root',
})
export class SbbEsriLoaderService {
  private _configuration: Promise<void>;

  constructor(
    /** Inject an optional configuration to configure arcgis-js-api settings. */
    @Optional() @Inject(SBB_ESRI_CONFIG_TOKEN) private _config: SbbEsriConfiguration
  ) {}

  /** Loads up to twelve specified ESRI-modules and returns it's constructors. */
  load<T>(esriModules: string[]): Promise<[T]>;
  load<T1, T2>(esriModules: string[]): Promise<[T1, T2]>;
  load<T1, T2, T3>(esriModules: string[]): Promise<[T1, T2, T3]>;
  load<T1, T2, T3, T4>(esriModules: string[]): Promise<[T1, T2, T3, T4]>;
  load<T1, T2, T3, T4, T5>(esriModules: string[]): Promise<[T1, T2, T3, T4, T5]>;
  load<T1, T2, T3, T4, T5, T6>(esriModules: string[]): Promise<[T1, T2, T3, T4, T5, T6]>;
  load<T1, T2, T3, T4, T5, T6, T7>(esriModules: string[]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
  load<T1, T2, T3, T4, T5, T6, T7, T8>(
    esriModules: string[]
  ): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
  load<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    esriModules: string[]
  ): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
  load<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    esriModules: string[]
  ): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
  load<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
    esriModules: string[]
  ): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11]>;
  load<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(
    esriModules: string[]
  ): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12]>;
  load(esriModules: string[]): Promise<any[]> {
    const url =
      this._config && this._config.arcgisJsUrl
        ? this._config.arcgisJsUrl
        : SbbEsriConfigConsts.arcgisJsUrl;

    if (!this._configuration) {
      this._configuration = this._configure(url);
    }

    return this._configuration.then(() => esriLoader.loadModules(esriModules, { url }));
  }

  /** @docs-private */
  private _configure(url: string) {
    const cssUrl = this._config?.cssUrl ?? SbbEsriConfigConsts.cssUrl;
    esriLoader.loadCss(cssUrl);

    return esriLoader.loadModules(['esri/config'], { url }).then((configModule) => {
      const esriConfig = configModule[0] as __esri.config;

      esriConfig.portalUrl = this._config?.portalUrl ?? SbbEsriConfigConsts.arcgisPortalUrl;
      const trustedServers = this._config?.trustedServers ?? [];
      esriConfig.request.trustedServers!.push(
        ...SbbEsriConfigConsts.trustedServers.concat(trustedServers)
      );

      const originsWithCredentials = SbbEsriConfigConsts.originsWithCredentialsReuqired;
      const originsWithCredentialsRequired = this._config?.originsWithCredentialsRequired
        ? originsWithCredentials.concat(this._config.originsWithCredentialsRequired)
        : originsWithCredentials;

      esriConfig.request.interceptors!.push({
        before: (params: any) => {
          if (originsWithCredentialsRequired.some((o) => params.url.includes(o))) {
            params.requestOptions.withCredentials = true;
          }
        },
        error: () => {},
      });
    });
  }
}
