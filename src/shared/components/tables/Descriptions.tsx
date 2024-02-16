import { Descriptions as DescriptionsAntD, DescriptionsProps as DescriptionsPropsAntD } from 'antd';

interface DescriptionsProps {
  items: DescriptionsPropsAntD['items'];
  title: string;
}

const Descriptions = ({ items, title, ...props }: DescriptionsProps) => {
  return <DescriptionsAntD title={title} bordered items={items} {...props} />;
};

export default Descriptions;
