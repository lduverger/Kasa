import BannerImage from '../../components/banner/BannerImage';
import aboutBackground from '../../assets/images/aboutPageBackground.png'
import Collapse from '../../components/collapse/Collapse';

const About = () => {
    return (
        <div>
            <BannerImage background={aboutBackground} />
            <Collapse
                className='collapse-about'
                title="Fiabilité">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </Collapse>
            <Collapse
                className='collapse-about'
                title="Respect">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
            <Collapse
                className='collapse-about'
                title="Service"
            >
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
            <Collapse
                className='collapse-about'
                title="Sécurité"
            >
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hote qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </Collapse>
        </div>
    );
};

export default About;