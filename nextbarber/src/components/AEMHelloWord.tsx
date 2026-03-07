import React from 'react'
import { EditableComponent } from '@adobe/aem-react-editable-components'

const { NEXT_PUBLIC_AEM_SITE } = process.env;

interface HelloWorldProps {
    text?: string;
}   
const app = process.env.NEXT_PUBLIC_AEM_SITE;
export const resourceTypeHelloWorld= `${app}/components/helloworld`;

export const HelloWorldEditConfig = {
    emptyLabel: 'Hello World',
    isEmpty: function(props:any) {
        return !props.text || props.text.trim().length === 0;
    },
    resourceType: resourceTypeHelloWorld
};


export const HelloWorld = (props: HelloWorldProps) => {
    if (!props.text) return null;
    return (
        <div className="helloworld-container p-4">
            <p className="text-lg font-medium text-blue-600">
                {props.text}
            </p>
        </div>
    );
};



export const AEMHelloWorld = (props: HelloWorldProps) => <EditableComponent config={HelloWorldEditConfig} {...props}><HelloWorld/></EditableComponent>;