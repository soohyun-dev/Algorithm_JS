const Parent = () => {
  return (
    <>
      <Children1 gift="세번째 자식아 받아라!" />
    </>
  );
};

const Children1 = ({ gift }) => {
  return (
    <>
      <Children2 gift={gift} />
    </>
  );
};

const Children2 = ({ gift }) => {
  return (
    <>
      <Children3 gift={gift} />
    </>
  );
};

const Children3 = ({ gift }) => {
  return <>{gift}</>;
};
