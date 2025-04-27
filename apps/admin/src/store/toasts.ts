import { create } from 'zustand';
import { getRandomId } from '@common';
import { ToastsItem, ToastsItemSeverity } from '../types';
import { toastsItemSeverityKeys } from '../enums';

interface ToastsStore {
  toasts: ToastsItem[];
  addToast: (title: string, severity?: ToastsItemSeverity, autoclose?: boolean) => void;
  removeToast: (id: string) => void;
}

const useToastsStore = create<ToastsStore>((set) => {
  const toasts: ToastsItem[] = [];

  const removeToastHandler = (id: string) => {
    const tmpToasts = [...toasts];
    const index = tmpToasts.findIndex((item) => item.id === id);

    if (index > -1) tmpToasts.splice(index, 1);

    set({ toasts: tmpToasts });
  };

  const addToastHandler = (
    title: string,
    severity: ToastsItemSeverity = toastsItemSeverityKeys.info,
    autoclose?: boolean
  ) => {
    const tmpToasts = [...toasts];
    const id = getRandomId();

    tmpToasts.push({
      id,
      title,
      severity,
    });

    if (autoclose) {
      setTimeout(() => {
        removeToastHandler(id);
      }, 4000);
    }

    set({ toasts: tmpToasts });
  };

  return {
    toasts,
    removeToast: removeToastHandler,
    addToast: addToastHandler,
  };
});

export default useToastsStore;
