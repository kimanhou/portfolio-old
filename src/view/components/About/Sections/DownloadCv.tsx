import React from 'react';
import Text from '../../LocalisationContext/Text';
import './DownloadCv.scss';

interface IDownloadCvProps {

}

const DownloadCv : React.FC<IDownloadCvProps> = props => {
    return(
        <div className={`download-cv`}>
            <Text english="" french="Pour la version courte, "/>
        </div>
    );
}

export default DownloadCv;