import { ICardExpiration } from './index';

export function cardMask(value: string | number | undefined) {
  if (!value) {
    return '**** **** **** ****';
  }

  const matches = `${value}`
    .slice(0, 16)
    .padEnd(16, '*')
    .match(/^([0-9|*]{4})([0-9|*]{4})([0-9|*]{4})([0-9|*]{4})$/);

  if (!matches) {
    return value;
  }

  return `${matches[1]} ${matches[2]} ${matches[3]} ${matches[4]}`;
}

export function expirationMask(value: ICardExpiration | undefined) {
  const month = `${value?.month}`.padStart(2, '0');
  const year = `${value?.year}`.padStart(2, '0');
  const date = `${month}${year}`;

  if (!date) {
    return '00/00';
  }

  const matches = `${date}`
    .slice(0, 4)
    .padEnd(4, '0')
    .match(/^(\d{2})(\d{2})$/);

  if (!matches) {
    return date;
  }

  return `${matches[1]}/${matches[2]}`;
}

export function cvvMask(value: string | number | undefined) {
  if (!value) {
    return '***';
  }

  const matches = `${value}`
    .slice(0, 3)
    .padEnd(3, '*')
    .match(/^([0-9|*]{3})$/);

  if (!matches) {
    return value;
  }

  return matches[1];
}
