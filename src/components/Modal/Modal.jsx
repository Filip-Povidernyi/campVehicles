import { useEffect } from 'react';
import css from './style.module.css';
import { fetchVehicleById } from '../../api/fetchVehicles';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectDetails, selectErrorDetails, selectLoaderDetails, selectNavId } from '../../redux/selectors';
import Icon from '../Icon/Icon';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(NavLink)`
    color: #101828;
    padding-bottom: 24px;
    font-weight: 600;
    font-size: 20px;
    text-decoration: none;

    &.active {
        border-bottom: 5px solid #E44848;
    }
`;

const Modal = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const details = useSelector(selectDetails);
  const isLoading = useSelector(selectLoaderDetails);
  const error = useSelector(selectErrorDetails);
  const navId = useSelector(selectNavId);

  useEffect(() => {
    if (!id) return;

    dispatch(fetchVehicleById(id));

  }, [dispatch, id]);

  
  const closeModal = () => navigate(`${navId}`);

  console.log('details', details)

  return (
    <div className={css.overlay} onClick={closeModal}>
      {isLoading && !error && <Loader />}
      {details &&
        <div className={css.modal} onClick={(e)=>e.stopPropagation()}>
          <div>
            <div className={css.priceRevContainer}>
              <div className={css.headerClose}>
                <h1>{details.name}</h1>
                <Icon
                  className={css.close}
                  iconName={'icon-close'}
                  width='32'
                  height='32'
                  stroke='#101828'
                  handleClick={closeModal}
                />
              </div>
              <div className={css.favorRew}>
                <div className={css.reviews}>
                    <Icon
                        width={16}
                        height={16}
                        fill='#ffc531'
                        stroke='#ffc531'
                        iconName='icon-star-full'
                    />
                    <p className={`${css.text} ${css.textRev}`}>{details.rating}({details.reviews?.length} Reviews)</p>
                </div>
                <div className={css.reviews}>
                    <Icon
                        width={16}
                          height={16}
                        fill="transparent"
                        stroke='#101828'
                        iconName='icon-map-pin'
                    />
                    <p className={css.text}>{details.location}</p>
                </div>
              </div>
              <div>
                <p className={css.priceTitle}>&#8364;{details.price}.00</p>
              </div>
            </div>
            <div>
                <ul className={css.gallery}>
                {details?.gallery.map((image, idx) => (
                  <div key={idx} className={css.wrapper}>
                        <img src={image.original} alt={details.name} width='290px' height='310px' />
                  </div>
                ))}
                </ul>
            </div>
            <div className={css.descr}>
              <p>{details.description}</p>
            </div>
          </div>
          <div>
            <div className={css.linksBar}>
              <nav>
                <StyledLink to='features'>Features</StyledLink>
                <StyledLink to='reviews'>Reviews</StyledLink>
              </nav>
            </div>
            <div className={css.content}>
              <Outlet />
            </div>
          </div>
      </div>}
    </div>
);
};

export default Modal;