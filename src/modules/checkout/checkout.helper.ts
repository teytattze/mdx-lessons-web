import * as Joi from 'joi';

export const letterOnlyRegex = /^[a-zA-Z ]+$/;
export const phoneNoRegex = /^\d{11}$/;
export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const checkoutFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNo: '',
};

export const checkoutFormValidationSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50).required(),
  email: Joi.string().pattern(emailRegex).required(),
  phoneNo: Joi.string().pattern(phoneNoRegex).required(),
});
