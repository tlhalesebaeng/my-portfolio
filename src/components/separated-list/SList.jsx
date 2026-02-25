import './SList.css';

const SList = ({ list }) => {
    return (
        <ul className="slist">
            {list.map((item) => (
                <li key={item.id}>
                    <section className="slist__item-marker">
                        <div></div>
                    </section>
                    <section className="slist__item-details">
                        <p className="slist__item-year">{item.year}</p>
                        <h3>{item.title}</h3>
                        <p>{item.place}</p>
                        <p className="slist__item-description">{item.description}</p>
                    </section>
                </li>
            ))}
        </ul>
    );
};

export default SList;
