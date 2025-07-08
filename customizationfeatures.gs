function customizeContent(content) {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt("Customize Content", "Please enter your customizations (format: keyword:replacement; ...):", ui.ButtonSet.OK_CANCEL);

  if (response.getSelectedButton() == ui.Button.OK) {
    const customizations = response.getResponseText();
    try {
      const customizedContent = applyCustomizations(content, customizations);
      saveCustomizations(customizations);
      return customizedContent;
    } catch (error) {
      ui.alert("Error", error.message, ui.ButtonSet.OK);
    }
  }
  return content;
}

function applyCustomizations(content, customizations) {
  const customizationsArray = customizations.split(';').map(c => c.trim());
  let modifiedContent = content;

  customizationsArray.forEach(function(customization) {
    const [keyword, replacement] = customization.split(':').map(c => c.trim());
    if (keyword && replacement) {
      const regex = new RegExp(keyword, 'g');
      modifiedContent = modifiedContent.replace(regex, replacement);
    } else {
      throw new Error(`Invalid format: '${customization}'. Expected format is 'keyword:replacement'.`);
    }
  });

  return modifiedContent;
}

function saveCustomizations(customizations) {
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('customizations', customizations);
}

function loadCustomizations() {
  const scriptProperties = PropertiesService.getScriptProperties();
  return scriptProperties.getProperty('customizations') || '';
}