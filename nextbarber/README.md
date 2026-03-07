# Integração AEM SPA + Headless com Next.js

Este guia descreve como integrar o AEM (Adobe Experience Manager) com um SPA (Single Page Application) usando Next.js, incluindo configuração headless.

## 1. Instalar dependências

Primeiro, instale os pacotes necessários para o SPA Editor e comunicação com o AEM:

```bash
npm install @adobe/aem-spa-page-model-manager
npm install @adobe/cq-spa-component-mapping
npm install @adobe/aem-react-editable-components
npm install webpack-assets-manifest
npm install -D @types/webpack
npm install @xmldom/xmldom
npm install @adobe/aem-headless-client-js
```

## 2. Criar a página Remote no AEM Author

No ambiente Author do AEM:

1. Acesse **Sites**.
2. Navegue até o seu archetype.
3. Caso existam páginas padrões (us e en), você pode removê-las se desejar.
4. Crie uma nova página:
   - **Tipo**: Remote Next.js Page
   - **Título**: por exemplo, Home
5. Configure o **SPA Path**:
   - No campo SPA, informe o endereço do frontend: `http://localhost:3000`

## 3. Configurar variáveis de ambiente

Configure o seu `next.config.js` com base no projeto para evitar erros de CORS.

Na raiz do projeto frontend, crie o arquivo `.env.development`:

```env
# AEM instance URL - SEM ASPAS
NEXT_PUBLIC_AEM_HOST=http://localhost:4502

# Next.js app URL - SEM ASPAS
NEXT_PUBLIC_URL=http://localhost:3000

# AEM site name
NEXT_PUBLIC_AEM_SITE=archetypebarber

# Path to home page
NEXT_PUBLIC_AEM_PATH=/content/archetypebarber/home

# Path pages root
NEXT_PUBLIC_AEM_ROOT=/content/archetypebarber

# Model path (opcional, já incluso no .model.json)
NEXT_PUBLIC_AEM_MODEL_PATH=/content/archetypebarber/home.model.json
```

### Significado das variáveis

- `NEXT_PUBLIC_AEM_HOST` → URL da instância Author do AEM
- `NEXT_PUBLIC_URL` → URL da aplicação frontend
- `NEXT_PUBLIC_AEM_SITE` → Nome do archetype/site
- `NEXT_PUBLIC_AEM_PATH` → Caminho da página home no Author
- `NEXT_PUBLIC_AEM_ROOT` → Raiz do conteúdo no Author

## 4. Criar componentes React para o SPA

Dentro de `src`, crie a estrutura:

```
src/
 ├── components/
 │   ├── AEMStartTexts.tsx
 │   └── import-components.ts
```

- **AEMStartTexts**: Será o componente React que o AEM irá renderizar.

## 5. Configurar comunicação com o AEM

Crie uma pasta `src/lib/` e dentro dela:

- **CustomModelClient**: Arquivo responsável por buscar o model JSON do AEM (`src/lib/CustomModelClient.ts`).
  - Aqui você implementa o cliente para consumir `.model.json`.

- **getPages**: Crie também `src/lib/getPages.ts`.
  - Esse arquivo ajudará a resolver as rotas e páginas vindas do AEM.

## 6. Configurar o App para usar CustomModelClient

Integre o CustomModelClient ao App para que o frontend consiga:

- Buscar o modelo remoto
- Mapear os componentes SPA
- Renderizar o conteúdo editável

O App deve inicializar o model manager do AEM antes de renderizar a página.

## 7. Criar API proxy para pegar o estado inicial

Crie a pasta `src/api/` e o arquivo `getNextProps.ts`.

Essa API servirá como proxy para pegar o estado inicial da página.

## 8. Configurar página dinâmica do Next

Na pasta `pages`:

1. Renomeie `index.tsx` para `[[...page]].tsx`.
2. Faça a configuração conforme necessário para a página dinâmica.

## 9. Ativar componente no AEM

1. Acesse o policy da página.
2. Ative o componente que você criou.

Se tudo estiver configurado corretamente, o SPA já estará funcionando.

## 10. Configurando Headless

### Ativar GraphQL Persisted Queries

1. Acesse **Configuration Browser**.
2. Marque seu projeto.
3. Acesse **Properties**.
4. Ative **GraphQL persisted queries**.

### Criar Content Fragment Model

1. Vá em **Content Fragment Models**.
2. Selecione seu projeto.
3. Clique em **Create**.
4. Dê um título para o model (exemplo: "start image").
5. No Content Fragment Model Editor, defina propriedades e tipos (exemplo: para uma URL, use "Single Line Text").
6. Salve.

### Criar Content Fragment

1. Vá em **Assets → Files**.
2. Selecione seu projeto.
3. Clique em **Create**.
4. Para organização, crie uma pasta (exemplo: "Start").
5. Dentro dela, crie um Content Fragment.
6. Selecione o model criado.
7. Clique em **Next**.
8. Dê um título para o fragment.
9. Abra o fragment e preencha os dados conforme os tipos definidos.

### Criar endpoint GraphQL

1. Vá em **GraphQL**.
2. Clique em **Create**.
3. Dê um nome para o endpoint e anote-o.
4. Selecione seu projeto.

### Criar query GraphQL

1. Vá em **GraphQL Query Editor**.
2. Faça uma query para buscar seus fragments.
3. Crie uma **Persisted Query** e anote o nome.
4. Ao clicar nos "..." da persisted query, você terá o link de conexão para usar no código.
5. Você pode usar uma query padrão ou seguir o exemplo de comunicação.

### Variável de ambiente GraphQL

Adicione ao `.env`:

```env
NEXT_GRAPHQL_ENDPOINT="/content/_cq_graphql/nome-do-endpoint/endpoint.json"
```

### Criar arquivo de query

Crie em `src/lib/query` e configure:

- GraphQL
- Persisted queries

Para usar a query, chame-a no `getServerSideProps`.

## Pontos de atenção

- Mantenha as variáveis de ambiente no padrão do projeto.
- Cuidado ao configurar o `next.config.js`; erros podem causar tela branca.
- Use `suppressHydrationWarning` no `ResponsiveGrid` caso tenha problemas de hidratação.