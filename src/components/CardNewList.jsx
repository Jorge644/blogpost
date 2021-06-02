import React, { useEffect, useState } from 'react';
import CardNew from './CardNew';
import getInitData from '../utilities/InitData';

const CardNewList = () =>{
    const [data, setData] = useState('')
    const [isDataAvailable, setDataAvailable] = useState(false);

    useEffect(async ()=>{
        const news = await getInitData();
        setData(news);
        setDataAvailable(true);
    },[])

    if(isDataAvailable){
        return(
            <React.Fragment>
                {data.map((item,index) =>{
                    return(
                        <div key={index}>
                            <CardNew
                                date = {item.date}
                                topic = {item.topic}
                                title = {item.title}
                                sourceImage = {item.source}
                                newImage = {item.pathImage}
                            />
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }else{
        return(
            <h1>data no disponible</h1>
        )
    }
}

export default CardNewList;

