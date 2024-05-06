import PropTypes from "prop-types";

const NavComponent = ({ to, name }) => {
  return (
    <li>
      <a href={to}>{name}</a>
    </li>
  );
};

NavComponent.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
};

export default NavComponent;
