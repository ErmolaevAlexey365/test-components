import React from "react";

import { useMessages } from "@/components/messages/message-controller";


export function Messages() {
    const messages = useMessages()
    return (
        <div className="fixed bottom-0">
            {messages.map((message, index) => {
                switch (message.type) {
                    case 'error':
                        return (
                            <div
                                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                                role="alert">
                                <span className="font-medium">{message.text}</span>
                            </div>
                        )
                    case 'info':
                        return (
                            <div
                                className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                                role="alert">
                                <span className="font-medium">{message.text}</span>
                            </div>
                        )

                    case 'warning':
                        return (
                            <div
                                className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
                                role="alert">
                                <span className="font-medium">{message.text}</span>
                            </div>
                        )
                }
            })}
        </div>
    )
}

