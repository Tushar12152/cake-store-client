
import { PropTypes } from 'prop-types';
const Title = ({heading}) => {
    return (
        <div>
             <h1 className='text-center font-bold text-4xl text-pink-400 p-5 border-b-2 w-[50%] mx-auto mb-10'>{heading}</h1>
        </div>
    );
};

Title.propTypes={
    heading:PropTypes.node,
}
export default Title;