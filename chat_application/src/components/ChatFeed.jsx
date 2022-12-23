import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) =>{
    const { chats,activeChat, username, messages} = props
    const chat=chats && chats[activeChat]
    console.log(chat)
    return (
        <div>
            Yaha pe karenge
        </div>
    )
}

export default ChatFeed