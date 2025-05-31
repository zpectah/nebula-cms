import { ReactNode } from 'react';
import { DetailLocaleToggle } from '../DetailLocaleToggle';

interface LocalesContainerFieldProps {
  locales: string[];
  locale: string;
  onChange: (locale: string) => void;
  renderLocale: (locale: string) => ReactNode;
}

const LocalesContainerField = ({ locales = [], locale, onChange, renderLocale }: LocalesContainerFieldProps) => {
  return (
    <>
      {locales.length > 1 && <DetailLocaleToggle locales={locales} locale={locale} onChange={onChange} />}
      {locales.map((loc) => renderLocale(loc))}
    </>
  );
};

export default LocalesContainerField;
