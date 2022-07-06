import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import { Checkbox } from 'antd';


const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  
  const App = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;

export default function Checklist() {
    <App />
    
    return (
      
      <Head>
        <title>Checklist</title>
      </Head>

    
      
  ); 
}