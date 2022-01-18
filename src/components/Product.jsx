import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import * as React from 'react'
import styled from "styled-components";


const Icon = styled.div`
    opacity:0;
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:10px;
    transition: all 0.5s ease;

    &:hover{
        background-color:#e9f5f5;
        transform: scale(1.1);
    }

`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#f5fbfd;
  position:relative;
    
    ${'' /* if we are mentioning the component then it need to be declared before it used */}
    &:hover ${Icon}{ 
        opacity:1;
    }

`;


const Circle = styled.div`
    width:200px;
    height:200px;
    background-color:white;
    position: absolute;
    border-radius:50%;
`;

const Image = styled.img`
    height:75%;
    z-index:2;
`;

const Info = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index:5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:all 0.5s ease;
    cursor:pointer;
`;




const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
