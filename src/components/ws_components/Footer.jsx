import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Copyrights from "../ws_components/Copyrights";

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  margin: 0 3rem;
  ${mobile({
    display: "none",
  })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 50px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <>
      <Container className="container">
        <Left>
          <Logo>MMSHOP.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </Desc>
          <SocialContainer className="mt-4">
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="3CC34E">
              <WhatsAppIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Liens utiles</Title>
          <List>
            <ListItem>Accueil</ListItem>
            <ListItem>Boutique</ListItem>
            <ListItem>Créer un compte</ListItem>
            <ListItem>Se Connecter</ListItem>
            <ListItem>Mes Favoris</ListItem>
            <ListItem>Mon Panier</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contacts</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px", color: "#4869ee" }} />{" "}
            Nouakchott, Medina 3 en face de l'hotel chinguiti palace
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px", color: "#4869ee" }} /> +222
            47590961
          </ContactItem>
          <ContactItem>
            <MailOutline
              style={{
                marginRight: "10px",
                marginTop: "4px",
                color: "#4869ee",
              }}
            />{" "}
            contact@mmshop.com
          </ContactItem>
          <div className="">
            <Payment src="../../images/masrvi.png" style={{ width: "120px" }} />
            <Payment
              src="../../images/bankily.png"
              style={{ width: "120px" }}
            />
          </div>
        </Right>
      </Container>
      <Copyrights />
    </>
  );
};

export default Footer;
