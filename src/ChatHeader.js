import React from 'react'
import "./ChatHeader.css"
function ChatHeader() {
    return (
        <div className="chatHeader">
            <h3>I am the header</h3>
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    Test Channel Name
                </h3>
            </div>
        </div>
    )
}

export default ChatHeader
