type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <li>
      <span className="font-semibold">{label}: </span>
      <span className="font-light">{value}</span>
    </li>
  );
}

export default InfoRow;
