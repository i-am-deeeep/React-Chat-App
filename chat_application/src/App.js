import { ChatEngine } from 'react-chat-engine'
import "./App.css"
import  ChatFeed  from './components/ChatFeed'

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="82ef0f1f-51cb-4d24-a646-e4947eab222f"
            userName="DEEP"
            userSecret="123123"
            renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App