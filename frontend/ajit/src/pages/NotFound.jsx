import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

function NotFound() {
return (
<div className="not-found-page">
<div className="not-found-content">
<h1>404</h1>
<h2>Page Not Found</h2>
<p>
Sorry! The page you are looking for does not exist
or may have been moved.
</p>

    <div className="not-found-actions">
      <Link to="/" className="not-found-home-btn">
        <Home size={18} />
        Go Home
      </Link>

      <button
        className="not-found-back-btn"
        onClick={() => window.history.back()}
      >
        <ArrowLeft size={18} />
        Go Back
      </button>
    </div>
  </div>
</div>

);
}

export default NotFound;