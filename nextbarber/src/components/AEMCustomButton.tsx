import React from 'react';
import { EditableComponent } from '@adobe/aem-react-editable-components';
import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';

const app = process.env.NEXT_PUBLIC_AEM_SITE;

const isInEditor = AuthoringUtils.isInEditor();

interface CustomButtonProps {
    buttonText?: string;
    buttonLink?: string;
}

export const resourceTypeCustomButton = `${app}/components/button`;

export const CustomButtonEditConfigs = {
    emptyLabel: 'Enter button text',
    isEmpty: function(props: any) {
        return !props || !props.buttonText || !props.buttonLink; 
    },
    resourceType: resourceTypeCustomButton
};



export const CustomButton: React.FC<CustomButtonProps> = (props) => {
    console.log(props)
        return(
            <>
                {props.buttonText && (
                    <div className={`${isInEditor && 'is-in-editor'} py-4`}>
                        <a href={props.buttonLink} className="bg-orange-500 text-white px-8 py-3 font-semibold my-auto">
                            {props.buttonText}
                        </a>
                    </div>
                )}
            </>
        )
    }


export const AEMCustomButton = (props: CustomButtonProps) => <EditableComponent config={CustomButtonEditConfigs} {...props}><CustomButton/></EditableComponent>;