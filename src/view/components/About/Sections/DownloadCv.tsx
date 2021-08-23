import React, { useContext } from 'react';
import { LocalValueContext } from '../../LocalisationContext/LocalContext';
import Text from '../../LocalisationContext/Text';
import './DownloadCv.scss';

interface IDownloadCvProps {

}

const DownloadCv : React.FC<IDownloadCvProps> = props => {
    var currentLanguage = useContext(LocalValueContext);
    var cv = (currentLanguage.getShortName() == 'EN') ? "cv/KimAnhNguyen-CV-EN.pdf" : "cv/KimAnhNguyen-CV-FR.pdf";
    
    return(
        <div className={`download-cv`}>
            <Text english="For the short version, you can download my CV" french="Pour la version courte, téléchargez mon CV"/>
            <br></br>
            <a href={cv} download>
                <button className={`here`}>
                    <div className={`background`}>
                        <div className={`normal`} />
                        <div className={`hover`} />
                    </div>
                    <Text english="HERE" french="ICI"/>
                </button>
            </a>
        </div>
    );
}

export default DownloadCv;