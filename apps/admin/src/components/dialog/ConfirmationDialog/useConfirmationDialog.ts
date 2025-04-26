import { useState } from 'react';

export const useConfirmationDialog = () => {
  const [open, setOpen] = useState(false);

  const openHandler = () => setOpen(true);

  const closeHandler = () => setOpen(false);

  return {
    open,
    onOpen: openHandler,
    onClose: closeHandler,
  };
};
