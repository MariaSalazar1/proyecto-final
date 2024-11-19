import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./components/inicio";





class Router extends Component{

    render(){
        return(
            
            
            <BrowserRouter>
                
                    <Switch>
                        <Route exact path="/" component={Inicio}/> 
                        <Route exact path="/inicio" component={Inicio}/>                                                                                   
                    </Switch>
                

            </BrowserRouter>
        );
    }

}

export default  Router ;