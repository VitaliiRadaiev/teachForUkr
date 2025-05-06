const fs = require("fs");
const path = require("path");
const glob = require("glob");

const blocksPath = "./src/sections/*/block.json";

const requiredAttributes = {
    isHide: {
        type: "boolean",
        default: false
    },
    padding: {
        type: "object",
        default: {
            top: "lg",
            right: "",
            bottom: "lg",
            left: ""
        }
    },
    margin: {
        type: "object",
        default: {
            top: "",
            right: "",
            bottom: "",
            left: ""
        }
    },
    background: {
        type: "string",
        enum: ["bg-light-primary", "bg-light-primary-80"],
        default: "bg-light-primary-80"
    },
    preview: {
        type: "string"
    },
    id: {
        type: "string"
    },
};

function defaultUpdate() {
    glob(blocksPath, (err, files) => {
        if (err) {
            console.error("Error while searching for files:", err);
            return;
        }

        files.forEach((file) => {
            try {
                const filePath = path.resolve(file);
                const data = fs.readFileSync(filePath, "utf8");
                let json = JSON.parse(data);

                if (!json.attributes) {
                    json.attributes = {};
                }

                let isUpdated = false;

                for (const [key, value] of Object.entries(requiredAttributes)) {
                    if (!json.attributes.hasOwnProperty(key)) {
                        json.attributes[key] = value;
                        isUpdated = true;
                    }
                }

                if (isUpdated) {
                    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
                    console.log(`File updated: ${file}`);
                }
            } catch (error) {
                console.error(`File processing error ${file}:`, error);
            }
        });
    });
}

// strict update / rewrite
function strictUpdate() {
    glob(blocksPath, (err, files) => {
        if (err) {
            console.error("Ошибка при поиске файлов:", err);
            return;
        }
    
        files.forEach((file) => {
            try {
                const filePath = path.resolve(file);
                const data = fs.readFileSync(filePath, "utf8");
                let json = JSON.parse(data);
    
                if (!json.attributes) {
                    json.attributes = {};
                }
    
                json.attributes = { ...json.attributes, ...requiredAttributes };
    
                fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
                console.log(`Обновлен файл: ${file}`);
            } catch (error) {
                console.error(`Ошибка обработки файла ${file}:`, error);
            }
        });
    });
}

defaultUpdate();
//strictUpdate();