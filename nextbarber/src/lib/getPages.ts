// lib/getPages.ts
async function getPages(rootPath: string) {
  const server = process.env.NEXT_PUBLIC_AEM_HOST;

  try {
    const response = await fetch(`${server}${rootPath}.model.json`, {
      headers: {
        Authorization: 'Basic YWRtaW46YWRtaW4=',
      },
    });

    if (!response.ok) return [];

    const data = await response.json();
    const children = data[':children'] || {};

    return Object.entries(children).map(([path, page]: [string, any]) => {
      const match = path.match(/\/content\/archetypebarber\/([^/]+)$/);
      return {
        href: match ? `/${match[1]}` : '/',
        name: page?.title || match?.[1] || 'Home',
      };
    });
  } catch (error) {
    console.error('Erro em getPages:', error);
    return [];
  }
}

export default getPages;