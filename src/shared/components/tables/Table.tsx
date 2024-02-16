import { Table as TableAntD, TableProps } from 'antd';

function Table<RecordType extends object = any>(props: TableProps<RecordType>) {
  return (
    <TableAntD
      {...props}
      dataSource={props.dataSource?.map((p, i) => {
        return { ...p, key: i };
      })}
    />
  );
}

export default Table;
