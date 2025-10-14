import BookForm from "../BookForm/BookForm";
import css from './style.module.css';


const BookingContainer = () => {
    return (
        <div className={css.bookingContainer}>
            <div className={css.bookHeader}>
                <h2>Book your campervan now</h2>
                <p className={css.bookTitle}>Stay connected! We are always ready to help you.</p>
            </div>
            <div>
                <BookForm />
            </div>
        </div>
    );
};


export default BookingContainer;