import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Christopher Graham'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Christopher Graham'} />
      </Helmet>
      <App />
    </>
  );
};
