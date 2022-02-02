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

  e.currentTarget.value = e.currentTarget.value
    .replace(/^([1-9]\/|[2-9])$/g, '0$1/')
    .replace(/^(0[1-9]|1[0-2])$/g, '$1/')
    .replace(/^([0-1])([3-9])$/g, '0$1/$2')
    .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2')
    .replace(/^([0]+)\/|[0]+$/g, '0')
    .replace(/[^\d/]|^[/]*$/g, '')
    .replace(/\/\//g, '/');

  return e;
}

export default {
  creditCardNumber,
  creditCardExpirationDate,
};
