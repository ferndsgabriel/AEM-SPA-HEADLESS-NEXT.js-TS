import React from 'react';
import { EditableComponent } from '@adobe/aem-react-editable-components';

const app = process.env.NEXT_PUBLIC_AEM_SITE;


interface orangeButtonProps {
    buttonText?: string;
    buttonLink?: string;
}

export const resourceTypeOrangeButton = `${app}/components/orangebutton`;

export const OrangeButtonEditConfigs = {
    emptyLabel: 'Enter button text', // Label to show in the component placeholder in the editor
    isEmpty: function(props: any) {
        return !props || !props.buttonText || !props.buttonLink; 
    },
    resourceType: resourceTypeOrangeButton
};

export const OrangeButton = (props: orangeButtonProps) => {
        return(
            <a href={props.buttonLink} className="bg-orange-500 text-white px-4 py-2">
                {props.buttonText}
            </a>
        )
    }


export const AEMOrangeButton = (props: orangeButtonProps) => <EditableComponent config={OrangeButtonEditConfigs} {...props}><OrangeButton/></EditableComponent>;