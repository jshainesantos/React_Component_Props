function CountDisplay({ count }) {
  return (
    <>
      <div className="d-flex justify-content-center">
        {count > 5 ? (
          <h1 style={{ color: "green" }}>{count}</h1>
        ) : (
          <h1 style={{ color: "blue" }}>{count}</h1>
        )}
      </div>
    </>
  );
}

export default CountDisplay;
