import NathanielMorgan from "../NathanielMorgan/NathanielMorgan";

const Footer = (props) => {
  return ( 
    <footer>
      Designed and Developed by <NathanielMorgan/> {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;