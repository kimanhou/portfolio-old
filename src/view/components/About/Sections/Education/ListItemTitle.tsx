import React from 'react';
import FadeInText from '../../../FadeInText/FadeInText';
import './ListItemTitle.scss';

interface IListItemTitleProps {
    aboutRef : HTMLDivElement | null;
}

const ListItemTitle : React.FC<IListItemTitleProps> = props => {
    
    return(
        <div className={`about-education-list-item-title`}>
            <FadeInText aboutRef={props.aboutRef}>
                {props.children}
            </FadeInText>
        </div>
    );
}

export default ListItemTitle;