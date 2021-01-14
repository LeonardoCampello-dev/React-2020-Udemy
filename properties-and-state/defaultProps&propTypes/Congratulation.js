import React from "react";
import PropTypes from "prop-types";

function Congratulation({ name, standing }) {
    return (
        <div>
            <h2>Parabéns, {name}!</h2>
            <p>Você ficou na posição {standing}!</p>
        </div>
    );
}

Congratulation.defaultProps = { name: "pessoinha" };

Congratulation.propTypes = {
    name: PropTypes.string.isRequired,
    standing: PropTypes.number.isRequired
};

export default Congratulation;
