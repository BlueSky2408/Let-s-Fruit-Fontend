import React from 'react'
import "./Bubble.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

const Bubble = () => {
    return (
        <div className="bubble">
            <div id="chat-bubble">
                <div id="chat-icon">
                    <FontAwesomeIcon icon={faFacebookMessenger} size='2x'/>
                </div>
            </div>

            <div id="chat-window">
                <div id="chat-header">
                    <div id="chat-title">Messenger</div>
                    <div id="chat-close">&times;</div>
                </div>
                <iframe src="https://www.messenger.com/178075911456278" frameborder="0"></iframe>
            </div>

        </div>
    )
}

export default Bubble