interface DetailLocaleToggleProps {
  locales: string[];
  locale: string;
  onChange: (locale: string) => void;
}

const DetailLocaleToggle = ({ locales, locale, onChange }: DetailLocaleToggleProps) => {
  return (
    <div>
      {locales.map((loc: string) => (
        <button key={loc} onClick={() => onChange(loc)}>
          {loc}
        </button>
      ))}
    </div>
  );
};

export default DetailLocaleToggle;
