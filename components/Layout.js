import PropTypes from 'prop-types';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = props => {
  const { children } = props;

  return (
    <div>
      <Head>
        <title>Bit Coin Price Index</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/pulse/bootstrap.min.css" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
