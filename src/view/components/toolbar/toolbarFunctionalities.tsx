function mockToolbarListener(event: React.MouseEvent<HTMLElement>) {
    console.log(event.currentTarget);
    console.log(event.target);
}

const toolbarFunctionalities = [
    {
        label: "Test Tool 1 HEHEHEHE",
        listener: mockToolbarListener
    },{
        label: "Test Tool 2 HEHEHEHE",
        listener: mockToolbarListener
    }
];

export default toolbarFunctionalities;