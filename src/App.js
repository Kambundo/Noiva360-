import { CustomerProvider } from './context/Customer';
// importando rotas
import Routers from './routers/Routers'
function App() {

  return (
    <CustomerProvider>
      <Routers />
    </CustomerProvider>
  );
}

export default App;