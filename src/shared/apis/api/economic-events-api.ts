/* tslint:disable */
/* eslint-disable */
/**
 * Stocky Backend
 * Stocky Backend API description
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  type RequestArgs,
  BaseAPI,
  RequiredError,
  operationServerMap
} from "../base";
// @ts-ignore
import type { EconomicEvent } from "../model";
/**
 * EconomicEventsApi - axios parameter creator
 * @export
 */
export const EconomicEventsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 경제 이벤트 조회
     * @param {string} endDate
     * @param {string} [country] 국가 코드
     * @param {EconomicEventControllerFindAllImpact} [impact] 영향도
     * @param {string} [startDate] 시작 날짜
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    economicEventControllerFindAll: async (
      endDate: string,
      country?: string,
      impact?: EconomicEventControllerFindAllImpact,
      startDate?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'endDate' is not null or undefined
      assertParamExists("economicEventControllerFindAll", "endDate", endDate);
      const localVarPath = `/economic-events`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (impact !== undefined) {
        localVarQueryParameter["impact"] = impact;
      }

      if (startDate !== undefined) {
        localVarQueryParameter["startDate"] =
          (startDate as any) instanceof Date ? (startDate as any).toISOString() : startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["endDate"] =
          (endDate as any) instanceof Date ? (endDate as any).toISOString() : endDate;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};

/**
 * EconomicEventsApi - functional programming interface
 * @export
 */
export const EconomicEventsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = EconomicEventsApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary 경제 이벤트 조회
     * @param {string} endDate
     * @param {string} [country] 국가 코드
     * @param {EconomicEventControllerFindAllImpact} [impact] 영향도
     * @param {string} [startDate] 시작 날짜
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async economicEventControllerFindAll(
      endDate: string,
      country?: string,
      impact?: EconomicEventControllerFindAllImpact,
      startDate?: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EconomicEvent>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.economicEventControllerFindAll(
        endDate,
        country,
        impact,
        startDate,
        options
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["EconomicEventsApi.economicEventControllerFindAll"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    }
  };
};

/**
 * EconomicEventsApi - factory interface
 * @export
 */
export const EconomicEventsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = EconomicEventsApiFp(configuration);
  return {
    /**
     *
     * @summary 경제 이벤트 조회
     * @param {EconomicEventsApiEconomicEventControllerFindAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    economicEventControllerFindAll(
      requestParameters: EconomicEventsApiEconomicEventControllerFindAllRequest,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<Array<EconomicEvent>> {
      return localVarFp
        .economicEventControllerFindAll(
          requestParameters.endDate,
          requestParameters.country,
          requestParameters.impact,
          requestParameters.startDate,
          options
        )
        .then(request => request(axios, basePath));
    }
  };
};

/**
 * Request parameters for economicEventControllerFindAll operation in EconomicEventsApi.
 * @export
 * @interface EconomicEventsApiEconomicEventControllerFindAllRequest
 */
export interface EconomicEventsApiEconomicEventControllerFindAllRequest {
  /**
   *
   * @type {string}
   * @memberof EconomicEventsApiEconomicEventControllerFindAll
   */
  readonly endDate: string;

  /**
   * 국가 코드
   * @type {string}
   * @memberof EconomicEventsApiEconomicEventControllerFindAll
   */
  readonly country?: string;

  /**
   * 영향도
   * @type {'low' | 'medium' | 'high'}
   * @memberof EconomicEventsApiEconomicEventControllerFindAll
   */
  readonly impact?: EconomicEventControllerFindAllImpact;

  /**
   * 시작 날짜
   * @type {string}
   * @memberof EconomicEventsApiEconomicEventControllerFindAll
   */
  readonly startDate?: string;
}

/**
 * EconomicEventsApi - object-oriented interface
 * @export
 * @class EconomicEventsApi
 * @extends {BaseAPI}
 */
export class EconomicEventsApi extends BaseAPI {
  /**
   *
   * @summary 경제 이벤트 조회
   * @param {EconomicEventsApiEconomicEventControllerFindAllRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EconomicEventsApi
   */
  public economicEventControllerFindAll(
    requestParameters: EconomicEventsApiEconomicEventControllerFindAllRequest,
    options?: RawAxiosRequestConfig
  ) {
    return EconomicEventsApiFp(this.configuration)
      .economicEventControllerFindAll(
        requestParameters.endDate,
        requestParameters.country,
        requestParameters.impact,
        requestParameters.startDate,
        options
      )
      .then(request => request(this.axios, this.basePath));
  }
}

/**
 * @export
 */
export const EconomicEventControllerFindAllImpact = {
  Low: "low",
  Medium: "medium",
  High: "high"
} as const;
export type EconomicEventControllerFindAllImpact =
  (typeof EconomicEventControllerFindAllImpact)[keyof typeof EconomicEventControllerFindAllImpact];
