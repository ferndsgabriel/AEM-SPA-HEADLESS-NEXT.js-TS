import React from 'react';
import { EditableComponent } from '@adobe/aem-react-editable-components';
import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';

const app = process.env.NEXT_PUBLIC_AEM_SITE;

const isInEditor = AuthoringUtils.isInEditor();

interface TitleProps {
    text?: string;
    size?: number;
    type?: keyof JSX.IntrinsicElements;
    color?: string;
}

export const resourceTypeTitle = `${app}/components/title`;

export const TitleEditConfigs = {
    emptyLabel: 'Enter Title', 
    isEmpty: function(props: any) {
        return !props.text 
    },
    resourceType: resourceTypeTitle
};



export const Title: React.FC<TitleProps> = (props) => {
    const styles: React.CSSProperties = {
        fontSize: `${props.size || 32}px`,
        color: props.color || 'black',
        fontWeight: 'bold',
    }
        return(
            <>
                {props.text && (props.type
                    ? React.createElement(props.type, { style: styles, className: isInEditor ? 'is-in-editor' : '' }, props.text)
                    : <h1 style={styles}>{props.text}</h1>
                )}
            </>
        )
    }


export const AEMTitle = (props: TitleProps) => <EditableComponent config={TitleEditConfigs} {...props}><Title/></EditableComponent>;