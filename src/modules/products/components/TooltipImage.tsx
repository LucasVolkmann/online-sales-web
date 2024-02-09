import Tooltip from '../../../shared/components/tooltip/Tooltip';
import { ProductType } from '../../../shared/types/ProductType';
import { ProductImage } from '../styles/tootipImage.style';

interface TooltipImageProps {
  product: ProductType;
}

const TooltipImage = ({ product }: TooltipImageProps) => {
  const isImage = (url: string) => {
    return (
      url.includes('.jpg') ||
      url.includes('.jpeg') ||
      url.includes('.png') ||
      url.includes('.webp') ||
      url.includes('.avif') ||
      url.includes('.gif') ||
      url.includes('.svg')
    );
  };

  return (
    <Tooltip
      tooltip={
        <ProductImage src={isImage(product.image) ? product.image : './no-product-img.png'} />
      }
    >
      <span>{product.id}</span>
    </Tooltip>
  );
};

export default TooltipImage;
