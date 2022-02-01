import { FormEvent } from 'react';

export type IMask = 'creditCardNumber' | 'creditCardExpirationDate';

function creditCardNumber(e: FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 19;

  const { value } = e.currentTarget;

  e.currentTarget.value = value
    .replace(/\D/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim();

  return e;
}

function creditCardExpirationDate(e: FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 5;

  const { value } = e.currentTarget;

  e.currentTarget.value = value
    .replace(/\D/g, '')
    .replace(/(\d{2})/g, '$1/')
    .trim();

  return e;
}

export default {
  creditCardNumber,
  creditCardExpirationDate,
};
