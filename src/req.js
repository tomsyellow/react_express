import React from 'react'

class Req extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    //发送请求数据函数
    getDate(){
        //url
        fetch('http://127.0.0.1:8000/',{
            method:'GET'
        }).then(res=>res.text()).then(data=>{
            //对text转化为字符串
            this.setState({text:data})
            // console.log(res.text())
            console.log(data)
        })
    }
    //react渲染前条用  挂载
    componentWillMount(){
        this.getDate()
    }
    render(){
        return(
            <div>
            <div>{this.state.text}</div>
            </div>)
    }
}


export default Req