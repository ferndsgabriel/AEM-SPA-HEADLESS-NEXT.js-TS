package com.adobe.aem.guides.archetypebarber.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.day.cq.wcm.api.WCMMode;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = { ComponentExporter.class },
        resourceType = BorderModel.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class BorderModel implements ComponentExporter {

    protected static final String RESOURCE_TYPE = "archetypebarber/components/border";

    @Self
    private SlingHttpServletRequest request;

    @ValueMapValue
    @Default(intValues = 1)
    private int height;

    @ValueMapValue
    @Default(intValues = 100)
    private int width;

    @ValueMapValue
    @Default(values = "#000000")
    private String color;

    @JsonProperty("height")
    public int getHeight() {
        return height;
    }

    @JsonProperty("width")
    public int getWidth() {
        return width;
    }

    @JsonProperty("color")
    public String getColor() {
        return color;
    }

    @JsonProperty("isInEditor")
    public boolean isInEditor() {
        WCMMode mode = WCMMode.fromRequest(request);
        return mode != null && mode == WCMMode.EDIT;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}