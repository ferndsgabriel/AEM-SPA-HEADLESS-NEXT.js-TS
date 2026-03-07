// pages/[[...page]].tsx
import { GetServerSideProps } from "next";
import Head from 'next/head';
import { fetchModel } from '@adobe/aem-react-editable-components';
import getPages from "@/lib/getPages";
import dynamic from 'next/dynamic'; // 👈 Importar dynamic
import { QueryClient } from "@/lib/query";

const AEMResponsiveGrid = dynamic(
  () => import('@adobe/aem-react-editable-components').then(mod => mod.ResponsiveGrid),
  { ssr: false } 
) as any;

type PageProps = {
  model: Record<string, any>;
  pagePath: string;
  pages: any[];
  startImage: any;
};

const { NEXT_PUBLIC_AEM_HOST, NEXT_PUBLIC_AEM_ROOT } = process.env;

export default function Home({ model, pagePath, pages, startImage }: PageProps) {

  console.log('Start Image URL:', startImage);

  return (
    <main>
      <Head>
        <title>{model?.title || 'Home'}</title>
      </Head>
      <section style={{backgroundImage:`url(${startImage})`}} 
      className="bg-neutral-600 min-h-screen relative">
        <div className="w-full h-full bg-black/80 absolute top-0 left-0 flex items-center justify-center">
          <div className="w-full max-w-4xl flex flex-col gap-8"> 
            <AEMResponsiveGrid  suppressHydrationWarning clas
              key={pagePath}
              model={model}
              pagePath={pagePath}
              itemPath="root/responsivegrid"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const pageSlug = Array.isArray(context.query.page)
    ? context.query.page.join('/')
    : context.query.page || 'home';

  const pagePath = `/content/archetypebarber/${pageSlug}`;

  const pages = await getPages(NEXT_PUBLIC_AEM_ROOT as string);
  const model = await fetchModel({
    pagePath,
    itemPath: 'root/responsivegrid',
    host: NEXT_PUBLIC_AEM_HOST,
    options: {
      headers: {
        Authorization: 'Basic YWRtaW46YWRtaW4=',
      },
    },
  });

const client = QueryClient.fromEnv();
const res = await client.getAllStartImage();
const startImage = res.data.startImageList.items[0]?.startimageurl || 'No image found';


  return {
    props: {
      model,
      pagePath,
      pages,
      startImage
    },
  };
}