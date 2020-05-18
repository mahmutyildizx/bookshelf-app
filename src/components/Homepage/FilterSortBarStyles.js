import styled from "styled-components";
import {NavbarText, InputGroup } from 'reactstrap';

export const StyledNavbarText = styled(NavbarText)`
    margin-left: 15px;
    color: ${props => props.active ? "#FF8247" : "#035491"};
    cursor: pointer;
`;

export const StyledInputGroup = styled(InputGroup)`
    display: inline-flex;
    width: 50%;
`;