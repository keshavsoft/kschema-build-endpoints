import pullEndpoints from "kschema-pull-endpoints";
import pullMethods from "kschema-pull-methods";

const startFunc = ({ toPath, inAction = "Crud", inTargetPath }) => {
    switch (inAction) {
        case "Crud":
            const endpoints = pullEndpoints({ toPath, inTargetPath });

            endpoints.forEach(element => {

            });

            // const methods = pullMethods({ toPath, inTargetPath });


            return endpoints;
            break;
        default:
            break;
    }
    return true;
};

export default startFunc;