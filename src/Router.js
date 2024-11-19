import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  Nosotros  from "./components/nosotros";

import  Nuestros_servicios  from "./components/nuestros_servicios";
import Inicio from "./components/inicio";
import ContentServices from "./components/contentservices";
import valform from "./components/ContactForm";
import Datos from "./components/leyDatos";




class Router extends Component{

    render(){
        return(
            
            
            <BrowserRouter>
                
                    <Switch>
                        <Route exact path="/" component={Inicio}/> 
                        <Route exact path="/inicio" component={Inicio}/>                    
                        <Route exact path="/nosotros" component={Nosotros}/>
                        <Route exact path="/nuestros_servicios" component={Nuestros_servicios}/>
                        <Route exact path="/content-servicios" component={ContentServices}/>
                        <Route exact path="/contactanos" component={valform}/>
                        <Route exact path="/leyDatos" component={Datos}/>
                        
                        

                    </Switch>
                

            </BrowserRouter>
        );
    }

}

export default  Router ;