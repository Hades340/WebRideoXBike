import React, { PropTypes } from 'react';

const reviews = (props) => {
    return (
        <div className="col-sm-7 bodyRight">
		  <h4 className="text-uppercase font-weight-bold text-center "> Giới thiệu</h4>
		  <p className="mt-3 font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, iste? Laborum quod fuga debitis ex culpa saepe ullam voluptas officia voluptatem corporis vero, totam similique magnam nobis fugit quibusdam iusto! Lorem ipsum dolor sit
		    amet consectetur adipisicing elit. Vel alias corrupti consequatur reprehenderit molestias et, nemo cumque natus minus magni ratione similique architecto placeat tempora assumenda officia illum mollitia adipisci!</p>
		</div>

    );
};

reviews.displayName = 'reviews';

reviews.propTypes = {
};

export default reviews;
