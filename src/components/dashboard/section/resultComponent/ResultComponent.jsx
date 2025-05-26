import { useContext } from "react";
import "./resultComponent.css"
import { Result, Theme } from "../../../context/Context";

const ResultComponent = () => {
    const {result, setResult} = useContext(Result)
    const {theme, setTheme} = useContext(Theme)

    return(
        <div className={`result-container`}>
        {result.map((item, key) => (
           <div key={key} className={`result-window`}>
            <h2>{item.email}</h2>
            <p>Domain: {item.domain ? item.domain : "Not available"}</p>
            <div className="result-details">
            <p>Disposable: {item.disposable ? <i className="fa-solid fa-check" style={{color: "red"}}></i> : <i className="fa-solid fa-xmark" style={{color: "green"}}></i>}</p>
            <p>DNS: {item.dns ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}</p> 
            <p>Format: {item.format ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>} </p>
            <p>Whitelist: {item.whitelist ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}</p>    
            </div>
            
           </div> 
        ))}
        
        </div>
    )


}

export default ResultComponent;