// pages/_app.tsx
import '@/styles/globals.css';
import { ModelManager } from '@adobe/aem-spa-page-model-manager';
import CustomModelClient from '../lib/CustomModelClient';
import '../components/import-components';

interface AppProps{
  Component: React.ComponentType<any>;
  pageProps: any;
} 

const modelClient = new CustomModelClient(process.env.NEXT_PUBLIC_AEM_HOST);
ModelManager.initializeAsync({
  modelClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}