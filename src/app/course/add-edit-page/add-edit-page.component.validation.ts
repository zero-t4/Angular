import {AbstractControl} from "@angular/forms";

export const titleValidation = (control: AbstractControl): any => {
  const isValid = control.value.length < 50;
  return isValid;
};

export const descriptionValidation = (control: AbstractControl): any => {
  const isValid = control.value.length < 500;
  return isValid;
};

export const durationValidation = (control: AbstractControl): any => {
  const isValid = /^[0-9]*$/.test(control.value);
  return isValid;
};
