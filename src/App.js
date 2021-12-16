import AppRoute from './routes/AppRoute';
import routes from './routes/index';

function App() {
  return (
    <AppRoute routes={routes} />
  );
}

export default App;
