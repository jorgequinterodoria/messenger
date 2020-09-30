import React,{forwardRef} from 'react'
import { Card, CardContent,Typography } from '@material-ui/core';

import './../css/Message.css'

const Message = forwardRef(({username,message},ref) =>{
    const isUser = username === message.username
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser? "message__userCard" : "message__guestCard"}>
                <CardContent className="message__contents">
                    <Typography 
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${message.username || 'Desconocido'} dice: `} {message.message}
                        </Typography>
                </CardContent>
            </Card>
        </div>
            
    )
})

export default Message
