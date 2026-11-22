import { LoaderCircle } from "lucide-react";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="loader-container">
      <LoaderCircle className="loader-icon" size={35} />
      <p>{text}</p>
    </div>
  );
};

export default Loader;