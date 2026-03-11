import React from 'react';
import { EditableComponent } from '@adobe/aem-react-editable-components';
import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';

const app = process.env.NEXT_PUBLIC_AEM_SITE;

const isInEditor = AuthoringUtils.isInEditor();

interface DescriptionProps {
    text?: string;
    size?: number;
    type?: keyof JSX.IntrinsicElements;
    color?: string;
}

export const resourceTypeDescription = `${app}/components/description`;

export const DescriptionEditConfigs = {
    emptyLabel: 'Enter Description', 
    isEmpty: function(props: any) {
        return !props.text 
    },
    resourceType: resourceTypeDescription
};



export const Description: React.FC<DescriptionProps> = (props) => {
    console.log(props)

    const styles: React.CSSProperties = {
        fontSize: `${props.size || 32}px`,
        color: props.color || 'black',
    }
        return(
            <>
                {props.text && (props.type
                    ? React.createElement(props.type, { style: styles, className: isInEditor ? 'is-in-editor' : '' }, props.text)
                    : <p style={styles} className={isInEditor ? 'is-in-editor' : ''}>
                        {props.text}
                    </p>
                )}
            </>
        )
    }


export const AEMDescription = (props: DescriptionProps) => <EditableComponent config={DescriptionEditConfigs} {...props}><Description/></EditableComponent>;