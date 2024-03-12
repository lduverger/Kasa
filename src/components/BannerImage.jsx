const BannerImage = ({ background, text }) => {
    return (
        <div className='banner'>
            <img src={background} alt="Photo de paysage" />
            <h1>{text}</h1>
        </div>
    );
};

export default BannerImage;