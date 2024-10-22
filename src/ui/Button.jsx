import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "flex h-[36px] items-center rounded-[10px] bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2.5 text-sm",
    secondary:
      "px-4 py-3 md:px-6 md:py-4 bg-transparent border-2 border-stone-300 flex h-[36px] items-center rounded-[10px] font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 disabled:cursor-not-allowed",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
