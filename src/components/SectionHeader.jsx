import "./sectionheader.css";
import PropTypes from "prop-types";

const SectionHeader = ({ lightText, boldText, className }) => {
  return (
    <div className={`header ${className}`}>
      <h2>
        <span>{lightText}</span> {boldText}
      </h2>
    </div>
  );
};

SectionHeader.propTypes = {
  lightText: PropTypes.string,
  boldText: PropTypes.string,
};

export default SectionHeader;
