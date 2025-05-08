import React from 'react';
import s from './ProductWrap.module.scss';
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import TabsWrap from '@/components/ui/TabsWrap/TabsWrap';
import { useCart } from 'react-use-cart';
import { useIsClient } from 'usehooks-ts';
import { IoMdHeart } from "react-icons/io";
import { FaRegHeart } from 'react-icons/fa';
import { useAppContext } from '@/context/AppContext';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';



const ProductWrap = ({ singleProduct }) => {
  const { fav, handleAddToFav } = useAppContext();
  const isFavourite = fav.some((favItem) => favItem.id === singleProduct?.id);
  const { getItem, addItem, removeItem } = useCart();
  const isClient = useIsClient();


  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar className={s.star} key={`full-${i}`} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt className={s.star} key="half" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar className={s.star} key={`empty-${i}`} color="#ccc" />);
    }

    return stars;
  };
  return (
    <section className={s.productWrap}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.gallery}>
            <div className={s.thumbs}>
              {singleProduct?.images?.map((el) => (
                <img key={el?.id} src={el?.image} alt={el?.id} />
              ))}
            </div>
            <div className={s.mainThumb}>
              <img src={singleProduct?.image} alt="Main product view" />
            </div>
          </div>

          <div className={s.info}>
            <div className={s.meta}>
              <p>Item: <span>{singleProduct?.item}</span></p>
              <p>Manufacturer Part: <span>{singleProduct?.manufacturer_part}</span></p>
            </div>

            <div className={s.twink}>
              <h1 className={s.title}>{singleProduct?.name}</h1>
              {!isFavourite ? <FaRegHeart className={s.icon} onClick={() => handleAddToFav(singleProduct)} /> : <IoMdHeart className={s.icon} onClick={() => handleAddToFav(singleProduct)} />}
            </div>

            <div className={s.rating}>
              {renderRatingStars(singleProduct?.rating || 0)}
            </div>

            <p className={s.description}>
              {singleProduct?.short_description}
            </p>

            <div className={s.price}>${singleProduct?.price}</div>

            <div className={s.meta}>
              <p>Availability: <span>{singleProduct?.availability ? 'In Stock' : 'Not Available'}</span></p>
              <p>Brand Name: <span>{singleProduct?.brand?.name}</span></p>
            </div>

            {isClient && <div className={s.controls}>
              {/* <div className={s.counter}>
                <button>+</button>
                <span>2</span>
                <button>-</button>
              </div> */}
              {!getItem(singleProduct?.id) ? (
                <Button onClick={() => addItem(singleProduct)}>Add to Cart</Button>
              ) : (
                <Button onClick={() => removeItem(singleProduct?.id)}>Remove from Cart</Button>
              )}
            </div>}

            <p className={s.shipping}>Shipping: <span>Usually ships the same or next business day</span></p>
          </div>
        </div>

        <TabsWrap />

      </Container>
    </section>
  );
};

export default ProductWrap;
