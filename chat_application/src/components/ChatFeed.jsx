import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) =>{
    
    const { chats,activeChat, username, messages} = props
    const chat=chats && chats[activeChat]
    const renderReadReceipts= (message,isMyMessage)=>{
        return chat.people.map((person,index)=>person.last_read===message.id && (
            <div className="read-receipt"
            key={`read_${index}`}
            style={{float:isMyMessage?'right':'left',
            backgroundImage:`url(${person?.person?.avatar})`}}
            />
        ))
    }
    
    const renderMessages = () =>{
        
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
                        ? <MyMessage message={message}/> 
                        : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className="read-receipts" style={{marginLeft: isMyMessage ? '18px' : '0px',marginRight: isMyMessage ? '0px' : '68px'}}>
                        {renderReadReceipts(message,isMyMessage)}
                    </div>
                </div>
            )

        })
    }
    
    if(!chat) return 'loading...'
    return (
        <div className='chat-feed'>
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {
                        chat.people.map((person) =>` ${person.person.username}`)
                    }
                </div>
            </div>
            {renderMessages()}
            <div style={{height:'100px'}}/>
            <div className="message-form-container">
                <MessageForm {...props} chatID={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed