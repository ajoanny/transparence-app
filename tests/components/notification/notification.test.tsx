import {render, screen} from "@testing-library/react";
import Notification from "../../../src/components/notification/notification.tsx";
import {showNotification, deleteNotification, clearNotifications} from "../../../src/components/notification/store.ts";
import {act} from "react";

describe('Notification About', () => {
    beforeEach(() => {
        clearNotifications()
    })

    it('display page titles', async () => {
        render(<Notification />)

        act(() => {
            showNotification("Notif to delete")
        })

        const notification = await screen.findByText("Notif to delete")
        expect(notification).toBeInTheDocument()
    });

    it('delete notification page', async () => {
        vi.useFakeTimers();
        render(<Notification />)

        act(() => {
            showNotification("Notif to delete")
            deleteNotification(Date.now())
        })

        const notification = screen.queryByText("Notif to delete")
        expect(notification).not.toBeInTheDocument()

    });

    it('delete notification after 6s', async () => {
        vi.useFakeTimers();
        render(<Notification />)

        showNotification("Notif delete automatically")
        vi.advanceTimersByTime(5001)

        const notification = screen.queryByText("Notif delete automatically")
        expect(notification).not.toBeInTheDocument()
    });
});