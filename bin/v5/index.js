import path from "path";

import pullEndpoints from "kschema-pull-endpoints";
import pullMethods from "kschema-pull-methods";
import fsReadContent from "node-fs-read-content";
import anyJsStory from "pattern-collector-anyjs-story";

const startFunc = ({ toPath, inAction = "Crud",
    inTargetPath, extractRegex }) => {

    switch (inAction) {
        case "Crud":
            let endPointsArray = [];

            let endpointsWithContent = [];

            const fromPullEndPoints = pullEndpoints({ toPath, inTargetPath });

            endpointsWithContent = fsReadContent({ filePaths: fromPullEndPoints });

            endpointsWithContent.forEach(element => {
                const fileContent = element?.fileContent;
                const fileType = element?.fileType;

                const story = anyJsStory({
                    fileContent, fileType
                });
            });

            // endpointsWithContent.forEach(loopEndPoint => {
            //     const methodsContent = pullMethods({
            //         filePath: loopEndPoint.fileFullPath,
            //         fileContent: loopEndPoint.fileContent,
            //         inTargetPath, extractRegex
            //     });
            //     // console.log("aaaaaaaa : ", element);

            //     methodsContent.forEach(loopMethodsContent => {
            //         endPointsArray.push({
            //             endPointContent: loopEndPoint,
            //             methodsContent: loopMethodsContent
            //         });
            //     });
            // });

            return endPointsArray;
            break;
        default:
            break;
    }
    return true;
};

export default startFunc;