import React from "react";

class View extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'唐毅',
            pwd:'123456'
        }
    }
    render(){
        return (
            <h1>{this.props.text}</h1>
        )
    }
}

export default View