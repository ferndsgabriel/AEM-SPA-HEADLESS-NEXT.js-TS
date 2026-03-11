import React from 'react';
import { EditableComponent } from '@adobe/aem-react-editable-components';
import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';

const app = process.env.NEXT_PUBLIC_AEM_SITE;

const isInEditor = AuthoringUtils.isInEditor();

interface GapProps {
    gap?: number;
}


export const resourceTypeGap = `${app}/components/gap`;


export const GapEditConfigs = {
    emptyLabel: 'Enter GAP',
    isEmpty: function(props: any) {
        return !props || !props.gap; 
    },
    resourceType: resourceTypeGap
};



export const Gap  :React.FC<GapProps> = (props: GapProps) => {

        return(
            <>
                
                {props.gap && (
                    <div style={{height: `${props.gap}px`}} 
                    className={`${isInEditor && 'is-in-editor'} w-full reset-container-aem`}/>    
                )}
            </>
        )
    }


export const AEMGap = (props: GapProps) => <EditableComponent config={GapEditConfigs} {...props}><Gap/></EditableComponent>;