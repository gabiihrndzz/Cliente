import './App.css';
import { useState } from 'react';
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import MaterialForm from './components/MaterialForm';
import { BorderBottom } from '@mui/icons-material';
function App() {
const [tabVisible, setTabVisible] = useState(0);
const manejador = (evento, indice) => {
console.log(indice);
setTabVisible(indice);
}
return (
<div>
<Box sx={{borderBottom: 1, borderColor: 'divider'}}>
<Tabs value={0} onChange={manejador} aria-label='Ejemplo básico de tabs'>
<Tab label='Tab 1' />
<Tab label='Tab 2' />
<Tab label='Tab 3' />
</Tabs>
</Box>
{tabVisible === 0 && <div>Item 1</div>}
{tabVisible === 1 && <div>Item 2</div>}
{tabVisible === 2 && <div>Item 3</div>}
<MaterialForm />
</div>
);
}
export default App;