import React from 'react';
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, Subtitle, TextWrapper, TopLine, InfoWrapper } from './InfoElements';
import { Button } from '../ButtonElement';

interface InfoSectionProps {
    lightBg: boolean;
    id: string;
    imgStart: boolean;
    topLine: string;
    headline: string;
    description: string;
    buttonLabel: string;
    img: string;
    alt: string;
    darkText: boolean;
    primary?: boolean;
    dark?: boolean;
    dark2?: boolean;
}

const InfoSection = ({ lightBg, id, imgStart, topLine, headline, description, buttonLabel, img, alt, darkText, dark2, dark, primary }: InfoSectionProps) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightBg={lightBg}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    // exact={true}
                                    // offset={-80}
                                    // primary={primary ? 1 : 0}
                                    // dark={dark ? 1 : 0}
                                    // dark2={dark2 ? 1 : 0}
                                    >
                                    {buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;
