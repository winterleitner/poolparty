import PropTypes from "prop-types";

const Poolparty = ({name, banner, year, link, popper, className, pwd}) => {
    const openGallery = () => {
        if (!link)
            return
        const urlParams = new URLSearchParams(window.location.search);
        const autounlock = urlParams.get('autounlock');
        if (pwd && autounlock === "sicha")
            window.open(link + "?p=" + pwd, "_blank")
        else
            window.open(link, "_blank")

    }

    return <section className={`poolparty ${className}`} key={name} style={{backgroundImage: `url("${banner}")`}} onClick={openGallery}>
        <div className="year">{year}</div>
        <img className="popper" src={popper}/>
        <div className="partyName">
            <h1>
            {name}
            </h1>
        </div>
    </section>
}

Poolparty.propTypes = {
    name: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    popper: PropTypes.string,
    className: PropTypes.string.isRequired,
    pwd: PropTypes.string
}
export default Poolparty