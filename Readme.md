# ✂️ Barbearia AEM Project

> Uma solução completa de gerenciamento de conteúdo para barbearia, construída com Adobe Experience Manager (AEM)

---

## 📋 Sobre o Projeto

O **Barbearia AEM** é uma arquitetura moderna que combina AEM (Adobe Experience Manager) com tecnologias de ponta para criar uma experiência de gerenciamento de conteúdo sem igual.

### 🏗️ Arquitetura

```
┌─────────────────────────────────────────┐
│   Frontend NextJS (SPA)                 │
└────────────────┬────────────────────────┘
                 │
         ┌───────┴────────┐
         ▼                ▼
┌─────────────────┐ ┌──────────────────┐
│      AEM SDK    │ │     Archetype    │                  
└─────────────────┘ └──────────────────┘
```

**Divisão técnica:** AEM SDK | AEM Archetype Java | Frontend NextJS

---

## 🚀 Guia de Instalação

### 📦 Pré-requisitos

- Adobe Experience Manager (AEM) SDK instalado
- Java Development Kit (JDK) 11 ou superior
- Node.js e npm (para o frontend NextJS)

### 📂 Estrutura de Pastas

```
~/Development/Barbearia-aem/
├── author/                    # Instância local do AEM 
├── nextbarber/                  # Projeto NextJS (SPA)
├── archetypebarber/          # Backend        
└── README.md
```

### ⚙️ Configuração Passo a Passo

#### **Passo 1:** Baixar Adobe AEM SDK

- Acesse o [Portal do Adobe Experience Manager](https://experience.adobe.com)
- Faça download da versão mais recente do AEM SDK

#### **Passo 2:** Preparar Pasta Author

```bash
cd ~/Development/Barbearia-aem
mkdir author
```

#### **Passo 3:** Configurar JAR do Author

1. Baixe o SDK da Adobe AEM
2. Renomeie o arquivo para: `aem-author-p4502.jar`
3. Mova o arquivo para a pasta `author/`

```bash
mv /caminho/do/arquivo.jar ./author/aem-author-p4502.jar
```

#### **Passo 4:** Iniciar a Instância Author

```bash
cd author
java -jar aem-author-p4502.jar -gui
```

⏳ **Aguarde:** A instância do projeto pode levar alguns minutos para iniciar. Você verá uma GUI se a operação for bem-sucedida.

#### **Passo 5:** Acessar o archetype

Acesse a pasta `archetypebarber` para prosseguir com as instruções de setup do frontend:



📖 **Continue as instruções no README do repositório `archetypebarber`**





---

## 🔧 Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `java -jar aem-author-p4502.jar -gui` | Iniciar AEM 
---

## 📝 Notas Importantes

- ⚠️ A instância AEM pode consumir bastante memória RAM (mínimo 4GB recomendado)
- 🔐 Configure credenciais padrão na primeira inicialização
- 💾 Backup de dados periódicos é recomendado
- 🌐 AEM Author padrão: `http://localhost:4502`

---

## 📧 Suporte

Para dúvidas ou problemas de configuração, consulte a documentação oficial da Adobe ou abra uma issue no repositório.

---

**Desenvolvido por ferndsgabriel**