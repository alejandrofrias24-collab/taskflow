import {
 useEffect,
 useState
}
from "react";

import MainLayout
from "../components/layout/MainLayout";

import {
 getNotifications,
 markAsRead
}
from "../services/notificationService";

export default function Notifications(){

 const [notifications,
       setNotifications]
 = useState([]);

 useEffect(() => {

   load();

 }, []);

 const load =
 async () => {

  const data =
  await getNotifications();

  setNotifications(data);

 };

 return(

  <MainLayout>

   <h1>
     Notificaciones
   </h1>

   {
    notifications.map(n => (

      <div
       key={n._id}
       className="notification-card"
      >

        <h4>
          {n.mensaje}
        </h4>

        <button
         onClick={() =>
         markAsRead(n._id)}
        >
         Marcar leída
        </button>

      </div>

    ))
   }

  </MainLayout>

 );

}