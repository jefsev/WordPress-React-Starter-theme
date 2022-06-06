import React from 'react'
import Header from '../Components/Shared/Header'
import Footer from '../Components/Shared/Footer'

const Index = (props) => {
    console.log(props)

    return (
        <div className='container mx-auto px-2'>
            <Header data={props} />
            <h1>{props.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.content }} ></div>
            <Footer />
        </div>
    )
}

export default Index