import { useSyncExternalStore} from 'react';
type Notification = { id: number, message: string }

type Listener = () => void;

let notifications: Notification[] = [];
let listeners: Listener[] = []
const notify = () => {
    listeners.forEach((l) => l())
}

const showNotification = (message: string) => {
    const id = Date.now();
    notifications = [...notifications, { id, message }];

    notify()

    setTimeout(() => {
        notifications = notifications.filter((notification) =>  notification.id != id);
        notify()
    }, 6000);
}

const deleteNotification = (id: number) => {
    notifications = notifications.filter((notification) =>  notification.id != id);
    notify()
}

const clearNotifications = () => {
    notifications = [];
    notify()
}

const useNotifications = () => {
    const data =  useSyncExternalStore(
        (callback) => {
            listeners.push(callback);
            return () => {
                listeners = listeners.filter((l) => l !== callback);
            }
        },
        () => notifications,
    )
    return { notifications: data, deleteNotification }

}

export { showNotification, useNotifications, deleteNotification, clearNotifications }