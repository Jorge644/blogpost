import React from "react"




const CardNew = () => {
    return(
        <div className="card rounded-3 m-2" style={{width:"25rem"}}>
            <div>
                <img 
                    src="https://www.infobae.com/pf/resources/images/logo_infobae_naranja.svg?d=654" 
                    alt="Icono Fuente Diario"
                    className="img-fluid"
                    style={{width:"4rem" , marginLeft:"0.5rem"}}
                />
                <hr className="mt-1 mb-0"/>  
            </div>

            <div className="card-body">
               
                <div className="position-relative">
                    <img
                        className="rounded-3"
                        src="https://www.infobae.com/new-resizer/7SVIVlT083hbDOnV4natqyKcvXM=/992x661/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/SK7XZVSKKBGBNILKE5FYN23YPQ.jpg" 
                        alt="foto principal"
                        width="100%"
                    />
                    <h4 className=" card-title text-warning position-absolute bottom-0 text-center fw-bold">Marcelo Gallardo, el mejor entrenador de los último 10 años</h4>
                </div>
              
            </div>
            
            <div className="mx-2">
                <p>|Deportes| 29 de Mayo 2021</p>  
            </div>
        </div>
        
    )
}

export default CardNew;