import React from 'react';
import { EditableComponent } from '@adobe/aem-react-editable-components';
import { AEMResponsiveGrid } from './AEMResponsiveGrid';
import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';

const app = process.env.NEXT_PUBLIC_AEM_SITE;

const isInEditor = AuthoringUtils.isInEditor();

interface DisplayFlexProps {
    flexDirection?: string;
    justifyContent?: string;
    padding?: number;
    alignItems?: string;
    backgroundColor?: string;
    gap?: number;
    cqPath?: string;
    cqItems?: Record<string, unknown>;
    cqItemsOrder?: string[];
}

export const resourceTypeDisplayFlex = `${app}/components/displayflex`;

export const DisplayFlexEditConfigs = {
    emptyLabel: 'Config Layout – add components inside',
    isEmpty: function (props: any) {
        return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0;
    },
    resourceType: resourceTypeDisplayFlex,
};

export const DisplayFlex: React.FC<DisplayFlexProps> = (props) => {
    return (
        <>
            <style>
                {
                    `
                        .config-layout .aem-container {
                            display: flex;
                            flex-wrap: wrap;
                            background-color: ${props.backgroundColor ? props.backgroundColor : 'transparent'};
                            padding: ${props.padding}px;
                            flex-direction: ${props.flexDirection ? props.flexDirection : 'column'};
                            justify-content: ${props.justifyContent ? props.justifyContent : 'flex-start'};
                            align-items: ${props.alignItems ? props.alignItems : 'stretch'};
                            gap: ${props.gap}px;
                            width: 100%;
                        }
                    `
                }
            </style>

            <div className={`config-layout w-full ${isInEditor && 'is-in-editor'}`}>
                <AEMResponsiveGrid
                    cqPath={props.cqPath!}
                    cqItems={props.cqItems ?? {}}
                    cqItemsOrder={props.cqItemsOrder ?? []}
                />
            </div>

        </>
    );
};

export const AEMDisplayFlex = (props: DisplayFlexProps) => (
    <EditableComponent config={DisplayFlexEditConfigs} {...props}>
        <DisplayFlex {...props} />
    </EditableComponent>
);