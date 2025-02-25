import React from "react";

export const toggleDrawer =
    (setOpen: React.Dispatch<React.SetStateAction<boolean>>) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setOpen(prev => !prev);
        };