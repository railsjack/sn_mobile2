/**
 * We create styles for Login Component here
 * name: styles
 * type: export default object {}, ex: export default {}
 * includes:
 *  imageContainer
 *    container
 *      logo
 *      textInput
 *      btnLogin
 *      btnLogin_text
 *
 *
 */


import { Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const logoWidth = 150;
const logoHeight = 150;
const TEXT_COLOR = 'lightgray';
const BUTTON_COLOR = 'white';
const SUCCESS_DISABLED = "rgba(0,255,0,0.1)";

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
             * logo has
             * width: logoWidth(const-defined above)
             * height: logoHeight(const-defined above)
             * marginBottom: 50px
             * */
            logo: {
                width: logoWidth,
                height: logoHeight,
                marginBottom: 50
            },
            /**
             * textInput has
             * width: 80%, height: 40px
             * border: 1px white rounded
             * marginTop: 8px
             * font: 18px TEXT_COLOR
             * */
            textInput: {
                width: '80%',
                height: 40,
                borderColor: TEXT_COLOR,
                borderWidth: 1,
                borderRadius: 4,
                paddingHorizontal: 10,
                marginTop: 8,
                fontSize: 18,
                color: TEXT_COLOR,
            },
            /**
             * Default Button has
             * width: 80%, height: 40px
             * marginTop: 10px, margin-centered
             * */
            button_base: {
                height: 40,
                width: '80%',
                marginTop: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            /**
             * Default Button Text has
             * font: 18px BUTTON_COLOR
             * lineHeight: 20px
             * */
            button_text: {
                color: BUTTON_COLOR,
                fontSize: 18,
                lineHeight: 20
            },
            /**
             * Disabled button has
             * backgroundColor: "rgba(0,255,0,0.1)",
             * */
            button_base_disabled:{
                backgroundColor: SUCCESS_DISABLED,
            }
};

