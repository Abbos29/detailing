import React, { useState, useEffect } from 'react';
import s from './ProductWrap.module.scss';
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import TabsWrap from '@/components/ui/TabsWrap/TabsWrap';
import { useCart } from 'react-use-cart';
import { useIsClient } from 'usehooks-ts';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAppContext } from '@/context/AppContext';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ProductWrap = ({ singleProduct }) => {
  const [initialImage, setInitialImage] = useState('');
  const [mainImage, setMainImage] = useState(singleProduct?.image);

  useEffect(() => {
    if (singleProduct?.image) {
      setInitialImage(singleProduct.image);
      setMainImage(singleProduct.image);
    }
  }, [singleProduct?.id]);

  const { fav, handleAddToFav } = useAppContext();
  const isFavourite = fav.some((favItem) => favItem.id === singleProduct?.id);

  const {
    getItem,
    addItem,
    updateItemQuantity,
    removeItem
  } = useCart();

  const isClient = useIsClient();

  const handleThumbnailClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

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

  const cartItem = getItem(singleProduct?.id);

  return (
    <section className={s.productWrap}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.gallery}>
            <div className={s.thumbs}>
              {initialImage && (
                <img
                  key="initial-image"
                  src={initialImage}
                  alt="Hovedprodukt"
                  onClick={() => handleThumbnailClick(initialImage)}
                  style={{ cursor: 'pointer' }}
                />
              )}
              {singleProduct?.images?.map((el) => (
                <img
                  key={el?.id}
                  src={el?.image}
                  alt={el?.id}
                  onClick={() => handleThumbnailClick(el?.image)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
            <div className={s.mainThumb}>
              <img src={mainImage} alt={singleProduct?.name} />
            </div>
          </div>

          <div className={s.info}>
            <div className={s.meta}>
              <p>Vare: <span>{singleProduct?.item}</span></p>
              <p>Produsentdel: <span>{singleProduct?.manufacturer_part}</span></p>
            </div>

            <div className={s.twink}>
              <h1 className={s.title}>{singleProduct?.name}</h1>
              {!isFavourite ? (
                <FaRegHeart className={s.icon} onClick={() => handleAddToFav(singleProduct)} />
              ) : (
                <FaHeart className={s.icon} onClick={() => handleAddToFav(singleProduct)} />
              )}
            </div>

            <div className={s.rating}>
              {renderRatingStars(singleProduct?.rating || 0)}
            </div>

            <p className={s.description}>
              {singleProduct?.short_description}
            </p>

            <div className={s.price}>{singleProduct?.price} kr</div>

            <div className={s.meta}>
              <p>Tilgjengelighet: <span>{singleProduct?.availability ? 'På lager' : 'Ikke tilgjengelig'}</span></p>
              <p>Merkenavn: <span>{singleProduct?.brand?.name}</span></p>
            </div>

            {isClient && (
              <div className={s.controls}>
                {!cartItem ? (
                  <Button onClick={() => addItem(singleProduct)}>Legg i handlekurv</Button>
                ) : (
                  <div className={s.counter}>
                    <button
                      onClick={() =>
                        updateItemQuantity(singleProduct?.id, cartItem.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button
                      onClick={() => {
                        if (cartItem.quantity > 1) {
                          updateItemQuantity(singleProduct?.id, cartItem.quantity - 1);
                        } else {
                          removeItem(singleProduct?.id);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            )}

            <p className={s.shipping}>Frakt: <span>Vanligvis sendes samme dag eller neste virkedag</span></p>
          </div>
        </div>

        <TabsWrap singleProduct={singleProduct} />
      </Container>
    </section>
  );
};

export default ProductWrap;
