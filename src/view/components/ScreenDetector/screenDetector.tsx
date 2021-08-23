import React, { useRef, useEffect, useCallback } from 'react';

interface IScreenDetectorProps {
    onActive : () => void;
    onUnactive ?: () => void;
    className ?: string;
    debug ?: boolean;
    scrollRef ?: HTMLDivElement | null;
}

const ScreenDetector : React.FC<IScreenDetectorProps> = props => {
    const detectorRef = useRef<HTMLDivElement>(null);
    const isElementInViewport = () => {
        const el = detectorRef.current!;
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        );
    }

    const detects = useCallback(() => {
        if (isElementInViewport()) {
            props.onActive();
        }
        else if (props.onUnactive !== undefined){
            props.onUnactive();
        }
    }, []);

    useEffect(() => {
        detects();
        setTimeout(detects, 100);
        if(props.scrollRef != null){
            props.scrollRef.addEventListener('scroll', detects, false);
            return () => {
                if(props.scrollRef != null){
                    props.scrollRef.removeEventListener('scroll', detects, false);
                }
            };
        }
        else{
            window.addEventListener('scroll', detects, false);
            return () => window.removeEventListener('scroll', detects, false);
        }
    }, [props.scrollRef]);

    return (
            <div className={`screen-detector ${props.className}`} ref={detectorRef}>
            </div>
    );
}

export default ScreenDetector;