/* eslint-disable @typescript-eslint/no-redeclare */

export type ContactProximity =
  | 'TOUCHED_FLUID'
  | 'PHYSICAL_CONTACT'
  | 'CLOTHES_OR_OTHER'
  | 'CLOSE_CONTACT'
  | 'FACE_TO_FACE_LONG'
  | 'MEDICAL_UNSAFE'
  | 'SAME_ROOM'
  | 'AIRPLANE'
  | 'FACE_TO_FACE_SHORT'
  | 'MEDICAL_SAFE'
  | 'MEDICAL_SAME_ROOM'
  | 'AEROSOL'
  | 'MEDICAL_DISTANT'
  | 'MEDICAL_LIMITED';

export const ContactProximity = {
  TOUCHEDFLUID: 'TOUCHED_FLUID' as ContactProximity,
  PHYSICALCONTACT: 'PHYSICAL_CONTACT' as ContactProximity,
  CLOTHESOROTHER: 'CLOTHES_OR_OTHER' as ContactProximity,
  CLOSECONTACT: 'CLOSE_CONTACT' as ContactProximity,
  FACETOFACELONG: 'FACE_TO_FACE_LONG' as ContactProximity,
  MEDICALUNSAFE: 'MEDICAL_UNSAFE' as ContactProximity,
  SAMEROOM: 'SAME_ROOM' as ContactProximity,
  AIRPLANE: 'AIRPLANE' as ContactProximity,
  FACETOFACESHORT: 'FACE_TO_FACE_SHORT' as ContactProximity,
  MEDICALSAFE: 'MEDICAL_SAFE' as ContactProximity,
  MEDICALSAMEROOM: 'MEDICAL_SAME_ROOM' as ContactProximity,
  AEROSOL: 'AEROSOL' as ContactProximity,
  MEDICALDISTANT: 'MEDICAL_DISTANT' as ContactProximity,
  MEDICALLIMITED: 'MEDICAL_LIMITED' as ContactProximity,
};
