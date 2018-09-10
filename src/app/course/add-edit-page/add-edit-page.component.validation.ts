import {AbstractControl} from "@angular/forms";

export const durationValidation = (control: AbstractControl): any => {
  const isValid = /^[0-9]*$/.test(control.value);
  return isValid;
};
