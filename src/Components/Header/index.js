import React from 'react';
import logo from '../../static/images/logo/logo.png'
import {
    Main,
    LogoDiv,
    Logo,
    TxtDiv,
    FirstTxt,
    SecondTxt,
    ThirdTxt,
    Left,
    Right,
    RightMobile,
    CustomLink,
} from "./styles";
import {
    Menu,
    Burger
} from './hamburgerMenu'
const Index = () => {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    return (
        <Main>
            <RightMobile ref={node}>
                <Menu open={open} setOpen={setOpen} />
                <Burger open={open} setOpen={setOpen}/>
            </RightMobile>
            <Left>
                <LogoDiv>
                    <Logo alt='logo' src={logo} className={'logo'}/>
                    <TxtDiv className={'text'}>
                        <FirstTxt>
                            PHANTOM
                        </FirstTxt>
                        <SecondTxt>
                            FURY
                        </SecondTxt>
                        <ThirdTxt>
                            Georgian airsoft team
                        </ThirdTxt>
                    </TxtDiv>
                </LogoDiv>
            </Left>
            <Right>
                {
                    HEADERS.map((h) => <CustomLink to={{pathname: h.to}}> {h.label} </CustomLink>)
                }
                {/*<Search className="flexbox">*/}
                {/*    <div className="search">*/}
                {/*        <div>*/}
                {/*            <input type="text" placeholder="Search . . ." required/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Search>*/}
            </Right>
        </Main>
    );
};

export const HEADERS = [
    {
        label: 'Home',
        to: '#'
    },
    {
        label: 'Team',
        to: '#'
    },
    {
        label: 'Calendar',
        to: '#'
    },
    {
        label: 'Contact',
        to: '#'
    },
]

export default Index;
