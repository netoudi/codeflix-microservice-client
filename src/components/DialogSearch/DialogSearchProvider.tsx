import React from 'react';

import DialogSearch from 'components/DialogSearch';
import DialogSearchContext from 'components/DialogSearch/DialogSearchContext';

export interface DialogSearchProviderProps {
  children: React.ReactNode;
}

const DialogSearchProvider: React.FunctionComponent<DialogSearchProviderProps> =
  (props) => {
    const [open, setOpen] = React.useState(false);

    const actions = React.useMemo(
      () => ({
        show: () => setOpen(true),
        hide: () => setOpen(false),
      }),
      []
    );

    return (
      <DialogSearchContext.Provider value={actions}>
        {props.children}
        <DialogSearch open={open} />
      </DialogSearchContext.Provider>
    );
  };

export default DialogSearchProvider;
