import './PersonalInfo.css';

const PersonalInfo = () => {
    const details = [
        {
            id: 'info-1',
            name: 'Academic Year',
            value: 3,
        },
        {
            id: 'info-2',
            name: 'Proficient Languages',
            value: 2,
        },
        {
            id: 'info-3',
            name: 'Projects Completed',
            value: 4,
        },
        {
            id: 'info-4',
            name: 'Awards Won',
            value: 2,
        },
    ];
    return (
        <ul className="personal-info">
            {details.map((detail) => (
                <li key={detail.id}>
                    <p className="personal-info__value">{detail.value}</p>
                    <p className="personal-info__name">{detail.name}</p>
                </li>
            ))}
        </ul>
    );
};

export default PersonalInfo;
