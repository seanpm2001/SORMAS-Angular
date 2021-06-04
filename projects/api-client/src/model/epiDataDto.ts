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
import { AnimalCondition } from './animalCondition';
import { EpiDataBurialDto } from './epiDataBurialDto';
import { EpiDataGatheringDto } from './epiDataGatheringDto';
import { EpiDataTravelDto } from './epiDataTravelDto';
import { Vaccination } from './vaccination';
import { WaterSource } from './waterSource';
import { YesNoUnknown } from './yesNoUnknown';

export interface EpiDataDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  burialAttended?: YesNoUnknown;
  gatheringAttended?: YesNoUnknown;
  traveled?: YesNoUnknown;
  burials?: Array<EpiDataBurialDto>;
  gatherings?: Array<EpiDataGatheringDto>;
  travels?: Array<EpiDataTravelDto>;
  directContactConfirmedCase?: YesNoUnknown;
  directContactProbableCase?: YesNoUnknown;
  closeContactProbableCase?: YesNoUnknown;
  areaConfirmedCases?: YesNoUnknown;
  processingConfirmedCaseFluidUnsafe?: YesNoUnknown;
  percutaneousCaseBlood?: YesNoUnknown;
  directContactDeadUnsafe?: YesNoUnknown;
  processingSuspectedCaseSampleUnsafe?: YesNoUnknown;
  areaInfectedAnimals?: YesNoUnknown;
  sickDeadAnimals?: YesNoUnknown;
  sickDeadAnimalsDetails?: string;
  sickDeadAnimalsDate?: Date;
  sickDeadAnimalsLocation?: string;
  eatingRawAnimalsInInfectedArea?: YesNoUnknown;
  eatingRawAnimals?: YesNoUnknown;
  eatingRawAnimalsDetails?: string;
  rodents?: YesNoUnknown;
  bats?: YesNoUnknown;
  primates?: YesNoUnknown;
  swine?: YesNoUnknown;
  birds?: YesNoUnknown;
  rabbits?: YesNoUnknown;
  cattle?: YesNoUnknown;
  dogs?: YesNoUnknown;
  cats?: YesNoUnknown;
  canidae?: YesNoUnknown;
  otherAnimals?: YesNoUnknown;
  otherAnimalsDetails?: string;
  waterSource?: WaterSource;
  waterSourceOther?: string;
  waterBody?: YesNoUnknown;
  waterBodyDetails?: string;
  tickBite?: YesNoUnknown;
  fleaBite?: YesNoUnknown;
  kindOfExposureBite?: YesNoUnknown;
  kindOfExposureTouch?: YesNoUnknown;
  kindOfExposureScratch?: YesNoUnknown;
  kindOfExposureLick?: YesNoUnknown;
  kindOfExposureOther?: YesNoUnknown;
  kindOfExposureDetails?: string;
  dateOfLastExposure?: Date;
  placeOfLastExposure?: string;
  animalCondition?: AnimalCondition;
  animalVaccinationStatus?: Vaccination;
  prophylaxisStatus?: YesNoUnknown;
  dateOfProphylaxis?: Date;
  visitedHealthFacility?: YesNoUnknown;
  contactWithSourceRespiratoryCase?: YesNoUnknown;
  visitedAnimalMarket?: YesNoUnknown;
  camels?: YesNoUnknown;
  snakes?: YesNoUnknown;
}
