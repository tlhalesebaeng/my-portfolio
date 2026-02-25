import SList from './SList.jsx';
import Marker from '../../utils/Marker.jsx';
import './SeparatedList.css';

const SeparatedList = ({ ref, title, list, infoClass }) => {
    return (
        <section className="separated-list" ref={ref}>
            <h2>{title}</h2>
            <Marker />
            <section className={`separated-list__info${infoClass ? ' ' + infoClass : ''}`}>
                <div className="separated-list__info-divider"></div>
                <SList list={list} />
            </section>
        </section>
    );
};

export default SeparatedList;
