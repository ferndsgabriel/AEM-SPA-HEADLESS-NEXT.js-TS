import React from 'react';
import { EditableComponent } from '@adobe/aem-react-editable-components';
import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
const app = process.env.NEXT_PUBLIC_AEM_SITE;

const isInEditor = AuthoringUtils.isInEditor();

interface BorderProps {
    height?: number;
    width?: number;
    color?: string;
    isInEditor?: boolean;
}


export const resourceTypeBorder = `${app}/components/border`;


export const BorderEditConfigs = {
    emptyLabel: 'Enter Border',
    isEmpty: function(props: any) {
        return !props || !props.color; 
    },
    resourceType: resourceTypeBorder
};


    


export const Border  :React.FC<BorderProps> = (props: BorderProps) => {
        const style: React.CSSProperties = {
            height: props.height ? `${props.height}px` : '1px',
            width: props.width ? `${props.width}%` : '100%',
            backgroundColor: props.color || '#000',
        }

        return(
            <>
                {props.height && props.height > 0 && props.color && (
                    <div className={`${isInEditor && 'is-in-editor'}`}>
                        <div >
                            test
                        </div>
                    </div>    
                )}
            </>
        )
    }


export const AEMBorder = (props: BorderProps) => <EditableComponent config={BorderEditConfigs} {...props}><Border/></EditableComponent>;