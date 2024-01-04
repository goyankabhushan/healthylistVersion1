const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>No Food For me</h3>}</>;
};

export default ErrorMessage;
