import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id='contact'>
                <div className='row section-head'>
                    <div classname='ten columns'>
                        <p classname='lead'>
                            Please contact me with ideas, suggestions, or work below
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <aside className='eighth columns footer-widgets'>
                        <div className='widget'>
                            <h4>LinkedIn: {resumeData.linkedinId}</h4>
                        </div>
                    </aside>
                </div>
            </section>
        )
    }
}