import pullEndpoints from "kschema-pull-endpoints";
import pullMethods from "kschema-pull-methods";
import fsReadContent from "node-fs-read-content";

const startFunc = ({ toPath, inAction = "Crud", inTargetPath }) => {
    switch (inAction) {
        case "Crud":
            let endPointsArray = [];

            let endpointsWithContent = [];

            const fromPullEndPoints = pullEndpoints({ toPath, inTargetPath });

            endpointsWithContent = fsReadContent({ filePaths: fromPullEndPoints });

            endpointsWithContent.forEach(loopEndPoint => {
                const methodsContent = pullMethods({
                    filePath: loopEndPoint.fileFullPath,
                    fileContent: loopEndPoint.fileContent,
                    inTargetPath
                });
                // console.log("aaaaaaaa : ", element);

                methodsContent.forEach(loopMethodsContent => {
                    endPointsArray.push({
                        endPointContent: loopEndPoint,
                        methodsContent: loopMethodsContent
                    });
                });
            });

            return endPointsArray;
            break;
        default:
            break;
    }
    return true;
};

export default startFunc;