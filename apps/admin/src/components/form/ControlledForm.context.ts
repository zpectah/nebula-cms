import { createContext, useContext } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface IControlledFormContext<T extends FieldValues> {
  form?: UseFormReturn<T>;
}

export const ControlledFormContext = createContext<IControlledFormContext<FieldValues>>({});

export const ControlledFormContextProvider = ControlledFormContext.Provider;
export const ControlledFormContextConsumer = ControlledFormContext.Consumer;

export const useControlledFormContext = () => useContext<IControlledFormContext<FieldValues>>(ControlledFormContext);
