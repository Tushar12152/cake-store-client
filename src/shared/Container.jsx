import PropTypes from 'prop-types';


const Container = ({children}) => {
    return (
        <div className="w-[90%] mx-auto">
             {children}
        </div>
    );
};

Container.propTypes={
    children:PropTypes.node,
}

export default Container;