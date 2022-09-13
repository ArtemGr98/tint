import styled from "styled-components";

const ContactMapsContainer = styled.div`
  width: 50%;
  height: 705px;
`
const ContactMaps = () => {

    return (
        <ContactMapsContainer>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16388.311173468002!2d-122.15818918741236!3d47.50417223544512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490687dc4a82d11%3A0xe78cca4c59118161!2z0KXQsNC30LXQvSDQpdCw0Lkg0KHQutGD0Ls!5e0!3m2!1sru!2sua!4v1662646731665!5m2!1sru!2sua"
                width="100%" height="100%" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </ContactMapsContainer>
    );
};

export default ContactMaps;