import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Logo({light}) {
    let classNames = 'font-quicksand tracking-widest min-w-[150px] font-bold text-lg lg:text-xl'

    if(light) classNames += ' text-white'

    return (
        <Link to="/" className={classNames}>
            <h2 className="leading-none">Sometimes</h2>
            <h2 className="leading-none"><span className="font-normal tracking-normal">i do</span> Something</h2>
        </Link>
    );
}

Logo.propTypes = {
    light: PropTypes.bool,
}

export default Logo;