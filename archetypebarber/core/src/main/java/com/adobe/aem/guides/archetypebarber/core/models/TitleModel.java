package com.adobe.aem.guides.archetypebarber.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.day.cq.wcm.api.components.ComponentContext;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = {ComponentExporter.class},
        resourceType = TitleModel.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class TitleModel implements ComponentExporter {

    protected static final String RESOURCE_TYPE = "archetypebarber/components/title";

    @Self
    private SlingHttpServletRequest request;

    @ValueMapValue
    @Default(values = "Default Title")
    private String text;

    @ValueMapValue
    @Default(values = "h2")
    private String type;

    @ValueMapValue
    @Default(values = "#000000")
    private String color;

    @ValueMapValue
    @Default(intValues = 32)
    private int size;

    @JsonProperty("text")
    public String getText() {
        return text;
    }

    @JsonProperty("type")
    public String getType() {
        return type;
    }

    @JsonProperty("color")
    public String getColor() {
        return color;
    }

    @JsonProperty("size")
    public int getSize() {
        return size;
    }

    @JsonProperty("isInEditor")
    public boolean isInEditor() {
        return request.getAttribute(ComponentContext.BYPASS_COMPONENT_HANDLING_ON_INCLUDE_ATTRIBUTE) == null;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}