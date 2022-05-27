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
                inputId: "size",
                label: "Size (MB)"
            }],
            notification: "Please, provide disc space in MB"
        },
        "book": {
            inputs: [{
                inputId: "weight",
                label: "Weight (KG)"
            }],
            notification: "Please, provide book weight in KG"
        },
        "furniture": {
            inputs: [
                {
                    inputId: "height",
                    label: "Height (CM)"
                },
                {
                    inputId: "width",
                    label: "Width (CM)"
                },
                {
                    inputId: "length",
                    label: "Length (CM)"
                }
            ],
            notification: "Please, provide dimensions in HxWxL format"
        },
        "default": {}
    }

    return fragmentType[type] || fragmentType["default"];
}
