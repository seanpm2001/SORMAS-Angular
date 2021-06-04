/**
 * SORMAS REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.51.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Sex } from './sex';

export interface JournalPersonDto {
  uuid?: string;
  pseudonymized?: boolean;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  phone?: string;
  birthdateDD?: number;
  birthdateMM?: number;
  birthdateYYYY?: number;
  sex?: Sex;
  latestFollowUpEndDate?: Date;
}
