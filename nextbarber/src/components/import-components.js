import { MapTo } from '@adobe/aem-react-editable-components'
import {AEMStartTexts, resourceTypeStartTexts} from "./AEMStartTexts"
import {AEMHelloWorld, resourceTypeHelloWorld} from "./AEMHelloWord";
import {AEMOrangeButton, resourceTypeOrangeButton} from "./AEMOrangeButton";



MapTo(resourceTypeStartTexts)(AEMStartTexts)
MapTo(resourceTypeHelloWorld)(AEMHelloWorld)
MapTo(resourceTypeOrangeButton)(AEMOrangeButton)