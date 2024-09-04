import PropTypes from "prop-types";

function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="flex h-[36px] items-center rounded-[10px] bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
