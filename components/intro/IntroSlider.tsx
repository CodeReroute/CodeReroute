import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    min-width: 250.8px;
    margin-top: -8px;
    transform: translate3d(0, 0, 0);
    transition: all 1s;
    div:first-child {
        font-weight: bold;
    }
    div {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 22px;
        letter-spacing: 1.5px;
    }
`;

const IntroSlider: React.FC = () => {
    const ref = React.createRef<HTMLDivElement>();

    useEffect(() => {
        const wrapper = ref.current;
        if (!wrapper) return;

        const interval = setInterval(() => {
            if (!wrapper.firstChild || !wrapper.firstChild.textContent) return;
            const firstChild = document.createElement('div') as HTMLDivElement;
            firstChild.innerHTML = wrapper.firstChild.textContent;
            wrapper.appendChild(firstChild);
            wrapper.style.transform = 'translateY(-39px)';
            setTimeout(() => {
                wrapper.style.transition = 'none';
                wrapper.style.transform = 'translateY(0px)';
                wrapper.removeChild(wrapper.firstChild as Node);
                setTimeout(() => {
                    wrapper.style.transition = 'all 1s';
                }, 1000);
            }, 900);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [ref]);

    return (
        <StyledDiv ref={ref}>
            <div>e-commerce websites</div>
            <div>municipal websites</div>
            <div>web and mobile apps</div>
            <div>portfolios</div>
        </StyledDiv>
    );
};

export default IntroSlider;
