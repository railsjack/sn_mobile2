/**
 * We create styles for Loading Component here
 * name: styles
 * type: export default object {}, ex: export default {}
 * includes:
 *  imageContainer
 *    container
 *
 */


import { Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const TEXT_COLOR = 'lightgray';

/**
 *
 *  - declare and define "styles" for views (container)
 *    flex: 1, justfiyContent: 'center' (Vertically), alignItems: 'center' (Horizontally)
 *
 */

export default {
    /**
     * imageContainer has all elements on itself.
     * flex: 1, width: unlimited, height: unlimited
     * */
    imageContainer: {
        flex: 1,
        width: null,
        height: null,
    },

        /**
         * Container has the following features.
         * Horizontal-center, Vertical-center
         * Margin-top: height/8
         * Margin-bottom: 30px
         * */
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: deviceHeight / 8,
            marginBottom: 30
        },

            /**
             * textInput has
             * width: 80%, height: 40px
             * border: 1px white rounded
             * marginTop: 8px
             * font: 18px TEXT_COLOR
             * */
            text: {
                color: TEXT_COLOR,
            }
};

