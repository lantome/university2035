import dayjs, { Dayjs } from 'dayjs';

export enum DateFormats {
  SERVER = 'YYYY-MM-DD',
  USER = 'DD.MM.YYYY',
}

export enum Locale {
  DEFAULT = 'ru',
}

export function formatDate(date?: Dayjs | string, formatStr = DateFormats.SERVER, locale = Locale.DEFAULT): string {
  if (!date) {
    return '';
  }

  if (typeof date === 'string') {
    return dayjs(date).locale(locale).format(formatStr);
  }

  return date.locale(locale).format(formatStr);
}
