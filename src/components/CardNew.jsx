import React from "react"




const CardNew = (props) => {
    return(
        <div className="card rounded-3 m-2" style={{width:"22rem", height: "23rem"}}>
            <div>
                <img 
                    src={props.sourceImage} 
                    alt="Icono Fuente Diario"
                    className="img-fluid"
                    style={{width:"4rem" , marginLeft:"0.5rem", height:"2rem"}}
                />
                <hr className="mt-1 mb-0"/>  
            </div>

            <div className="card-body">
               
                <div className="position-relative">
                    <img
                        className="rounded-3"
                        src={props.newImage} 
                        alt="foto principal"
                        width="100%"
                        height="250px"
                    />
                    <h4 className=" card-title text-warning position-absolute bottom-0 text-center fw-bold">{props.title}</h4>
                </div>
              
            </div>
            
            <div className="mx-2">
                <p>|{props.topic}| {props.date}</p>  
            </div>
        </div>
        
    )
}

export default CardNew;