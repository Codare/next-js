import Fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const Index = ({
  bpi: {
    time: { updated }
  }
}) => (
  <Layout>
    <div className="container">
      <h6>Welcome to the bit coin price index service</h6>
      {updated}
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await Fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

  const data = await res.json();

  console.log('data:dfsfsfd', data);

  return {
    bpi: data
  };
};

// const tweetPropType = PropTypes.shape({
//   id: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   author: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     username: PropTypes.string.isRequired,
//     firstName: PropTypes.string,
//     lastName: PropTypes.string,
//   }).isRequired
// });
// PropTypes.oneOfType([null, PropTypes.object])

const indexPropTypes = PropTypes.shape({
  bpi: PropTypes.shape({
    time: PropTypes.shape({
      updated: PropTypes.string
    })
  })
}).isRequired;

Index.defaultProps = {
  bpi: null,
  time: {
    updated: 'fred'
  }
};

Index.propTypes = indexPropTypes;

export default Index;
