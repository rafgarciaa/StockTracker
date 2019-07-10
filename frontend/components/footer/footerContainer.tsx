import { connect } from 'react-redux';
import FooterLayout from './footerLayout';
import { RootState } from '../../utilities/interfaces';

const harcodedData = {
  nasdaq: {
    symbol: 'nasdaq',
    latestPrice: 6850.05,
    change: 72.89,
    changePercent: 1.08,
  },
  djia: {
    symbol: 'djia',
    latestPrice: 23026.35,
    change: 1650.89,
    changePercent: 0.7,
  },
  's&p': {
    symbol: 's&p',
    latestPrice: 2605.35,
    change: 23.35,
    changePercent: 0.94,
  },
};

const mapStateToProps = (state: RootState) => ({
  marketList: harcodedData,
  favoriteList: state.quotes.favorites,
});

export default connect(
  mapStateToProps,
  null
)(FooterLayout);