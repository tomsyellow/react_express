import React from 'react'
// import View from './view'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Home'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Req from './req'
// import Page4 from './Page4'
// const App=()=>(
//     <div>this is app</div>
// );
//使用类编写组件
// class App extends React.Component{
//     render(){
//         return(<div>这是一个div的app标签</div>)
//     }
// }
//
//
//
// export default App;

//prop
// class App extends React.Component{
//     constructor(props) {
//         super(props);
//         //构造函数
//         this.state = {
//             text: '陈西南'
//         }
//     }
//     render(){
//         let text=this.state.text
//         return (<View text={text}/>)
//     }
// }
// export default App

class App extends React.Component{
    render(){
        return(
            <Router>
            <div>
                <Route path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/page2" component={Page2}/>
                <Route path="/page3" component={Page3}/>
                <Route path="/req" component={Req}/>
            </div>
            </Router>
        )
    }
}

export default App