import React from 'react';
import { CloseIcon, Icon, SideBarContainer, SideBarMenu, SideBtnWrap, SidebarLink, SidebarRoute, SidebarWrapper } from './SideBar';

const SideBar = ({ isOpen, toggle }: { isOpen: boolean, toggle: () => void }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SideBarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SideBarContainer>
    );
};

export default SideBar;
