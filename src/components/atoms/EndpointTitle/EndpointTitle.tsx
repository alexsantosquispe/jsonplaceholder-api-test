interface EndpointTitleProps {
  methodLabel: string;
  label: string;
}

export const EndpointTitle = ({ methodLabel, label }: EndpointTitleProps) => {
  return (
    <div className="flex gap-4">
      <span className="rounded-sm bg-green-100 px-2 py-1 text-base font-normal text-green-800 uppercase">
        {methodLabel}
      </span>
      <h1 className="text-2xl font-bold">{label}</h1>
    </div>
  );
};
