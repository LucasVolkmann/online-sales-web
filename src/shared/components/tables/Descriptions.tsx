import { Descriptions as DescriptionsAntD, DescriptionsProps as DescriptionsPropsAntD } from 'antd';

interface DescriptionsProps {
  items: DescriptionsPropsAntD['items'];
  title: string;
  bordered?: boolean;
}

const Descriptions = ({ items, title, bordered, ...props }: DescriptionsProps) => {
  return <DescriptionsAntD title={title} bordered={bordered} items={items} {...props} />;
};

export default Descriptions;
