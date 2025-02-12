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
import { CommentEmailOwner } from './comment-email-owner';
// May contain unused imports in some cases
// @ts-ignore
import { Ref } from './ref';

/**
 * 
 * @export
 * @interface CommentRequest
 */
export interface CommentRequest {
    /**
     * 
     * @type {boolean}
     * @memberof CommentRequest
     */
    'allowNotification'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommentRequest
     */
    'content': string;
    /**
     * 
     * @type {CommentEmailOwner}
     * @memberof CommentRequest
     */
    'owner'?: CommentEmailOwner;
    /**
     * 
     * @type {string}
     * @memberof CommentRequest
     */
    'raw': string;
    /**
     * 
     * @type {Ref}
     * @memberof CommentRequest
     */
    'subjectRef': Ref;
}

