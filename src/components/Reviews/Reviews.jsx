import { useOutletContext } from "react-router-dom";
import css from './style.module.css';
import BookingContainer from "../BookingContainer/BookingContainer";
import StarRating from "../StarRating/StarRating";

const Reviews = () => {
    
    const context = useOutletContext();
    const { reviews } = context;

    return (
        <>
            {reviews.length > 0 ?
                (<div className={css.commentCont}>
                    {reviews.map((review, idx) => (
                        <div key={idx} style={{paddingBottom: "24px"}}>
                            <div className={css.nameCont}>
                                <h1 className={css.revNameLetter}>{review.reviewer_name[0]}</h1>
                                <div>
                                    <p className={css.name}>{review.reviewer_name}</p>
                                    <StarRating rating={review.reviewer_rating} />
                                </div>
                            </div>
                            <div>
                                <p>{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>)
                :
                (<h2>No one review</h2>)}
            <BookingContainer />
        </>
    );
};

export default Reviews;