import React, {useState, useEffect} from 'react';

function Slides({slides}) {
    const [currSlide, setCurdrSlide] = useState(0);
    const [nextButton, setNextButton] = useState(false);
    const [prevButton, setPrevButton] = useState(false);
    const [resButton, setRestartButton] = useState(false);
    const [initStep, setnitStep] = useState(true);

    useEffect(() => {

        if (currSlide === 0) {
            setRestartButton(true)
        } else {
            setRestartButton(false)
        }
        if (!nextButton && currSlide === (slides.length - 1) && !initStep) {
            setNextButton(true)
        } else if (nextButton && currSlide !== (slides.length - 1)) {
            setNextButton(false)
        }

        if (!prevButton && currSlide === 0) {
            setPrevButton(true)
        } else if (prevButton && currSlide > 0) {
            setPrevButton(false)
        }

        if (initStep && currSlide !== 0) {
            setnitStep(false);
        }
    }, [currSlide]);

    const handleResetButton = () => {
        if (currSlide !== 0) {
            setCurdrSlide(0)
        }
    };

    const handlePrevButton = () => {
        if (currSlide > 0) {
            setCurdrSlide(currSlide - 1)
        } else {
            setPrevButton(true)
        }
    };

    const handleNextButton = () => {
        if (!nextButton && currSlide < (slides.length - 1)) {
            setCurdrSlide(currSlide + 1)
        } else {
            setNextButton(true)
        }
    };

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={() => handleResetButton()}
                        disabled={resButton}>Restart
                </button>
                <button data-testid="button-prev" className="small" onClick={() => handlePrevButton()}
                        disabled={prevButton}>Prev
                </button>
                <button data-testid="button-next" className="small" onClick={() => handleNextButton()}
                        disabled={nextButton}>Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currSlide].title}</h1>
                <p data-testid="text">{slides[currSlide].text}</p>
            </div>
        </div>
    );
}

export default Slides;
