import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'ty'
        }

        }
        render(){
            return (<div>
                    <div>
                    this is Home!
                    </div>
                    <div>
                        <Link to="/page1/" style={{color:'blue'}}>
                        <div>点击跳转到page1</div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/page2/" style={{color:"red"}}>
                            <div>点击跳转到Page2</div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/page3/' style={{color:'pink'}}>
                            <div>点击跳转到Page3</div>
                        </Link>
                    </div>
                </div>
                )
        }
}

export default Home