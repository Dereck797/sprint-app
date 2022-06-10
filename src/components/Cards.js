import React from 'react'
import './cards.css'

class Card extends React.Component {
    render(){
        return (
            <div className='parent'>
                <div>
                    <h1>Thechnique guiedes</h1>
                    <div>
                    <h3>Descripción</h3>
                    <p>Aprender alguna cosa</p>
                    <h3>Motivación</h3>
                    <p>Aprender alguna cosa</p>
                    </div>
                    
                </div>
                <div>
                    <h1># SPRINT</h1>
                    <div className='sprintapp__checktime'>
                        <h3>Objetivos</h3>
                        <h3>Reloj</h3>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Card