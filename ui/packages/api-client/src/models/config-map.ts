/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.20.11-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata';

/**
 * 
 * @export
 * @interface ConfigMap
 */
export interface ConfigMap {
    /**
     * 
     * @type {string}
     * @memberof ConfigMap
     */
    'apiVersion': string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ConfigMap
     */
    'data'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ConfigMap
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof ConfigMap
     */
    'metadata': Metadata;
}

