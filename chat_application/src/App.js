import { ChatEngine } from 'react-chat-engine'
import "./App.css"
import  ChatFeed  from './components/ChatFeed'

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="6680a671-9251-41df-a825-cdaf229277fa"
            userName="Walter"
            userSecret="123123"
            renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App