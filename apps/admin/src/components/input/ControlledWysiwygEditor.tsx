import { Controller } from 'react-hook-form';
import { useControlledFormContext } from '../form/ControlledForm.context';
import WysiwygEditor, { WysiwygEditorProps } from './WysiwygEditor';

export interface ControlledWysiwygEditorProps extends Omit<WysiwygEditorProps, 'value' | 'onChange'> {}

const ControlledWysiwygEditor = ({ name, ...rest }: ControlledWysiwygEditorProps) => {
  const { form } = useControlledFormContext();

  return (
    <Controller
      name={name}
      control={form?.control}
      render={({ field }) => (
        <WysiwygEditor name={name} value={field.value} onChange={(value) => field.onChange(value)} {...rest} />
      )}
    />
  );
};

export default ControlledWysiwygEditor;
