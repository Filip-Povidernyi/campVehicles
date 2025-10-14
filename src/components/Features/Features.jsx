import BookingContainer from "../BookingContainer/BookingContainer";
import Equipment from "../Equipment/Equipment";
import { useOutletContext } from 'react-router-dom';
import css from './style.module.css'


const Features = () => {

    const context = useOutletContext();

    return (
        <>
            <div className={css.featRewCont}>
                <div className={css.equipment}>
                    {context && <Equipment card={context} />}
                </div>
                <div>
                    <h3 className={css.featTitle}>Vehicle details</h3>
                    <table className={css.table}>
                        <tbody>
                            <tr key={context.form}>
                                <td className={css.key}>Form</td>
                                <td className={css.value}>{context.form[0].toUpperCase()+context.form.slice(1)}</td>
                            </tr>
                            <tr key={context.id}>
                                <td className={css.key}>Length</td>
                                <td className={css.value}>{context.length}</td>
                            </tr>
                            <tr key={context.width}>
                                <td className={css.key}>Width</td>
                                <td className={css.value}>{context.width}</td>
                            </tr>
                            <tr key={context.height}>
                                <td className={css.key}>Height</td>
                                <td className={css.value}>{context.height}</td>
                            </tr>
                            <tr key={context.tank}>
                                <td className={css.key}>Tank</td>
                                <td className={css.value}>{context.tank}</td>
                            </tr>
                            <tr key={context.consumption}>
                                <td className={css.key}>Consumption</td>
                                <td className={css.value}>{context.consumption}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <BookingContainer />
        </>
    );
};

export default Features;