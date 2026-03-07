// @ts-ignore
import AEMHeadless from '@adobe/aem-headless-client-js';

// Definindo interfaces para os tipos de dados

interface EnvVars {
  NEXT_PUBLIC_AEM_HOST?: string;
  NEXT_GRAPHQL_ENDPOINT?: string;
  [key: string]: string | undefined;
}

interface QueryClientConfig {
  serviceURL: string;
  endpoint: string;
}

interface StartImagePath {
  params: {
    path: string[];
  };
}

export class QueryClient {
  private static __envClient: QueryClient;

  private aemHeadlessClient: typeof AEMHeadless.prototype;

  static fromEnv(env: EnvVars = process.env): QueryClient {
    if (!this.__envClient) {
      const { NEXT_PUBLIC_AEM_HOST, NEXT_GRAPHQL_ENDPOINT } = env;
      
      if (!NEXT_PUBLIC_AEM_HOST || !NEXT_GRAPHQL_ENDPOINT) {
        throw new Error('Missing required environment variables: NEXT_PUBLIC_AEM_HOST and NEXT_GRAPHQL_ENDPOINT');
      }
      
      this.__envClient = new QueryClient({
        serviceURL: NEXT_PUBLIC_AEM_HOST,
        endpoint: NEXT_GRAPHQL_ENDPOINT,
      });
    }
    return this.__envClient;
  }

  constructor({ serviceURL, endpoint }: QueryClientConfig) {
    this.aemHeadlessClient = new AEMHeadless({
      serviceURL,
      endpoint,
      auth: ['admin', 'admin'], // TODO: dynamically set auth based on AEM instance
      fetch
    });
  }

  async getAllStartImage(): Promise<any> {
    const queryQuerysAll = 'archetypebarber/startimage';
    const res = await this.aemHeadlessClient.runPersistedQuery(queryQuerysAll);
    return res;
  }

}