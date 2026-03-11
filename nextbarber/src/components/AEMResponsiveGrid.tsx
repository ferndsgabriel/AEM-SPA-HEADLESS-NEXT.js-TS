import dynamic from 'next/dynamic'; 

export  const AEMResponsiveGrid = dynamic(
    () => import('@adobe/aem-react-editable-components').then(mod => mod.ResponsiveGrid),
    { ssr: false } 
) as any;