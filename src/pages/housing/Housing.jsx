import { useNavigate, useParams } from 'react-router-dom';
import Tags from '../../components/tags/Tags';
import data from '../../assets/data/logements.json'
import Collapse from '../../components/collapse/Collapse';
import Rating from '../../components/rating/Rating';
import Carousel from '../../components/carousel/Carousel';
import { useEffect} from 'react';


const Housing = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const housing = data.find(housingData => housingData.id === id);


    useEffect(() => {
        if (housing == null) navigate("/NoFound");
    });

    if (housing == null) return;


    const firstName = housing.host.name.split(' ')[0];
    const lastName = housing.host.name.split(' ')[1];

    return (
        <>
            <Carousel pictures={housing.pictures} />
            <section className='housing_content'>
                <div className='housing_brief'>
                    <h1 className='housing_title'>{housing.title}</h1>
                    <p className='housing_location'>{housing.location}</p>
                    <Tags className="housing_tags" tagsData={housing.tags} />
                </div>
                <div className='housing_host'>
                    <div className='housing_container-name-avatar'>
                        <p className='housing_host-name'>{firstName}<br />{lastName}</p>
                        <img className='housing_host-avatar' src={housing.host.picture} alt={housing.host.name} />
                    </div>
                    <div>
                        <Rating rating={ Number(housing.rating)} />
                    </div>
                </div>

            </section>

            <div className='housing_collapses'>
                <Collapse className='collapse-housing' title="Description">
                    {housing.description}
                </Collapse>
                <Collapse className='collapse-housing' title="Équipements">
                    <ul>
                        {
                            housing.equipments.map((equipement) => <li key={equipement}>{equipement}</li>)
                        }
                    </ul>
                </Collapse>
            </div>
        </>
    );
};

export default Housing;