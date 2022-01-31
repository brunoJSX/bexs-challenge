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
