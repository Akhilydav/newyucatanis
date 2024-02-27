CKEDITOR.editorConfig = function( config ) {
    // Add the Special Characters plugin to CKEditor
    config.extraPlugins = 'specialCharacters';

    // Define the toolbar configuration, including the Special Characters button
    config.toolbar = [
        { name: 'document', items: [ 'Source' ] },
        { name: 'insert', items: [ 'SpecialChar' ] }, // Add SpecialChar button to the toolbar
    ];
};
