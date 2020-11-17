import React, { useContext } from 'react';
import Local from '../LocalisationContext/Local';
import Text from '../LocalisationContext/Text';
import { LocalValueContext, SetLocalContext } from '../LocalisationContext/LocalContext';
import './Languages.scss';

interface ILanguagesProps {
    isWhite ?: boolean;
}

const Languages : React.FC<ILanguagesProps> = props => {
    var currentLanguage = useContext(LocalValueContext);
    var setLocalisation = useContext(SetLocalContext);

    const setLanguageTo = (localisation : Local) => {
      setLocalisation(localisation);
    }

    const onClick = () => {
        if (currentLanguage.getShortName() == 'EN') {
            setLanguageTo(Local.FR);
        }
        else {
            setLanguageTo(Local.EN);
        }
    }

    const isWhite = props.isWhite ? "is-white" : "";
    
    return (
        <div className={`languages ${isWhite}`} onClick={onClick}>
            {/* <div className={`english`} onClick={() => setLanguageTo(Local.EN)}>EN</div> - <div className={`french`} onClick={() => setLanguageTo(Local.FR)}>FR</div>
            <div className={`underline ${currentLanguage.getShortName()}`}></div> */}
            <div className={`languages-title`}>
                <Text english="Language" french="Langue"/>
            </div>
            
            {currentLanguage.getShortName() == 'EN' && <img src='icons/uk-flag.png'/>}
            {currentLanguage.getShortName() == 'FR' && <img src='icons/french-flag.png'/>}
        </div>
    );
}

export default Languages;