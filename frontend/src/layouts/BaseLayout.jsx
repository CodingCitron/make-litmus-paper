import PropTypes from 'prop-types'

const BaseLayout = ({ children }) => {
  return (
    <div>
       <header></header>
      <div>
        { children }
      </div>
      <footer></footer>
    </div>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayout;