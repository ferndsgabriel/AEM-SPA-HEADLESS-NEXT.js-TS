package com.adobe.aem.guides.archetypebarber.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ContainerExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.LayoutContainer;
import com.fasterxml.jackson.annotation.JsonProperty;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.via.ResourceSuperType;

import java.util.Map;

@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = {ContainerExporter.class, ComponentExporter.class},
        resourceType = DisplayFlexModel.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class DisplayFlexModel implements ContainerExporter {

    protected static final String RESOURCE_TYPE = "archetypebarber/components/displayflex";

    @Self
    @Via(type = ResourceSuperType.class)
    private LayoutContainer superModel;

    @ValueMapValue
    @Default(values = "column")
    private String flexDirection;

    @ValueMapValue
    @Default(intValues = 0)
    private int gap;

    @ValueMapValue
    @Default(intValues = 0)
    private int padding;

    @ValueMapValue
    @Default(values = "flex-start")
    private String alignItems;

    @ValueMapValue
    @Default(values = "flex-start")
    private String justifyContent;

    @ValueMapValue
    @Default(values = "transparent")
    private String backgroundColor;

    @JsonProperty("flexDirection")
    public String getFlexDirection() {
        return flexDirection;
    }

    @JsonProperty("gap")
    public int getGap() {
        return gap;
    }

    @JsonProperty("padding")
    public int getPadding() {
        return padding;
    }

    @JsonProperty("alignItems")
    public String getAlignItems() {
        return alignItems;
    }

    @JsonProperty("justifyContent")
    public String getJustifyContent() {
        return justifyContent;
    }

    @JsonProperty("backgroundColor")
    public String getBackgroundColor() {
        return backgroundColor;
    }

    @Override
    @JsonProperty("cqItems")
    public Map<String, ? extends ComponentExporter> getExportedItems() {
        return superModel.getExportedItems();
    }

    @Override
    @JsonProperty("cqItemsOrder")
    public String[] getExportedItemsOrder() {
        return superModel.getExportedItemsOrder();
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}