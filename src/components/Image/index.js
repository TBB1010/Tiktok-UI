import { forwardRef, useState } from 'react';
import images from '@/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Image({ src, className, fallback: customFallback = images.noImage, alt, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
