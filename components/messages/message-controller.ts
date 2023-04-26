import { useEffect, useState } from "react";
import EventEmitter from "events";

import { Subscription } from "@/utils/subscription/subscription";

type MessageType = 'info' | 'error' | 'warning'
type MessageDuration = 'short' | 'medium' | 'long' | 'forever' | number

type Message = {
    type: MessageType,
    duration: MessageDuration
    text: string
}

export type MessageControllerEvents = 'messagesUpdated'

class MessageController extends EventEmitter {

    readonly messages: Message[] = []

    subscribe(event: MessageControllerEvents, handle: (...args: any[]) => void): Subscription {
        this.on(event, handle)

        return new Subscription(() => {
            this.removeListener(event, handle)
        })
    }

    show(message: Message) {
        this.messages.push(message)
        this.scheduleCleanup(message)
        this.emit('messagesUpdated', this.messages)
    }

    clearMessage(message: { type?: MessageType; duration: any; text?: string }) {
        const messageIndex = this.messages.findIndex((candidate) => candidate === message)
        if (messageIndex < 0) {
            return
        }

        this.messages.splice(messageIndex, 1);
        this.emit('messagesUpdated', this.messages)
    }

    private scheduleCleanup(message: { type?: MessageType; duration: any; text?: string; }) {
        if (message.duration === 'forever') {
            return
        }

        let duration: number
        switch (message.duration) {
            case 'short':
                duration = 800
                break
            case 'medium':
                duration = 2000
                break
            case 'long':
                duration = 5000
                break
            default:
                duration = message.duration
        }

        setTimeout(() => {
            this.clearMessage(message)
        }, duration)
    }

}

const messageController = new MessageController()

export function showMessage(text: string) {
    const message: Message = {
        type: 'info',
        duration: 2000,
        text: text
    }

    messageController.show(message)
}

export function showError(text: string) {
    const message: Message = {
        type: 'error',
        duration: 'long',
        text: text
    }

    messageController.show(message)
}

export function useMessages(): Message[] {
    const [messages, setMessages] = useState(
        messageController.messages
    )

    useEffect(() => {
        const subscription = messageController.subscribe('messagesUpdated', () => {
            setMessages([...messageController.messages])
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [])

    return messages
}

export default messageController