import { WithChildren } from '@common';

interface SettingsFormProps extends WithChildren {}

// TODO

const SettingsForm = ({ children }: SettingsFormProps) => {
  return <form style={{ display: 'flex', width: '100%' }}>{children}</form>;
};

export default SettingsForm;
