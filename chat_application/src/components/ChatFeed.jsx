import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) =>{
    
    const { chats,activeChat, username, messages} = props
    const chat=chats && chats[activeChat]
    
    const RenderMessages = () =>{
        
        const keys=Object.keys(messages)
        
        return keys.map((key,index) => {
        
            const message=messages[key]
            const lastMessageKey= index===0 ? null : keys[index-1]
            const isMyMessage= username===message.sender.username

            return (
                <div key={`msg_${index}`} style={{width :'100%'}} >
                    <div className='message-block'>
                        {
                        isMyMessage 
                        ? <MyMessage/> 
                        : <TheirMessage/>
                        }
                    </div>
                    <div className="read-receipts" style={{marginLeft: isMyMessage ? '18px' : '0px',marginRight: isMyMessage ? '0px' : '68px'}}>
                        read-receipts
                    </div>
                </div>
            )

        })
    }
    RenderMessages()
    return (
        <div className='chat-feed'>
            <div className=""></div>
        </div>
    )
}

export default ChatFeed