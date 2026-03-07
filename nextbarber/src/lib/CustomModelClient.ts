// lib/CustomModelClient.ts
import { ModelClient } from "@adobe/aem-spa-page-model-manager";

/**
 * Custom ModelClient meant to demonstrate how to customize the request sent to the AEM instance
 */
export default class CustomModelClient extends ModelClient {

    /**
     * Fetches a model using the given a resource path
     *
     * @param {string} modelPath - Path to the model
     * @return {Promise<any>}
     */
    fetch(modelPath: string): Promise<any> {
        if (!modelPath) {
            const err = 'Fetching model rejected for path: ' + modelPath;
            return Promise.reject(new Error(err));
        }

        // Either the API host has been provided or we make an absolute request relative to the current host
        const url = `${(this as any)._apiHost}${modelPath}`;
        console.log(`custom model client is called ${url}`);

        return fetch(url, {
            headers: {
                Authorization: 'Basic YWRtaW46YWRtaW4='
            }
        }).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                const error: any = new Error('while fetching the model for url: ' + url + ' - ' + (response.statusText || response.status));
                error.response = response;
                return Promise.reject(error);
            }
        });
    }
}