import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

export default function SocialIcons() {
    return (
        <StyledSocialIcons>
          <li>
            <a href="https://twitter.com">
                <FaTwitter/>    
            </a>
        </li>
        <li>
            <a href="https://facebook.com">
                <FaFacebook/>    
            </a>
        </li>
        <li>
            <a href="https://linkedin.com">
                <FaLinkedin/>    
            </a>
        </li>
        <li>
            <a href="https://instagram.com">
                <FaInstagram/>    
            </a>
        </li>
        <li>
            <a href="https://youtube.com">
                <FaYoutube/>    
            </a>
        </li>
        <li>
            <a href="https://youtube.com">
                <FaGithub/>    
            </a>
        </li>
        </StyledSocialIcons> 
    )
}