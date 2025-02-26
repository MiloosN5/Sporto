interface NoRecordsProps {
  parent: string;
};

const NoRecords = ({ parent }: NoRecordsProps) => {
  return (
    <div className={`norecords ${parent}__norecords`}>
      There are no records
    </div>
  );
};

export default NoRecords;