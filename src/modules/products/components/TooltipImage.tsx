import Tooltip from '../../../shared/components/tooltip/Tooltip';
import { ProductType } from '../../../shared/types/ProductType';
import { ProductImage } from '../styles/tootipImage.style';

interface TooltipImageProps {
  product: ProductType;
}

const TooltipImage = ({ product }: TooltipImageProps) => {
  return (
    <Tooltip tooltip={<ProductImage src={product.image || './no-product-img.png'} />}>
      <span>{product.id}</span>
    </Tooltip>
  );
};

export default TooltipImage;
