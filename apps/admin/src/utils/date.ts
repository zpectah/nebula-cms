import dayjs from 'dayjs';

export const getFormattedDate = (string?: string) => dayjs(string).format('DD.MM. YYYY');
export const getFormattedDateTime = (string?: string) => dayjs(string).format('DD.MM. YYYY hh:mm:ss');
export const getFormattedTime = (string?: string) => dayjs(string).format('hh:mm:ss');
