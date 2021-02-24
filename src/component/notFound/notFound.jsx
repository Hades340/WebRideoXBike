import React, { PropTypes } from 'react';

const notFound = (props) => {
    return (
        <div>
        	<h3 className="mt-3 margins noConnect"> Opp..... Not found (error 404)</h3>
        </div>
    );
};

notFound.displayName = 'notFound';

notFound.propTypes = {
};

export default notFound;
