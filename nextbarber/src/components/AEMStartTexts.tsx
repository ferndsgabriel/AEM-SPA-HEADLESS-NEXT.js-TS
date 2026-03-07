import React from 'react';
import { EditableComponent } from '@adobe/aem-react-editable-components';

const app = process.env.NEXT_PUBLIC_AEM_SITE;


interface StartTextProps {
    text1?: string;
    text2?: string;
    text3?: string;
}

export const resourceTypeStartTexts = `${app}/components/starttexts`;

export const StartTextEditConfigs = {
    emptyLabel: 'Enter Texts', // Label to show in the component placeholder in the editor
    isEmpty: function(props: any) {
        return !props || !props.text1 || !props.text2 || !props.text3; // Define when the component is considered empty
    },
    resourceType: resourceTypeStartTexts
};

export const StartTexts = (props: StartTextProps) => {
        return(
            <article className='flex flex-col gap-4 py-16'>
                <div className='flex flex-col gap-5 border-b-[1px] border-neutral-500 py-4'>
                    <h2 className='text-neutral-200 text-2xl'>{props.text1}</h2>
                    <h1 className='font-semibold text-orange-500 text-3xl'>{props.text2}</h1>
                </div>
                <p className='text-neutral-400 font-light'>{props.text3}</p>
            </article>
        )
    }


export const AEMStartTexts = (props: StartTextProps) => <EditableComponent config={StartTextEditConfigs} {...props}><StartTexts/></EditableComponent>;