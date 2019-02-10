import PropTypes from 'prop-types';

class BitCoinPrices extends React.Component {
  state = {
    currency: 'GBP'
  };

  render() {
    const { bpid } = this.props;
    const { currency } = this.state;
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {bpid.bpi[currency].description}:{' '}
            <span className="badge badge-primary">{bpid.bpi[currency].code}</span>
            <strong>{bpid.bpi[currency].rate}</strong>
          </li>
        </ul>
        <br />
        <select onChange={e => this.setState({ currency: e.target.value })} className="form-control">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

const bitCoinPricesPropTypes = {
  bpid: PropTypes.shape({
    bpi: PropTypes.object
  })
};

BitCoinPrices.propTypes = bitCoinPricesPropTypes;

export default BitCoinPrices;
