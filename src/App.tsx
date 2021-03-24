import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CalendarSummary from './components/CalendarSummary';

const App: React.FC = () => {

  return (
    <div className="App">
      <Header />

      <div className="App__content">
        <CalendarSummary />
      </div>

      <Footer />
    </div>
  );
}

export default App;
