import { type StatsTableProps } from './stats-table-props';
import DataTable from 'react-data-table-component';
import { columns } from './columns';

export const StatsTable = (props: StatsTableProps): React.JSX.Element => {
  return (
    <DataTable columns={columns} data={props.rows} title={props.title} pagination responsive />
  );
};
