import React, { Component } from 'react';

export default class Portfolio extends Component {
    render () {
        let resumeData = this.props.resumeData
        return (
            <section id='portfolio'>
                <div className='row'>
                    <div className='twelve columns collapsed'>
                        <h1>Check out my projects!</h1>
                        <div id='portfolio wrapper' className='bgrid-quarters s-bgrid-thirds cf' alt="">
                            {
                                resumeData.portfolio && resumeData.portfolio.map(item => {
                                    return (
                                        <div className='columns portfolio-item'>
                                            <div className='item wrap'>
                                                <a href='#modal-01'>
                                                    <img src={`${item.imgurl}`} className='item-img' />
                                                </a>
                                            
                                    )
                                })
                            }                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}