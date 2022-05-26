import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: function () {},
  hifrNotification: function () {},
});

export function NotiricationContextProvider(props) {
  

  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
