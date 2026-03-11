import { MapTo } from '@adobe/aem-react-editable-components';

import {resourceTypeTitle, AEMTitle} from "./AEMTitle";
import {AEMDescription, resourceTypeDescription} from "./AEMDesription";
import {resourceTypeCustomButton, AEMCustomButton} from "./AEMCustomButton";
import {AEMGap, resourceTypeGap} from "./AEMGap";
import {AEMDisplayFlex, resourceTypeDisplayFlex} from "./AEMDisplayFlex";
import {resourceTypeBorder, AEMBorder} from "./AEMBorder";


MapTo(resourceTypeTitle)(AEMTitle)
MapTo(resourceTypeDescription)(AEMDescription)
MapTo(resourceTypeCustomButton)(AEMCustomButton)
MapTo(resourceTypeGap)(AEMGap)
MapTo(resourceTypeDisplayFlex)(AEMDisplayFlex)
MapTo(resourceTypeBorder)(AEMBorder)
