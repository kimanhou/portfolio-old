import React from 'react';
import './ContactSocial.scss';

interface IContactSocialProps {
    text : string;
    link : string;
}

const ContactSocial : React.FC<IContactSocialProps> = props => {
    return (
        <div className={`contact-social`}>
            <a href={props.link} target="_blank" className={`text`}>{props.text}</a>
            <a href={props.link} target="_blank" className={`text pink`}>{props.text}</a>
        </div>
    )
}
export default ContactSocial;

