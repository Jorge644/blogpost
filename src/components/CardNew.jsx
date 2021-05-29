import React from "react"




const CardNew = () => {
    return(
        <div className="card" style={{width: "23rem"}}>
            <div className="card-header">
                <h3 className=" card-title text-warning">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                <p>29 de Mayo 2021</p>
            </div>

            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus deleniti, iste culpa mollitia ipsum minus nesciunt, quam maiores illo laborum fuga repellat odio, voluptatem autem nemo alias est corrupti?</p>
                <img
                    src="https://www.infobae.com/new-resizer/7SVIVlT083hbDOnV4natqyKcvXM=/992x661/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/SK7XZVSKKBGBNILKE5FYN23YPQ.jpg" 
                    alt="foto principal"
                    width="100%"
                />
            </div>
            
            <div className="card-footer">
                <p>Infobae - Sección Deportes</p>
            </div>
        </div>
        
    )
}

export default CardNew;