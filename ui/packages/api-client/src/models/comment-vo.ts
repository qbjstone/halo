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
import { CommentSpec } from './comment-spec';
// May contain unused imports in some cases
// @ts-ignore
import { CommentStatsVo } from './comment-stats-vo';
// May contain unused imports in some cases
// @ts-ignore
import { CommentStatus } from './comment-status';
// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata';
// May contain unused imports in some cases
// @ts-ignore
import { OwnerInfo } from './owner-info';

/**
 * A chunk of items.
 * @export
 * @interface CommentVo
 */
export interface CommentVo {
    /**
     * 
     * @type {Metadata}
     * @memberof CommentVo
     */
    'metadata': Metadata;
    /**
     * 
     * @type {OwnerInfo}
     * @memberof CommentVo
     */
    'owner': OwnerInfo;
    /**
     * 
     * @type {CommentSpec}
     * @memberof CommentVo
     */
    'spec': CommentSpec;
    /**
     * 
     * @type {CommentStatsVo}
     * @memberof CommentVo
     */
    'stats': CommentStatsVo;
    /**
     * 
     * @type {CommentStatus}
     * @memberof CommentVo
     */
    'status'?: CommentStatus;
}

