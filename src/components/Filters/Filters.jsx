import { useDispatch, useSelector } from 'react-redux';
import css from './style.module.css';
import { useState } from 'react';
import { setFilter } from '../../redux/filterSlice';
import { nanoid } from "nanoid";
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { setFilteredItems } from '../../redux/vehiclesSlice';
import { selectAllVehicles } from '../../redux/selectors';
import { fetchAllVehicles } from '../../api/fetchVehicles';


const Filters = () => {

    const dispatch = useDispatch();
    const data = useSelector(selectAllVehicles);
    const [location, setLocation] = useState('');
        const [equipment, setEquipment] = useState({
            airConditioner: false,
            transmission: false,
            kitchen: false,
            TV: false,
            shower: false,
        });
        const [form, setForm] = useState('');

    const handleChangeLocation = (evt) => {
            const { value } = evt.target;
            setLocation(value);
        };
    
        const handleChangeCheckBox = (evt) => {
            const { name, checked } = evt.target;
            setEquipment(prevState => ({
                ...prevState,
                [name]: checked,
            }));
        };
    
        const handleChangeForm = (evt) => {
            const { value } = evt.target;
            setForm(value)
        };
    
        const resetForm = () => {
            setLocation('');
            setEquipment({
                airConditioner: false,
                transmission: false,
                kitchen: false,
                TV: false,
                shower: false,
            });
            setForm('');
            dispatch(fetchAllVehicles());
        };
    
        const handlerSubmit = (evt) => {
            evt.preventDefault();
            const filteredData = data.filter(item => {
            const matchLocation = location
                ? item.location.toLowerCase().includes(location.toLowerCase())
                : true;
            const matchForm = form ? item.form === form : true;

            const matchEquipment = Object.entries(equipment).every(([key, value]) => {
                if (!value) return true;
                switch (key) {
                    case 'airConditioner':
                        return item.AC;
                    case 'transmission':
                        return item.transmission === 'automatic';
                    case 'kitchen':
                        return item.kitchen;
                    case 'TV':
                        return item.TV;
                    case 'shower':
                        return item.bathroom;
                    default:
                        return true;
                }
            });

            return matchLocation && matchForm && matchEquipment;
            });

            dispatch(setFilteredItems(filteredData));
            dispatch(setFilter({ location, equipment, form }));
        };

    
        const equipments = [
        { icon:  "icon-wind", name: "airConditioner", value: "AC", fill: '#101828' },
        { icon: "icon-gearbox", name: "transmission", value: "Automatic", fill: 'transparent' },
        { icon: "icon-kitchen", name: "kitchen", value: "Kitchen", fill: 'transparent' },
        { icon:  "icon-TVset", name: "TV", value: "TV", fill: 'transparent' },
        { icon: "icon-shower", name: "shower", value: "Shower/WC", fill: 'transparent' },
    ];
        
    const typesVans = [
        { icon: "icon-smallCamper", name: "Van", value: "van" },
        { icon: "icon-middleCamper", name: "Fully Integrated", value: "fullyIntegrated" },
        { icon: "icon-bigCamper", name: "Alcove", value: "alcove" },
    ];

    return (
        <form className={css.filterForm} onSubmit={handlerSubmit}>
            <label className={css.location}>
                Location
                <div className={css.inputDiv}>
                    <Input
                        type="text"
                        name="location"
                        placeholder='City'
                        value={location}
                        handleChange={handleChangeLocation}
                    />
                    <Icon
                        iconName='icon-map-pin'
                        className={css.mappin}
                        stroke={location ? '#101828' : 'rgba(16, 24, 40, 0.6)'}
                        width="18"
                        height="20"
                    />
               </div>
            </label>
            <div>
                <label className={css.filter}>
                    Filter
                    <div className={css.filterDiv}>
                        <h2 className={css.header}>Vehicle equipment</h2>
                        <ul className={css.equipList}>
                            {equipments.map(equip => (
                                <li key={nanoid()} className={css.filterChb}>
                                    <label className={css.checkbox}>
                                        <Icon
                                            iconName={equip.icon}
                                            className="iconEqp"
                                            width="32"
                                            height="32"
                                            stroke='#101828'
                                            fill={equip.fill}
                                        />
                                        <Input
                                            type="checkbox"
                                            name={equip.name}
                                            checked={equipment[equip.name]}
                                            handleChange={handleChangeCheckBox}
                                            value={equip.value}
                                            className='visially-hidden'
                                        />
                                        {equip.value}
                                    </label>
                                </li>
                            ))}
                        </ul>
                </div>
                </label>
                <div className={css.filterDiv}>
                    <h2 className={css.header}>Vehicle type</h2>
                    <ul className={css.typeList }>
                        {typesVans.map(type => (
                            <li key={nanoid()} className={css.filterRadio}>
                                <label className={css.checkbox}>
                                    <Icon
                                        iconName={type.icon}
                                        width="32"
                                        height="32"
                                        stroke='#101828'
                                        fill='transparent'
                                    />
                                    <Input
                                        className="visially-hidden"
                                        name='form'
                                        type='radio'
                                        value={type.value}
                                        checked={form === type.value}
                                        handleChange={handleChangeForm}
                                        id={type.value}
                                    />
                                    {type.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={css.buttons}>
                <Button type='submit' className={css.button}>Search</Button>
                <Button type="reset" className={css.buttonReset} handleClick={resetForm}>Reset Filter</Button>
            </div>
        </form>
    )
};

export default Filters;