import React from "react";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import {Dimmer,Loader} from "semantic-ui-react";
import Home from "./pages/Home";
import People from "./pages/People";

const App = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {

        fetch("https://swapi.dev/api/people").then((response) => {
            if(response.ok){
                return response.json();
            }
            throw response;
        }).then(data => {
            setPeople(data.results)
        }).catch(error => {
            console.log(error.message)
        })

        setLoading(false);
        
    }, []);
    return (
        <>
            <Router>
                <Navbar />
                    {
                    loading?(
                        <Dimmer active inverted>
                            <Loader inverted>Loading</Loader>
                        </Dimmer>
                    ):(
                        <Routes>
                <Route exact path="/" element={ <Home/>}/>
                <Route exact path="/people" element={<People data={people} />} />
              </Routes>
                    )
                }
              
            </Router>
        </>
    );
};

export default App;
