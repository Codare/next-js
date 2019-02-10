import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import BitCoinPrices from '../components/BitCoinPrices';

const Index = ({ bpi }) => (
  <Layout>
    <div className="container">
      <h6>Welcome to the bit coin price index service</h6>
      <BitCoinPrices bpid={bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

  const data = await res.json();

  console.log('data:dfsfsfd', data);

  return {
    bpi: data
  };
};

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
