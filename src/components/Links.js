import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Links = () => {
    return (
        <div>
            <p className="text-white text-center linkDesc">Social Media : </p>
            <div className="d-grid gap-3 links">
                <Button href="https://instagram.com/akbarrahmatm" target="_blank" className="shadow" variant="outline-light" size="lg"><FontAwesomeIcon icon={faInstagram} /> &nbsp; Instagram</Button>
                <Button href="https://twitter.com/AkbarRahmatM" target="_blank" className="shadow" variant="outline-light" size="lg"><FontAwesomeIcon icon={faTwitter} /> &nbsp; Twitter</Button>
                <Button href="https://www.linkedin.com/in/akbar-rahmat-mulyatama-b03894219/" className="shadow" target="_blank" variant="outline-light" size="lg"><FontAwesomeIcon icon={faLinkedin} /> &nbsp; LinkedIn</Button>
                <Button href="https://github.com/akbarrahmatm" target="_blank" className="shadow" variant="outline-light" size="lg"><FontAwesomeIcon icon={faGithub} /> &nbsp; Github</Button>

            </div>
            <p className="text-white text-center linkDesc">About Me : </p>
            <div className="d-grid gap-3 links">
                <Button href="https://www.akbarrahmatm.my.id" className="shadow" target="_blank" variant="outline-light" size="lg">Portfolio</Button>                
            </div>
            <p className="text-center copyright"><strong>LinkBar</strong> | Made with <FontAwesomeIcon icon={faHeart} /> by ARM</p>
        </div>
    )
}

export default Links