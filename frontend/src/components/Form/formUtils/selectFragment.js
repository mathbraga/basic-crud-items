export const selectFragment = (typeId) => {
    const typesList = [
        "",
        "dvd",
        "book",
        "furniture"
    ];

    const type = typesList[typeId];

    const fragmentType = {
        "dvd": {
            inputs: [{
                id: "size",
                label: "Size (MB)",
                type: "number"
            }],
            notification: "Please, provide disc space in MB"
        },
        "book": {
            inputs: [{
                id: "weight",
                label: "Weight (KG)",
                type: "number"
            }],
            notification: "Please, provide book weight in KG"
        },
        "furniture": {
            inputs: [
                {
                    id: "height",
                    label: "Height (CM)",
                    type: "number"
                },
                {
                    id: "width",
                    label: "Width (CM)",
                    type: "number"
                },
                {
                    id: "length",
                    label: "Length (CM)",
                    type: "number"
                }
            ],
            notification: "Please, provide dimensions in HxWxL format"
        },
        "default": {}
    }

    return fragmentType[type] || fragmentType["default"];
}
