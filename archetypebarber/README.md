# ✂️ Archetype Barber - Backend AEM

> Módulo backend do projeto Barbearia AEM, contendo componentes, modelos Sling e configurações do Adobe Experience Manager

---

## 📋 Sobre o Projeto

O **Archetype Barber** é o módulo backend do sistema de gerenciamento de conteúdo para barbearia, construído com Adobe Experience Manager (AEM). Este módulo contém todos os componentes Java, modelos Sling e configurações necessárias para o funcionamento do sistema.

### 🏗️ Funcionalidades

- **Componentes AEM**: Componentes customizados para exibição de textos e conteúdos
- **Modelos Sling**: Classes Java para injeção de dados nos componentes
- **Diálogos**: Interfaces de configuração para autores de conteúdo
- **Integração SPA**: Suporte completo para Single Page Applications

---

## 🚀 Guia de Configuração

### 📦 Geração do Projeto Archetype

Execute o comando abaixo no diretório onde está localizada sua instância AEM Author:

```bash
mvn -B org.apache.maven.plugins:maven-archetype-plugin:3.2.1:generate \
  -D archetypeGroupId=com.adobe.aem \
  -D archetypeArtifactId=aem-project-archetype \
  -D archetypeVersion=41 \
  -D aemVersion=cloud \
  -D appTitle="Archetype Barber" \
  -D appId="archetypebarber" \
  -D groupId="com.adobe.aem.guides.archetypebarber" \
  -D frontendModule="decoupled"
```

#### 🔧 Comando Alternativo (Executar como Administrador)

Se houver problemas com permissões, execute o terminal como administrador:

```bash
mvn -B org.apache.maven.plugins:maven-archetype-plugin:3.2.1:generate -DarchetypeGroupId=com.adobe.aem -DarchetypeArtifactId=aem-project-archetype -DarchetypeVersion=41 -DaemVersion=cloud -DappTitle="Archetype Barber" -DappId="archetypebarber" -DgroupId="com.adobe.aem.guides.archetypebarber" -DfrontendModule="decoupled"

```

---

## ⚙️ Desenvolvimento de Componentes

### 📝 Criando um Modelo Sling

1. **Navegue até a pasta dos modelos:**
   ```
   core/src/main/java/com/adobe/aem/guides/archetypebarber/core/models/
   ```

2. **Crie um novo arquivo Java** baseado no `HelloWorldModel.java` padrão
   - Exemplo: `StartTextsModels.java`

3. **Implemente as anotações necessárias:**
   - `@Model(adaptables = Resource.class)`
   - `@ValueMapValue` para propriedades injetadas
   - `@PostConstruct` para inicialização

### 🎨 Criando Diálogos de Componente

1. **Navegue até a pasta dos componentes:**
   ```
   ui.apps/src/main/content/jcr_root/apps/archetypebarber/components/
   ```

2. **Crie uma pasta** com o nome do componente (letras minúsculas)
   - Exemplo: `starttexts/`

3. **Crie os arquivos necessários:**
   - `.content.xml` - Definição do componente
   - `_cq_dialog/.content.xml` - Diálogo de configuração

4. **Configure os campos do diálogo:**
   ```xml
   <text1
       jcr:primaryType="nt:unstructured"
       sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
       fieldLabel="Text 1"
       name="./text1"/>
   ```

---

## 🔧 Comandos de Build e Deploy

### 📦 Build Completo
```bash
mvn clean install -PautoInstallSinglePackage -DskipTests
```

### 🚀 Deploy para AEM Author
```bash
mvn clean install -PautoInstallSinglePackage
```

**⚠️ Importante:** Certifique-se de que sua instância AEM Author esteja executando antes do deploy.

---

## 📂 Estrutura do Projeto

```
archetypebarber/
├── core/                          # Módulo Java (OSGi bundle)
│   └── src/main/java/
│       └── com/adobe/aem/guides/archetypebarber/core/
│           ├── models/            # Modelos Sling
│           ├── servlets/          # Servlets OSGi
│           └── filters/           # Filtros de requisição
├── ui.apps/                       # Conteúdo da interface (apps/)
│   └── src/main/content/jcr_root/apps/archetypebarber/
│       └── components/            # Componentes AEM
├── ui.content/                    # Conteúdo de exemplo (content/)
├── ui.config/                     # Configurações OSGi
└── README.md
```

---

## 🔗 Próximos Passos

Após configurar o backend, acesse a pasta `nextbarber` no frontend para continuar o desenvolvimento da interface Next.js:

```bash
cd ../nextbarber
npm install
npm run dev
```

---

## 📚 Referências

- [Documentação Adobe AEM](https://experienceleague.adobe.com/docs/experience-manager.html)
- [Sling Models](https://sling.apache.org/documentation/bundles/models.html)
- [HTL (HTML Template Language)](https://experienceleague.adobe.com/docs/experience-manager-htl.html)

---

## 📧 Suporte

Para dúvidas sobre desenvolvimento AEM ou configuração de componentes, consulte a documentação oficial da Adobe ou abra uma issue no repositório.

---

**Desenvolvido por ferndsgabriel**