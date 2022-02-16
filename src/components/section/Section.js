import PropTypes from 'prop-types';
import s from './Section.module.css';


const Section = ({title,children}) => {
    return (
        <div className={s.section}>
            <h3 className={s.title}>{title}</h3>
            {children}
        </div>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

export default Section;
